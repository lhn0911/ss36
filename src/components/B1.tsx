import React, { useState } from 'react';

export default function B1() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value.trim() || 'Default Title';
    document.title = newTitle;
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nhập tiêu đề"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}