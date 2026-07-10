import React, { ReactElement, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from '@/components/meta/Head';
import { getBaseUrl } from '@/helpers/url';

// This page is no longer used for OAuth callback (Appwrite removed).
// It simply redirects visitors back to the home page.
export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, [router]);

  return (
    <>
      <Head
        ogImage={`${getBaseUrl()}/assets/images/favicon.ico`}
        title="Redirecting · Abhishek Kute"
        description="Redirecting..."
        overrideTitle
      />
      <div className="min-h-screen w-full flex items-center justify-center">
        <p className="text-slate-500 dark:text-slate-400 text-sm">Redirecting…</p>
      </div>
    </>
  );
}

AuthCallback.getLayout = function getLayout(page: ReactElement) {
  return <main>{page}</main>;
};
