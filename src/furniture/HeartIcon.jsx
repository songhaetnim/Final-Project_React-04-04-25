import React, { useState } from 'react';
import { IoHeartOutline, IoHeart } from 'react-icons/io5';

const HeartIcon = () => {
  // 찜 상태를 추적하기 위한 state
  const [isLiked, setIsLiked] = useState(false);

  // 찜 버튼 클릭 시 상태 변경
  const handleLikeClick = () => {
    setIsLiked(!isLiked); // 현재 상태의 반대로 변경
  };

  return (
    <div onClick={handleLikeClick} style={{ cursor: 'pointer' }}>
      {isLiked ? <IoHeart size={30} color="red" /> : <IoHeartOutline size={30} color="red" />}
    </div>
  );
};

export default HeartIcon;


// import React, { useState } from 'react';    하트가 오른쪽에 있을때 


// import { IoHeartOutline, IoHeart } from 'react-icons/io5';

// const HeartIcon = () => {
//   // 찜 상태를 추적하기 위한 state
//   const [isLiked, setIsLiked] = useState(false);

//   // 찜 버튼 클릭 시 상태 변경
//   const handleLikeClick = () => {
//     setIsLiked(!isLiked); // 현재 상태의 반대로 변경
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
//       <div onClick={handleLikeClick} style={{ cursor: 'pointer' }}>
//         {isLiked ? <IoHeart size={30} color="red" /> : <IoHeartOutline size={30} color="red" />}
//       </div>
//     </div>
//   );
// };

// export default HeartIcon;


// import React, { useState } from 'react';    하트 가운대 위치
// import { IoHeartOutline, IoHeart } from 'react-icons/io5';

// const HeartIcon = () => {
//   // 찜 상태를 추적하기 위한 state
//   const [isLiked, setIsLiked] = useState(false);

//   // 찜 버튼 클릭 시 상태 변경
//   const handleLikeClick = () => {
//     setIsLiked(!isLiked); // 현재 상태의 반대로 변경
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center' }}>
//       <div onClick={handleLikeClick} style={{ cursor: 'pointer' }}>
//         {isLiked ? <IoHeart size={30} color="red" /> : <IoHeartOutline size={30} color="red" />}
//       </div>
//     </div>
//   );
// };

// export default HeartIcon;
