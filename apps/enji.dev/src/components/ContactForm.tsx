import React, { useState } from 'react';
import toast from 'react-hot-toast';
import clsx from 'clsx';
import axios from 'axios';
import Link from 'next/link';
import { useAuth } from '@/providers/AuthProvider';
import { account } from '@/lib/appwrite';

export default function ContactForm() {
  const { user, loading } = useAuth();
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) {
      toast.error('Please enter a message.');
      return;
    }

    setSubmitting(true);
    const loadToast = toast.loading('Sending message...');
    try {
      const jwtRes = await account.createJWT();
      const jwt = jwtRes.jwt;

      const response = await axios.post('/api/contact', {
        message,
      }, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      if (response.data.success) {
        toast.success('Thank you! Your message has been sent.');
        setMessage('');
      } else {
        toast.error(response.data.message || 'Something went wrong.');
      }
    } catch (err: any) {
      console.error(err);
      const errMsg = err.response?.data?.message || 'Failed to submit feedback. Please check details and try again.';
      toast.error(errMsg);
    } finally {
      toast.dismiss(loadToast);
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className={clsx(
        'w-full max-w-xl mx-auto p-6 md:p-8 rounded-3xl border animate-pulse my-8',
        'bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border-slate-200 dark:border-slate-800'
      )}>
        <div className="h-6 w-1/3 bg-slate-200 dark:bg-slate-800 rounded mb-4" />
        <div className="h-4 w-2/3 bg-slate-200 dark:bg-slate-800 rounded mb-6" />
        <div className="h-32 bg-slate-200 dark:bg-slate-800 rounded-xl mb-4" />
        <div className="h-10 bg-slate-200 dark:bg-slate-800 rounded-xl" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className={clsx(
        'w-full max-w-xl mx-auto p-8 rounded-3xl border transition-all duration-300 my-8 shadow-xl text-center',
        'bg-white/50 dark:bg-slate-900/50 backdrop-blur-md',
        'border-slate-200/60 dark:border-slate-800/60'
      )}>
        <div className="mb-6 flex flex-col items-center justify-center">
          <div className="p-3 bg-violet-100 dark:bg-violet-950/40 text-violet-600 dark:text-accent-400 rounded-2xl mb-4">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className={clsx(
            'text-2xl font-extrabold tracking-tight bg-gradient-to-r bg-clip-text text-transparent',
            'from-violet-600 to-indigo-600 dark:from-accent-400 dark:to-violet-400'
          )}>
            Sign In to Share Feedback
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 max-w-sm">
            We love hearing from you! Please log in to your account to send a message or share your feedback.
          </p>
        </div>

        <Link
          href="/login"
          className={clsx(
            'inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-white font-bold text-sm shadow-md transition-all duration-150',
            'bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-accent-600 dark:to-violet-600',
            'hover:opacity-95 active:scale-[0.98]'
          )}
        >
          Sign In
        </Link>
      </div>
    );
  }

  return (
    <div className={clsx(
      'w-full max-w-xl mx-auto p-6 md:p-8 rounded-3xl border transition-all duration-300 my-8 shadow-xl',
      'bg-white/50 dark:bg-slate-900/50 backdrop-blur-md',
      'border-slate-200/60 dark:border-slate-800/60'
    )}>
      <div className="mb-6">
        <h3 className={clsx(
          'text-2xl font-extrabold tracking-tight bg-gradient-to-r bg-clip-text text-transparent',
          'from-violet-600 to-indigo-600 dark:from-accent-400 dark:to-violet-400'
        )}>
          Send a Message
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
          Got a project idea, feedback, or just want to connect? Let me know!
        </p>
        <div className="mt-2 text-xs font-semibold text-slate-400 dark:text-slate-500">
          Sending as: <span className="text-violet-600 dark:text-accent-400">{user.name || user.email}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className={clsx(
              'w-full px-4 py-2.5 rounded-xl border text-sm font-medium outline-none transition-all resize-none',
              'bg-slate-50/50 dark:bg-slate-950/40 text-slate-850 dark:text-slate-200',
              'border-slate-200 dark:border-slate-800 focus:border-violet-500 dark:focus:border-accent-500',
              'focus:ring-2 focus:ring-violet-500/20 dark:focus:ring-accent-500/20'
            )}
            placeholder="Write your message here..."
            required
            disabled={submitting}
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className={clsx(
            'w-full py-2.5 px-4 rounded-xl text-white font-bold text-sm shadow-md transition-all duration-150',
            'bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-accent-600 dark:to-violet-600',
            'hover:opacity-95 active:scale-[0.98]',
            'disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100'
          )}
        >
          {submitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
