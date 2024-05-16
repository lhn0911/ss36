import React, { useState, useEffect } from 'react';

export default function B5() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const tick = () => {
      setCurrentTime(new Date());
    };

    const intervalId = setInterval(tick, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div>
      <p>Thời gian hiện tại:{formattedTime}</p>
    </div>
  );
}
