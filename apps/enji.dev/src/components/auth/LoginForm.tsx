import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { useAuth } from '@/providers/AuthProvider';
import clsx from 'clsx';

export default function LoginForm() {
  const { loginWithEmail } = useAuth();
  const router = useRouter();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please enter both email and password.');
      return;
    }
    
    setSubmitting(true);
    const loadToast = toast.loading('Logging you in...');
    try {
      await loginWithEmail(email, password);
      toast.dismiss(loadToast);
      toast.success('Welcome back!');
      router.push('/');
    } catch (err: any) {
      toast.dismiss(loadToast);
      toast.error(err.message || 'Failed to sign in. Please verify your credentials.');
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
          Welcome Back
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
          Sign in to your account
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
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
          <div className="flex justify-between items-center mb-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Password
            </label>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={clsx(
              'w-full px-4 py-3 rounded-xl border text-sm font-medium outline-none transition-all',
              'bg-slate-50 dark:bg-slate-950/60 text-slate-850 dark:text-slate-200',
              'border-slate-200 dark:border-slate-800 focus:border-violet-500 dark:focus:border-accent-500',
              'focus:ring-2 focus:ring-violet-500/20 dark:focus:ring-accent-500/20'
            )}
            placeholder="••••••••"
            required
            disabled={submitting}
          />
        </div>

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
          {submitting ? 'Signing in...' : 'Sign In'}
        </button>
      </form>

      <div className="mt-8 text-center text-sm">
        <span className="text-slate-500 dark:text-slate-400">Don&apos;t have an account? </span>
        <Link
          href="/signup"
          className="font-bold text-violet-600 dark:text-accent-400 hover:underline"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
