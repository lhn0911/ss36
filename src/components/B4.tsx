import React, { useState, useEffect, useRef } from 'react';

export default function B4() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} placeholder="Focus me..." />
    </div>
  );
}