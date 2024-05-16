import React, { useState, useEffect } from 'react';

export default function B2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Click ${count} lần`;
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click {count} lần</button>
    </div>
  );
}