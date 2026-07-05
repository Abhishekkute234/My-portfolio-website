import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { useAuth } from '@/providers/AuthProvider';
import clsx from 'clsx';

// Simple Inline SVG Icons for OAuth
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 127.14 96.36" fill="currentColor">
      <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.5-5c.89-.65,1.76-1.34,2.58-2.07a75.48,75.48,0,0,0,72.9,0c.82.73,1.69,1.42,2.58,2.07a68.43,68.43,0,0,1-10.5,5,77.7,77.7,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31-18.83C129,54.65,122.84,31.58,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.9,46,53.9,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.14,46,96.14,53,91,65.69,84.69,65.69Z"/>
    </svg>
  );
}

export default function LoginForm() {
  const { loginWithEmail, loginWithOAuth } = useAuth();
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
      toast.success('Welcome back!');
      toast.dismiss(loadToast);
      router.push('/');
    } catch (err: any) {
      toast.dismiss(loadToast);
      toast.error(err.message || 'Failed to sign in. Please verify your credentials.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleOAuthLogin = async (provider: 'google' | 'github' | 'discord') => {
    try {
      await loginWithOAuth(provider);
    } catch (err: any) {
      toast.error(`Could not initialize ${provider} login session.`);
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
          Sign in to your Appwrite-powered account
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

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white dark:bg-[#0c1222] px-3 text-slate-500 dark:text-slate-400 font-semibold">
            Or continue with
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <button
          type="button"
          onClick={() => handleOAuthLogin('google')}
          disabled={submitting}
          className={clsx(
            'flex items-center justify-center py-2.5 px-4 rounded-xl border transition-all duration-150',
            'bg-slate-50 hover:bg-slate-100 dark:bg-slate-950/40 dark:hover:bg-slate-900/60',
            'border-slate-200 dark:border-slate-800 hover:scale-[1.03] active:scale-[0.98]'
          )}
          title="Sign in with Google"
        >
          <GoogleIcon className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={() => handleOAuthLogin('github')}
          disabled={submitting}
          className={clsx(
            'flex items-center justify-center py-2.5 px-4 rounded-xl border transition-all duration-150',
            'bg-slate-50 hover:bg-slate-100 dark:bg-slate-950/40 dark:hover:bg-slate-900/60',
            'border-slate-200 dark:border-slate-800 hover:scale-[1.03] active:scale-[0.98]',
            'text-slate-900 dark:text-white'
          )}
          title="Sign in with GitHub"
        >
          <GitHubIcon className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={() => handleOAuthLogin('discord')}
          disabled={submitting}
          className={clsx(
            'flex items-center justify-center py-2.5 px-4 rounded-xl border transition-all duration-150',
            'bg-slate-50 hover:bg-slate-100 dark:bg-slate-950/40 dark:hover:bg-slate-900/60',
            'border-slate-200 dark:border-slate-800 hover:scale-[1.03] active:scale-[0.98]',
            'text-[#5865F2]'
          )}
          title="Sign in with Discord"
        >
          <DiscordIcon className="h-5 w-5" />
        </button>
      </div>

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
