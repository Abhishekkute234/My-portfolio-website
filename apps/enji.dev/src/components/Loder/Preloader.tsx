import React, { useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface PreloaderProps {
  onDone: () => void;
}

const Preloader = ({ onDone }: PreloaderProps) => {
  useEffect(() => {
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
        backgroundColor: '#0C1222',
      }}
    >
      <DotLottieReact
        src="https://lottie.host/c83b5492-2704-4dd5-8987-5cad4fae12f4/UZjGgB6Fnn.lottie"
        loop
        autoplay
      />
    </div>
  );
};

export default Preloader;
