import React from 'react';

export default function B8() {
  const currentMonth = new Date().getMonth()+1;

  const getSeason = (month:number) => {
    if (month >= 1 && month <= 3) {
      return 'Xuân';
    } else if (month >= 4 && month <= 6) {
      return 'Hạ';
    } else if (month >= 7 && month <= 9) {
      return 'Thu';
    } else if (month >= 10 && month <= 12) {
      return 'Đông';
    }
  };

  const currentSeason = getSeason(currentMonth);

  return (
    <div>
      <p>Bây giờ là tháng: {currentMonth}</p>
      <p>Mùa hiện tại: {currentSeason}</p>
    </div>
  );
}
