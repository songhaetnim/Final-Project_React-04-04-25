import React from 'react';

const CherryBlossom = () => {
  return (
    <div className="cherry-blossom">
      <img
        src="https://www.example.com/cherry-blossom.png" // 벚꽃 이미지 URL
        alt="Cherry Blossom"
        style={{
          width: '200px', // 이미지 너비
          height: 'auto', // 이미지 높이를 너비에 맞게 조정
        }}
      />
    </div>
  );
};

export default CherryBlossom;
