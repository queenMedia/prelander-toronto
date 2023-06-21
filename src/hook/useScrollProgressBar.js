import { useState, useEffect } from 'react';

const useScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / maxScrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollProgress;
};

export { useScrollProgressBar };
