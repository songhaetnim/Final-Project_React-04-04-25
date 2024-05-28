import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    setRating((index + 1) / 10);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {[...Array(5)].map((_, starIndex) => {
        const fullStars = Math.floor(rating);
        const partialStar = rating - fullStars;
        return (
          <div style={{ position: 'relative', display: 'inline-block' }} key={starIndex}>
            <StarIcon
              style={{
                cursor: 'pointer',
                color: starIndex < fullStars ? 'gold' : 'grey',
                fontSize: '2rem',
                position: 'relative',
                zIndex: 1,
              }}
            />
            {starIndex === fullStars && partialStar > 0 && (
              <StarIcon
                style={{
                  color: 'gold',
                  fontSize: '2rem',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  clipPath: `inset(0 ${100 - partialStar * 100}% 0 0)`,
                  zIndex: 2,
                }}
              />
            )}
            {[...Array(10)].map((_, partIndex) => (
              <div
                key={partIndex}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: `${partIndex * 10}%`,
                  width: '10%',
                  height: '100%',
                  cursor: 'pointer',
                  zIndex: 3,
                }}
                onClick={() => handleClick(starIndex * 10 + partIndex)}
              />
            ))}
          </div>
        );
      })}
      <p style={{ marginLeft: '10px' }}>별점: {rating.toFixed(1)}</p>
    </div>
  );
};

export default StarRating;










// import React, { useState } from 'react';
// import StarIcon from '@mui/icons-material/Star';

// // 별점을 선택할 수 있는 컴포넌트
// const StarRating = () => {
//   // 현재 별점 상태를 관리하는 state
//   const [rating, setRating] = useState(0);

//   // 별 아이콘을 클릭할 때 호출되는 함수
//   const handleClick = (index) => {
//     // 클릭한 별의 인덱스에 1을 더한 값을 새로운 별점으로 설정
//     setRating(index + 1);
//   };

//   return (
//     <div>
//       {/* 5개의 별 아이콘을 생성하고 클릭 이벤트를 연결 */}
//       {[...Array(5)].map((_, index) => (
//         <StarIcon
//           key={index}
//           style={{ cursor: 'pointer', color: index < rating ? 'gold' : 'grey' }}
//           onClick={() => handleClick(index)}
//         />
//       ))}
//       {/* 현재 선택된 별점을 표시하는 텍스트 */}
//       <p>별점: {rating}</p>
//     </div>
//   );
// };

// export default StarRating;
