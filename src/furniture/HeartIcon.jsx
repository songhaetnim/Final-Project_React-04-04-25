import React, { useState } from 'react'; // React와 useState 훅을 가져옵니다.
import { IoHeartOutline, IoHeart } from 'react-icons/io5';  // react-icons 라이브러리에서 하트 아이콘을 가져옵니다.

const HeartIcon = () => {
  // 찜 상태를 추적하기 위한 상태 변수 isLiked를 선언합니다.
  // 초기 값은 false로 설정되어 있습니다.
  const [isLiked, setIsLiked] = useState(false);
    
  // 찜 버튼 클릭 시 상태 변경,찜 버튼 클릭 시 호출되는 함수
  const handleLikeClick = () => {
    setIsLiked(!isLiked);  //현재 isLiked 상태의 (!isLiked)로하여 반대로 변경합니다.
  };

  return (
    // 클릭 이벤트를 처리하는 div 요소이고
    // style을 이용해 마우스를 올렸을 때 커서가 포인터 모양이 되도록 설정함.
    <div onClick={handleLikeClick} style={{ cursor: 'pointer' }}>
      {/* isLiked 상태에 따라 다른 아이콘을 렌더링합니다. ,*/} {/* isLiked가 true일 경우 채워진 하트 아이콘을 보여줍니다.*/}
      {isLiked ? <IoHeart size={30} color="red" /> : <IoHeartOutline size={30} color="red" />}
    </div>
  );
};

export default HeartIcon;  // HeartIcon 컴포넌트를 기본으로 익스포트합니다





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
