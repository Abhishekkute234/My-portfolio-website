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
        src="https://lottie.host/d30eb575-f70e-4d8b-8495-4bb1825d1f0b/aJzgL5mnX0.lottie"
        loop
        autoplay
      />

      {/* <DotLottieReact
        src="https://lottie.host/acc0935a-05d2-4f5d-94b3-646a705ba7c2/7C8gXM0eyL.lottie"
        loop
        autoplay
        
      /> */}
    </div>
  );
};

export default Preloader;
