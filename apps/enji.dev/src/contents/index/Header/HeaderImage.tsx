import clsx from 'clsx';
import { m, useAnimationControls } from 'framer-motion';

import HeaderImageAnimation from './HeaderImageAnimation';

function HeaderImage() {
  const controlsHeaderImage = useAnimationControls();
  const controlsHeaderOutline = useAnimationControls();

  return (
    <div
      className={clsx(
        'from-accent-400/20 via-accent-400/0 absolute right-0 top-0 h-[590px] w-[375px] rounded-full bg-gradient-to-t',
        'dark:from-accent-600/10 dark:via-accent-600/0'
      )}
    >
      <div className={clsx('absolute bottom-0 right-0 overflow-hidden')}>
        <m.div
          className={clsx('absolute z-10')}
          initial={{ opacity: 1 }}
          animate={controlsHeaderOutline}
        >
          <HeaderImageAnimation
            onAnimationComplete={() => {
              controlsHeaderOutline.start({
                opacity: 0,
                transition: {
                  duration: 0.2,
                  delay: 0.15,
                },
              });

              controlsHeaderImage.start({
                opacity: 1,
                transition: {
                  duration: 0.15,
                },
              });
            }}
          />
        </m.div>
        <m.div
          initial={{ opacity: 0 }}
          animate={controlsHeaderImage}
          className={clsx('hidden lg:flex', 'items-center justify-center')}
          style={{ width: 400, height: 500 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Abhishek Kute Logo"
            src="/assets/images/favicon.ico"
            style={{
              width: 380,
              height: 380,
              objectFit: 'cover',
              borderRadius: '50%',
              filter: 'drop-shadow(0 0 40px rgba(139,92,246,0.5))',
            }}
          />
        </m.div>
      </div>
    </div>
  );
}

export default HeaderImage;
