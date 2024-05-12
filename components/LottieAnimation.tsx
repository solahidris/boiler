import React, { useEffect, useRef } from 'react';

interface LottieAnimationProps {
  animationData: any;
  loop?: boolean;
  speed?: number;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData, loop = true, speed = 1 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationInstanceRef = useRef<any>(null);

  useEffect(() => {
    let anim: any;

    const loadAnimation = async () => {
      const lottie = await import('lottie-web');
      anim = lottie.default.loadAnimation({
        container: containerRef.current!,
        renderer: 'svg',
        loop,
        autoplay: true,
        animationData,
      });
      animationInstanceRef.current = anim;
    };

    if (containerRef.current) {
      loadAnimation();
    }

    return () => {
      if (anim) {
        anim.destroy();
      }
    };
  }, [animationData, loop]);

  useEffect(() => {
    if (animationInstanceRef.current) {
      animationInstanceRef.current.setSpeed(speed);
    }
  }, [speed]);

  return <div ref={containerRef} />;
};

export default LottieAnimation;

// import animation_house_homepage from "../public/Animation_house_homepage.json";
// <LottieAnimation
//   animationData={animation_house_homepage}
//   loop={false}
//   speed={0.5}
// />