import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const SlideTop = ({
  children,
  className,
  durationTime,
  direction,
}) => {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    const animationConfig = {
      opacity: 1,
      x: 0,
      y: 0,
      rotateX: 0,
      duration: durationTime ?? 1.2,
      scrollTrigger: {
        trigger: element,
        start: 'top bottom-=250',
        toggleActions: 'play none none reverse',
      },
    };
    const animationfrom = {
      x: 0,
      y: 0,
      opacity: 0,
    };
    if (direction === 'bottom') {
      animationfrom.y = 100;
    } else {
      animationfrom.y = -100;
    }
    gsap.fromTo(element, animationfrom, animationConfig);
  }, []);
  return (
    <div ref={ref} className={className ?? className}>
      {children}
    </div>
  );
};