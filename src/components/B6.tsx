import React, { useState, useEffect } from 'react';

export default function B6() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      document.title = `Scroll Position: ${position}`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <p>Scroll Position: {scrollPosition}</p>
    </div>
  );
}
