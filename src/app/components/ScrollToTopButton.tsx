'use client'
import { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button
        className="fixed bottom-4 right-4 bg-[#473bf0] text-white p-3 rounded-full shadow-lg hover:bg-[#392fce]"
        onClick={scrollToTop}
      >
        <FaAngleUp />
      </button>
    )
  );
};

export default ScrollToTopButton;