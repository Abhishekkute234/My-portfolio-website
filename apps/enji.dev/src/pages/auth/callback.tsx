import React, { ReactElement, useEffect } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { useAuth } from '@/providers/AuthProvider';
import Head from '@/components/meta/Head';
import clsx from 'clsx';
import { getBaseUrl } from '@/helpers/url';

export default function AuthCallback() {
  const { refreshUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const completeOAuth = async () => {
      try {
        // Appwrite sets credentials/session automatically on redirect.
        // We call refreshUser to retrieve the session user details.
        await refreshUser();
        toast.success('Successfully logged in!');
        router.push('/');
      } catch (err: any) {
        console.error('OAuth Callback Error:', err);
        toast.error('Authentication session failed. Please login again.');
        router.push('/login');
      }
    };

    completeOAuth();
  }, [refreshUser, router]);

  return (
    <>
      <Head
        ogImage={`${getBaseUrl()}/assets/images/favicon.ico`}
        title="Authenticating · Abhishek Kute"
        description="Completing sign-in..."
        overrideTitle
      />
      <div className={clsx(
        'background-grid min-h-screen w-full flex flex-col items-center justify-center p-4'
      )}>
        <div className={clsx(
          'w-full max-w-sm p-8 rounded-3xl text-center shadow-2xl border transition-all duration-300',
          'bg-white/60 dark:bg-slate-900/60 backdrop-blur-lg',
          'border-slate-200/60 dark:border-slate-800/60'
        )}>
          <div className="flex justify-center mb-6">
            <div className={clsx(
              'animate-spin rounded-full h-10 w-10 border-4 border-t-transparent',
              'border-violet-600 dark:border-accent-500'
            )}></div>
          </div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
            Verifying Session
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Please wait while we complete your authentication...
          </p>
        </div>
      </div>
    </>
  );
}

AuthCallback.getLayout = function getLayout(page: ReactElement) {
  return <main>{page}</main>;
};
