import React, { useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Preloader = ({ onDone }) => {
  useEffect(() => {
    // Trigger the `onDone` callback after 4 seconds
    const timer = setTimeout(() => {
      onDone();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#C5BAFF',
      }}
    >
      <DotLottieReact
        src="https://lottie.host/04f7d108-1616-47e0-8724-647ab8280492/chZaD0EF17.lottie"
        loop
        autoplay
      />
    </div>
  );
};

export default Preloader;
