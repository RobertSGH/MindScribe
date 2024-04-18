import { useRef, useEffect } from 'react';
import Lottie, { LottieRef } from 'lottie-react';

interface IntroductionProps {
  animationData?: any;
  heading: string;
  paragraph: string;
}

const Introduction = ({
  animationData,
  heading,
  paragraph,
}: IntroductionProps) => {
  const lottieRef: LottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.stop();
    }
    return () => {
      if (lottieRef.current) {
        lottieRef.current.stop();
      }
    };
  }, []);

  const startAnimation = () => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  };

  const stopAnimation = () => {
    if (lottieRef.current) {
      lottieRef.current.stop();
    }
  };

  const lottieOptions = {
    animationData,
    lottieRef,
    loop: true,
    autoplay: false,
  };

  return (
    <section
      className='flex flex-col items-start gap-4'
      onMouseEnter={startAnimation}
      onMouseLeave={stopAnimation}
      onTouchStart={startAnimation}
      onTouchEnd={stopAnimation}
    >
      <div className='flex flex-row gap-3'>
        <div className='bg-gray-100 flex-shrink-0 rounded-xl'>
          <Lottie {...lottieOptions} />
        </div>
        <div className='flex items-center gap-2'>
          <h2 className='text-lg md:text-xl font-semibold'>{heading}</h2>
        </div>
      </div>
      <div className='text-greyPrimary'>
        <p>{paragraph}</p>
      </div>
    </section>
  );
};

export default Introduction;
