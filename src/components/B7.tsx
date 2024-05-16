import React, { useState, useEffect, useRef } from 'react';

export default function B7() {
  const [count, setCount] = useState(0);
  
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Giá trị trước: {prevCountRef.current}</p>
      <p>Giá trị của hiện tại: {count}</p>
      <button onClick={handleIncrement}>Tăng</button>
    </div>
  );
}
