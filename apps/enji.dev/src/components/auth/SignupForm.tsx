import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { useAuth } from '@/providers/AuthProvider';
import clsx from 'clsx';

export default function SignupForm() {
  const { signupWithEmail } = useAuth();
  const router = useRouter();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg('Please enter both email and password.');
      return;
    }
    if (password.length < 8) {
      setErrorMsg('Password must be at least 8 characters long.');
      return;
    }
    
    setErrorMsg('');
    setSubmitting(true);
    const loadToast = toast.loading('Creating your account...');
    try {
      await signupWithEmail(email, password, name || undefined);
      toast.dismiss(loadToast);
      toast.success('Account created! Welcome aboard.');
      router.push('/');
    } catch (err: any) {
      toast.dismiss(loadToast);
      setErrorMsg(err.message || 'Failed to sign up. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={clsx(
      'w-full max-w-md p-8 rounded-3xl shadow-2xl border transition-all duration-300',
      'bg-white/60 dark:bg-slate-900/60 backdrop-blur-lg',
      'border-slate-200/60 dark:border-slate-800/60'
    )}>
      <div className="text-center mb-8">
        <h2 className={clsx(
          'text-3xl font-extrabold tracking-tight bg-gradient-to-r bg-clip-text text-transparent',
          'from-violet-600 to-indigo-600 dark:from-accent-400 dark:to-violet-400'
        )}>
          Create Account
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
          Register a new account — stored securely in MongoDB
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={clsx(
              'w-full px-4 py-3 rounded-xl border text-sm font-medium outline-none transition-all',
              'bg-slate-50 dark:bg-slate-950/60 text-slate-850 dark:text-slate-200',
              'border-slate-200 dark:border-slate-800 focus:border-violet-500 dark:focus:border-accent-500',
              'focus:ring-2 focus:ring-violet-500/20 dark:focus:ring-accent-500/20'
            )}
            placeholder="Abhishek Kute"
            disabled={submitting}
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={clsx(
              'w-full px-4 py-3 rounded-xl border text-sm font-medium outline-none transition-all',
              'bg-slate-50 dark:bg-slate-950/60 text-slate-850 dark:text-slate-200',
              'border-slate-200 dark:border-slate-800 focus:border-violet-500 dark:focus:border-accent-500',
              'focus:ring-2 focus:ring-violet-500/20 dark:focus:ring-accent-500/20'
            )}
            placeholder="name@example.com"
            required
            disabled={submitting}
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errorMsg) setErrorMsg('');
              }}
              className={clsx(
                'w-full px-4 py-3 rounded-xl border text-sm font-medium outline-none transition-all',
                'bg-slate-50 dark:bg-slate-950/60 text-slate-850 dark:text-slate-200',
                'border-slate-200 dark:border-slate-800 focus:border-violet-500 dark:focus:border-accent-500',
                'focus:ring-2 focus:ring-violet-500/20 dark:focus:ring-accent-500/20',
                'pr-12'
              )}
              placeholder="•••••••• (Min 8 chars)"
              required
              disabled={submitting}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
              title={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {errorMsg && (
          <div className="text-red-500 dark:text-red-400 text-sm font-medium text-center bg-red-50 dark:bg-red-900/20 p-2.5 rounded-lg border border-red-100 dark:border-red-900/30">
            {errorMsg}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className={clsx(
            'w-full py-3 px-4 rounded-xl text-white font-bold text-sm shadow-lg shadow-violet-500/20 transition-all duration-150',
            'bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-accent-600 dark:to-violet-600',
            'hover:opacity-95 active:scale-[0.98]',
            'disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100'
          )}
        >
          {submitting ? 'Creating account...' : 'Sign Up'}
        </button>
      </form>

      <div className="mt-8 text-center text-sm">
        <span className="text-slate-500 dark:text-slate-400">Already have an account? </span>
        <Link
          href="/login"
          className="font-bold text-violet-600 dark:text-accent-400 hover:underline"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}
