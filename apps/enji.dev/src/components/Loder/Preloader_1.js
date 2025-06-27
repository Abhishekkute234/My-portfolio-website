import React, { useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Preloader = ({ onDone }) => {
  useEffect(() => {
    // Trigger the `onDone` callback after 4 seconds
    const timer = setTimeout(() => {
      onDone();
    }, 3334);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#0C1222',
      }}
    >
      <DotLottieReact
        src="https://lottie.host/be7c91e5-123a-471e-9dcd-7c512a70539e/SSUXmYaoxO.lottie"
        loop
        autoplay
      />
    </div>
  );
};

export default Preloader;
