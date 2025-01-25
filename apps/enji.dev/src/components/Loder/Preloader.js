import React, { useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Preloader = ({ onDone }) => {
  useEffect(() => {
    // Trigger the `onDone` callback after 4 seconds
    const timer = setTimeout(() => {
      onDone();
    }, 2500);
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
        src="https://lottie.host/7f977d54-5431-43ad-9466-a23c9613fe35/JBCzu5o3Tp.lottie"
        loop
        autoplay
      />
    </div>
  );
};

export default Preloader;
