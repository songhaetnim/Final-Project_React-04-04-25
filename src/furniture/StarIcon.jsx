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
