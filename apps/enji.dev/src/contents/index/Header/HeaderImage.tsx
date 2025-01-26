import clsx from 'clsx';
import { m, useAnimationControls } from 'framer-motion';
import Image from 'next/image';

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
        <m.div initial={{ opacity: 0 }} animate={controlsHeaderImage}>
          <Image
            alt="Enji Kusnadi Illustration"
            src="/assets/images/me.svg"
            width={457}
            height={526}
            className={clsx(
              'hidden max-w-none',
              'lg:block',
              'dark:brightness-[.82]'
            )}
            quality={100}
            priority
          />
        </m.div>
      </div>
    </div>
  );
}

export default HeaderImage;
