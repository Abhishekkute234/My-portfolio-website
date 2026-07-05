import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'next-themes';

import mdxCustomComponents from '@/components/mdx/custom-components';
import { AuthProvider } from '@/providers/AuthProvider';
import ColorAccentProvider from '@/providers/ColorAccentProvider';
import FramerMotionProvider from '@/providers/FramerMotionProvider';
import GlobalStateProvider from '@/providers/GlobalStateProvider';

import type { PropsWithChildren } from 'react';

function Provider({ children = null }: PropsWithChildren) {
  return (
    <AuthProvider>
      <FramerMotionProvider>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <ColorAccentProvider defaultScheme="violet">
            <GlobalStateProvider>
              <MDXProvider components={mdxCustomComponents}>
                {children}
              </MDXProvider>
            </GlobalStateProvider>
          </ColorAccentProvider>
        </ThemeProvider>
      </FramerMotionProvider>
    </AuthProvider>
  );
}

export default Provider;
