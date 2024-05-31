import { useEffect, useState } from 'react';
import { MutableRefObject } from 'react';

type IntersectionObserverHookOptions = IntersectionObserverInit & {
  freezeOnceVisible?: boolean;
};

const useIntersectionObserver = <T extends HTMLElement>(
  targetRef: MutableRefObject<T | null>,
  options: IntersectionObserverHookOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  }
): boolean => {
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    if (!targetRef.current) return;

    const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (options.freezeOnceVisible) {
            observer.unobserve(entry.target);
          }
        } else {
          setIsInView(false);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [targetRef, options]);

  return isInView;
};

export default useIntersectionObserver;
