import React, { useState } from 'react';
import './B3.css'
export default function B3() {
  const [activeTab, setActiveTab] = useState('Trang chủ');
  const tabs = ['Trang chủ', 'Sản phẩm', 'Giới thiệu', 'Liên hệ'];
  const handleTabClick = (tab:any) => {
    setActiveTab(tab);
  };

  return (
    <div className="navbar">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={tab === activeTab ? 'active' : ''}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}