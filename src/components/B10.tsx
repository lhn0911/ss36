import React, { useState,useEffect } from 'react';


export default function B10() {
    const [keyInfo, setKeyInfo] = useState<{ key: string; keyCode: number } | null>(null);

    useEffect(() => {
      const handleKeyPress = (event: KeyboardEvent) => {
        const { key, keyCode } = event;
        setKeyInfo({ key, keyCode });
      };
  
      window.addEventListener('keydown', handleKeyPress);
  
      return () => {
        window.removeEventListener('keydown', handleKeyPress);
      };
    }, []);
  
  return (
    <div>
      {keyInfo && (
        <div>
          <p>Bạn đã nhấn phím: {keyInfo.key}</p>
          <p>Mã phím: {keyInfo.keyCode}</p>
        </div>
      )}
    </div>
  )
}
