import { GoogleAnalytics } from '@next/third-parties/google';
import { useEffect, useState } from 'react';

import RootLayout from '@/components/layouts/Root';
import WithNavigationFooter from '@/components/layouts/WithNavigationFooter';
import Preloader from '@/components/Loder/Preloader_1';
import Provider from '@/providers';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';

import '@/styles/main.css';

type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function getDefaultLayout(page: ReactElement): ReactNode {
  return <WithNavigationFooter>{page}</WithNavigationFooter>;
}

function App({ Component, pageProps, router }: AppPropsWithLayout) {
  const [isLoading, setIsLoading] = useState(true);

  // Logic to stop the preloader after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  let getLayout;

  if (router.query.simpleLayout) {
    getLayout = (page: ReactElement) => <main>{page}</main>;
  } else if (Component.getLayout) {
    getLayout = Component.getLayout;
  } else {
    getLayout = getDefaultLayout;
  }

  return (
    <Provider>
      {isLoading ? (
        // Show Preloader while loading
        <Preloader onDone={() => setIsLoading(false)} />
      ) : (
        // Show the main layout after loading
        <RootLayout>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {getLayout(<Component {...pageProps} />)}
          <GoogleAnalytics gaId="G-FB9QLDNKNN" />
        </RootLayout>
      )}
    </Provider>
  );
}

export default App;
