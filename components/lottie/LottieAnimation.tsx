import React from 'react';
import Player from 'lottie-react';
import animationData from '@/public/lottie/lottie_account.json';

interface LottieAnimationProps {
  animationData: object;
}

const LottieAnimation = ({ animationData }: LottieAnimationProps) => {
  return (
    <Player
      autoplay
      loop
      animationData={animationData} 
      // className="h-[300px] w-[300px] "
      className="h-16 w-16 lg:h-40 lg:w-40 object-contain"
      // style={{ height: '300px', width: '300px' }}
    />
  );
};

export default LottieAnimation;

// <-- USAGE -->
// import LottieAnimation from "./LottieAnimation";
// <LottieAnimation animationData={animationData} />
