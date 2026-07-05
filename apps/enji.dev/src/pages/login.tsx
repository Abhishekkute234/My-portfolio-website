import React, { ReactElement } from 'react';
import Head from '@/components/meta/Head';
import LoginForm from '@/components/auth/LoginForm';
import Link from 'next/link';
import clsx from 'clsx';
import { getBaseUrl } from '@/helpers/url';

export default function Login() {
  return (
    <>
      <Head
        ogImage={`${getBaseUrl()}/assets/images/favicon.ico`}
        title="Sign In · Abhishek Kute"
        description="Sign in to your account."
        overrideTitle
      />
      <div className={clsx(
        'background-grid min-h-screen w-full flex flex-col items-center justify-center p-4 relative'
      )}>
        {/* Back to Home link */}
        <div className="absolute top-6 left-6 z-50">
          <Link
            href="/"
            className={clsx(
              'flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold border transition-all duration-150',
              'bg-white/60 dark:bg-slate-900/60 backdrop-blur border-slate-200/60 dark:border-slate-800/60',
              'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:scale-[1.02] active:scale-[0.98]'
            )}
          >
            ← Back to Home
          </Link>
        </div>

        <div className="w-full flex items-center justify-center py-12">
          <LoginForm />
        </div>
      </div>
    </>
  );
}

// Use a simple layout without default navbar/footer to keep auth screen focused
Login.getLayout = function getLayout(page: ReactElement) {
  return <main>{page}</main>;
};
