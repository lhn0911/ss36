import React, { useState, useEffect } from 'react';

export default function B9() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <p>Thời gian đã trôi qua: {count} giây</p>
    </div>
  );
}
