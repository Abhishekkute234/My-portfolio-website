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
        src="https://lottie.host/e0545c25-8268-4905-8687-1401beb14be3/kjGAX3lA7c.lottie"
        loop
        autoplay
      />
    </div>
  );
};

export default Preloader;
