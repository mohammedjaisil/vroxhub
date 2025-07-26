// RippleEffect.js
import React, { useEffect } from 'react';
import './RippleEffect.css';

export default function RippleEffect() {
  useEffect(() => {
    const handleClick = (e) => {
      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 800);
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return null; // no UI, just effect
}
