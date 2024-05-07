import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function HeartButton() {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      {liked ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderIcon />}
    </div>
  );
}

export default HeartButton; 


