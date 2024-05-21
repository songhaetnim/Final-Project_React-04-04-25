import React, { useState } from 'react';
import mainImage from './images/topimage.png'; // 변경하고 싶은 이미지를 import합니다.
// import circle7Image from './images/topimage.png'; 
import circle1Image from './images/circle01.png'; 
import circle2Image from './images/circle02.png';
import circle3Image from './images/circle03.png';
import circle4Image from './images/circle04.png';
import circle5Image from './images/circle05.png';
import circle6Image from './images/circle06.png';
import { Typography } from '@mui/material';
import { Stack } from 'react-bootstrap';

const Circle = ({ id, name, description, imgUrl, onClick }) => { 
  const circleStyle = {
    width: '100px',
    height: '100px',
    margin: '10px',
    borderRadius: '50%',
    overflow: 'hidden',
    cursor: 'pointer',
  };

  const hoverStyle = {
    backgroundColor: '#d0d0d0',
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const [hover, setHover] = useState(false);

  return (
    <div
      style={hover ? { ...circleStyle, ...hoverStyle } : circleStyle}
      onClick={() => onClick(id)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={imgUrl} alt={name} style={imgStyle} /> 
      <p>{description}</p> 
    </div>
  );
};

const Description = ({ description }) => {
  const descriptionStyle = {
    marginTop: '20px',
    fontSize: '18px',
  };

  return (
    <div style={descriptionStyle}>
      <p>{description}</p>
    </div>
  );
};

const App = () => {
  const [selectedCircle, setSelectedCircle] = useState(null);
  const circles = [
    { id: 1, name: '이강성 :', description: '나는 오늘 힘들었다', imgUrl: circle1Image },
    { id: 2, name: '송햇님 :', description: '나는 집에 가고싶다.', imgUrl: circle2Image },
    { id: 3, name: '정아름 :', description: '지구 망해라 ', imgUrl: circle3Image },
    { id: 4, name: '박성민 :', description: 'This is the description for Circle ', imgUrl: circle4Image },
    { id: 5, name: '홍시표 :', description: 'This is the description for Circle ', imgUrl: circle5Image },
    { id: 6, name: '김용현 :', description: 'This is the description for Circle ', imgUrl: circle6Image },
  ];

  const handleCircleClick = (id) => {
    setSelectedCircle(circles.find(circle => circle.id === id));
  };

  const appStyle = {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
  };


  return (
    <div style={appStyle}>
      <Typography  variant="h4">
      Furniture
      </Typography>
      <img src={mainImage} alt="Main" style={{ width: '50%', height: 'auto', objectFit: 'cover', margin: '20px auto' }} /> 
      <Typography  variant="h5">
      Furniture함께 만들어간 우리들의 소개
      </Typography>
      <div >
        {circles.map(circle => (
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
            <Circle key={circle.id} id={circle.id} name={circle.name} description={circle.description} imgUrl={circle.imgUrl} onClick={handleCircleClick} />
            <div>{circle.name}</div>
            <div>{circle.description}</div>
          </div>
        ))}
      </div>
      {selectedCircle && <Description description={selectedCircle.description} />}
    </div>
  );
};

export default App;
