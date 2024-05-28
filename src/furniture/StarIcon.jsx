import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';

const StarRating = () => {
  // 별점 상태를 관리하는 state 변수
  const [rating, setRating] = useState(0);

  // 별 아이콘을 클릭할 때 호출되는 함수
  const handleClick = (index) => {
    // 클릭한 부분의 인덱스를 기반으로 새로운 별점 설정
    setRating((index + 1) / 10);
  };

  return (
    // 별점 컴포넌트를 가로로 정렬하여 표시
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* 다섯 개의 별 생성 */}
      {[...Array(5)].map((_, starIndex) => {
        // 현재 별점의 정수 부분 (완전한 별)과 소수 부분 (부분 별) 계산
        const fullStars = Math.floor(rating);
        const partialStar = rating - fullStars;
        return (
          <div style={{ position: 'relative', display: 'inline-block' }} key={starIndex}>
            {/* 완전한 별의 색상 설정 */}
            <StarIcon
              style={{
                cursor: 'pointer',
                color: starIndex < fullStars ? 'gold' : 'grey',
                fontSize: '2rem', // 별 아이콘의 크기 설정
                position: 'relative',
                zIndex: 1, // 층위 설정 (다른 요소들 위에 위치)
              }}
            />
            {/* 부분 별의 색상 설정 */}
            {starIndex === fullStars && partialStar > 0 && (
              <StarIcon
                style={{
                  color: 'gold',
                  fontSize: '2rem', // 별 아이콘의 크기 설정
                  position: 'absolute', // 별 아이콘의 위치를 설정하기 위해 사용
                  top: 0, // 부분 별을 완전한 별 위에 오도록 설정
                  left: 0,
                  // 클립 경로를 사용하여 부분 별의 색상을 부분적으로 적용
                  clipPath: `inset(0 ${100 - partialStar * 100}% 0 0)`, 
                  zIndex: 2, // 층위 설정 (완전한 별 위에 위치)
                }}
              />
            )}
            {/* 별의 각 부분을 클릭 가능하도록 설정 */}
            {[...Array(10)].map((_, partIndex) => (
              <div
                key={partIndex}
                style={{
                  position: 'absolute', // 클릭 영역을 별 아이콘 위에 겹치도록 설정
                  top: 0, // 별 아이콘과 겹치도록 설정
                  left: `${partIndex * 10}%`, // 각 부분 별의 위치를 설정
                  width: '10%', // 각 부분 별의 너비를 설정하여 클릭 가능 영역을 만듦
                  height: '100%', // 클릭 영역의 높이를 설정하여 별 아이콘과 크기를 맞춤
                  cursor: 'pointer', // 클릭 가능한 커서로 설정
                  zIndex: 3, // 클릭 영역을 완전한 별과 부분 별 위에 위치
                }}
                onClick={() => handleClick(starIndex * 10 + partIndex)} // 클릭 시 별점 설정
              />
            ))}
          </div>
        );
      })}
      {/* 현재 선택된 별점을 표시하는 텍스트 */}
      <p style={{ marginLeft: '10px' }}>별점: {rating.toFixed(1)}</p>
    </div>
  );
};

export default StarRating;



// 상태 관리:  useState 훅을 사용하여 rating 상태를 관리함.

// 클릭 이벤트 핸들러: handleClick 함수는 클릭한 부분의 인덱스를 기반으로 별점을 0.1 단위로 설정함.

// 별 생성: 5개의 별을 생성하며, 각 별을 10개의 부분으로 나눔.
// - fullStars는 완전한 별의 개수를 나타내고, partialStar는 부분 별의 비율을 나타냄

// 스타일 적용: 각 별은 완전한 별과 부분 별로 나뉘며, 부분 별은 clipPath 속성을 사용하여 색상을 부분적으로 적용함
// - left와 width 속성을 사용하여 각 별을 10개의 부분으로 나눠 클릭할 수 있도록 설정함

// 별점 표시: 현재 선택된 별점을 소수 첫째 자리까지 표시함
// - 이렇게 하면 다섯 개의 별 모양을 표시하면서, 각 별이 0.1 단위로 나뉘어 별점을 설정할 수 있습니다. 
// - 클릭한 부분에 따라 별의 색상이 부분적으로 반영됨. 
 




