import React, { useState } from 'react';

import circle4 from './images/circle02.png';

const Circle = ({ id, name, imgUrl, onClick }) => {
  const circleStyle = {
    // const imgStyle = {
      width: '65%', // 이미지의 너비를 부모 요소에 맞춰서 100%로 설정하여 넓게 표시합니다.
      height: 'Auto', // 이미지의 높이를 자동으로 조정하여 가로 비율을 유지합니다.
      objectFit: 'cover', // 이미지가 컨테이너를 채우도록 합니다.
    };

  const hoverStyle = {
    backgroundColor: '#d0d0d0',
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // 이미지가 컨테이너를 채우도록
  };

  const [hover, setHover] = useState(false);

  return (
    <div
      style={hover ? { ...circleStyle, ...hoverStyle } : circleStyle}
      onClick={() => onClick(id)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={imgUrl} alt={name} style={{ ...imgStyle, borderRadius: '0' }} />
    </div>
  );
};


const Description = ({ description }) => {
  const descriptionStyle = {
    marginTop: '40px', // 소개와 동그라미 컨테이너 사이 간격 추가
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
    // { id: 1, name: '이강성', description: 'This is the description for 이강성',} ,
    // { id: 2, name: '송햇님', description: 'This is the description for 송햇님',} ,
    // { id: 3, name: '정아름', description: 'This is the description for 정아름',} ,
    { id: 4, name: '함께해서 좋다', description: '함께해서 좋다', imgUrl: circle4 },
    // { id: 5, name: '김용현', description: 'This is the description for 김용현',} ,
    // { id: 6, name: '박성민', description: 'This is the description for 박성민',} ,
  ];

    const handleCircleClick = (id) => {
    setSelectedCircle(circles.find(circle => circle.id === id));
  };

  const appStyle = {
    textAlign: 'center',
  };

  const circleContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px',
  };

  return (
    <div style={appStyle}>
      <div style={circleContainerStyle}>
        {circles.map(circle => (
          <Circle key={circle.id} id={circle.id} name={circle.name} imgUrl={circle.imgUrl} onClick={handleCircleClick} />
        ))}
      </div>
      {selectedCircle && <Description description={selectedCircle.description} />}
    </div>
  );
};

export default App;