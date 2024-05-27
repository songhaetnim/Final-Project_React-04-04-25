import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; // 빈 하트 아이콘,@mui/icons-material 라이브러리사용함
import FavoriteIcon from '@mui/icons-material/Favorite'; // 채워진 하트 아이콘

function HeartButton() {
   // 좋아요 상태를 추적하기 위한 상태 변수
  const [liked, setLiked] = useState(false);

   // 버튼 클릭 시 좋아요 상태를 토글하는 함수
  const handleClick = () => {
    setLiked(!liked);   // 현재 상태의 반대로 변경하여 토글
  };

  return (
     // 클릭 이벤트를 처리하는 div 요소
     // 마우스를 올렸을 때 커서가 포인터 모양이 되도록 설정
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      {/* 좋아요 상태에 따라 다른 아이콘을 렌더링 */}
      {liked ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderIcon />}
    </div>
  );
}

export default HeartButton; 