import clsx from 'clsx';
import { m } from 'framer-motion';

const animation = {
  hide: { pathLength: 0 },
  show: (i) => {
    const delay = 0.3 + i * 0.15;
    return {
      pathLength: 1,
      transition: {
        pathLength: { delay, duration: 0.8 },
      },
    };
  },
};

interface HeaderImageAnimationProps {
  onAnimationComplete?: () => void;
}

function HeaderImageAnimation({
  onAnimationComplete = () => {},
}: HeaderImageAnimationProps) {
  return (
    <m.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      initial="hide"
      animate="show"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clsx(
        'stroke-accent-500 h-[400px] w-[400px] opacity-60',
        'dark:opacity-40'
      )}
      onAnimationComplete={onAnimationComplete}
    >
      {/* Perfect circle background */}
      <m.circle
        cx="50"
        cy="50"
        r="45"
        variants={animation}
        custom={1}
        fill="black"
      />

      {/* White cat silhouette */}
      <m.path
        d="M30 35C30 25 40 20 50 20C60 20 70 25 70 35C70 50 60 65 50 65C40 65 30 50 30 35Z"
        variants={animation}
        custom={2}
        fill="white"
      />

      {/* Left ear */}
      <m.path
        d="M35 25L25 15L40 22"
        variants={animation}
        custom={3}
        fill="white"
      />

      {/* Right ear */}
      <m.path
        d="M65 25L75 15L60 22"
        variants={animation}
        custom={3}
        fill="white"
      />

      {/* Pixel sunglasses */}
      <m.path
        d="M35 40h30" // Glasses bridge
        variants={animation}
        custom={4}
        stroke="black"
        fill="none"
      />
      <m.path
        d="M35 40h5v5h-5zm5 0h5v5h-5zm15 0h5v5h-5zm5 0h5v5h-5z" // Glasses pixels
        variants={animation}
        custom={4}
        fill="black"
      />

      {/* Tail/arm curve */}
      <m.path
        d="M70 50C75 45 75 35 70 30"
        variants={animation}
        custom={5}
        stroke="white"
        fill="none"
      />
    </m.svg>
  );
}

export default HeaderImageAnimation;

// import Preloader from '@/components/Loder/Preloader';

// interface HeaderImageAnimationProps {
//   onAnimationComplete?: () => void;
// }

// function HeaderImageAnimation({
//   onAnimationComplete = () => {},
// }: HeaderImageAnimationProps) {
//   return (
//     <div className="flex flex-col items-center justify-center">
//       <Preloader onDone={onAnimationComplete} />
//     </div>
//   );
// }

// export default HeaderImageAnimation;
