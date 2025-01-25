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
        src="https://lottie.host/a50f7f46-6856-4e37-b409-c04dda899aa7/IHBP3plygy.lottie"
        loop
        autoplay
      />
    </div>
  );
};

export default Preloader;
