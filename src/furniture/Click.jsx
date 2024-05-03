import React, { useState } from 'react';

function Click() {
  const [likes, setLikes] = useState(668);
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLikes(liked ? likes - 1 : likes + 1);
    setLiked(!liked);
  };

  return (
    <button type="button" className={`button_heart ${liked ? 'liked' : ''}`} onClick={handleLikeClick}>
      <span className="heart_icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill={liked ? '#ff4b5c' : '#8c8c8c'} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </span>
      <span className="button_heart_text">상품찜</span>
      <strong className="button_heart_number">{likes}</strong>
      <span className="button_heart_over_text"></span>
    </button>
  );
}

export default Click;
