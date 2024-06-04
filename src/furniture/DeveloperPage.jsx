import React, { useState } from 'react'; // React와 useState 훅을 가져옵니다.
import mainImage from './images/topimage.png'; // 메인 이미지를 가져옵니다.
// import circle7Image from './images/topimage.png'; // 주석 처리된 서클 이미지입니다.
import circle1Image from './images/circle01.png'; // 첫 번째 서클 이미지를 가져옵니다.
import circle2Image from './images/circle02.png'; // 두 번째 서클 이미지를 가져옵니다.
import circle3Image from './images/circle03.png'; // 세 번째 서클 이미지를 가져옵니다.
import circle4Image from './images/circle04.png'; // 네 번째 서클 이미지를 가져옵니다.
import circle5Image from './images/circle05.png'; // 다섯 번째 서클 이미지를 가져옵니다.
import circle6Image from './images/circle06.png'; // 여섯 번째 서클 이미지를 가져옵니다.
import { Typography } from '@mui/material'; // Material-UI의 Typography 컴포넌트를 가져옵니다.
import { Stack } from 'react-bootstrap'; // react-bootstrap의 Stack 컴포넌트를 가져옵니다.

const Circle = ({ id, name, description, imgUrl, onClick }) => { 
  // Circle 컴포넌트는 개별 서클을 나타내며 클릭 이벤트를 처리합니다.

  // 서클의 기본 스타일
  const circleStyle = {
    width: '100px', // 서클의 너비를 100px로 설정
    height: '100px', // 서클의 높이를 100px로 설정
    margin: '10px', // 서클 주위에 10px의 마진을 추가
    borderRadius: '50%', // 서클 모양을 만들기 위해 반지름을 50%로 설정
    overflow: 'hidden', // 넘치는 콘텐츠를 숨김
    cursor: 'pointer', // 커서를 포인터로 변경
  };

  // 서클이 호버될 때 적용되는 스타일
  const hoverStyle = {
    backgroundColor: '#d0d0d0', // 배경색을 연한 회색으로 변경
  };

  // 이미지 스타일
  const imgStyle = {
    width: '100%', // 이미지 너비를 서클의 너비에 맞춤
    height: '100%', // 이미지 높이를 서클의 높이에 맞춤
    objectFit: 'cover', // 이미지 비율을 유지하며 서클에 맞게 조정
  };

  // 호버 상태를 관리하는 useState 훅
  const [hover, setHover] = useState(false);

  return (
    <div
      style={hover ? { ...circleStyle, ...hoverStyle } : circleStyle} // 호버 상태에 따라 스타일을 적용
      onClick={() => onClick(id)} // 클릭 시 onClick 핸들러를 호출
      onMouseEnter={() => setHover(true)} // 마우스가 들어올 때 호버 상태로 변경
      onMouseLeave={() => setHover(false)} // 마우스가 나갈 때 호버 상태 해제
    >
      <img src={imgUrl} alt={name} style={imgStyle} /> 
      <p>{description}</p> 
    </div>
  );
};

const Description = ({ description }) => {
  // Description 컴포넌트는 선택된 서클의 설명을 표시합니다.

  const descriptionStyle = {
    marginTop: '20px', // 상단 마진을 20px로 설정
    fontSize: '18px', // 글자 크기를 18px로 설정
  };

  return (
    <div style={descriptionStyle}>
      <p>{description}</p>
    </div>
  );
};

const App = () => {
  // App 컴포넌트는 전체 애플리케이션을 관리합니다.

  const [selectedCircle, setSelectedCircle] = useState(null); // 선택된 서클 상태를 관리하는 useState 훅
  const circles = [
    // id 1 이름 이강성 소감 나는 오늘힘들었다 이미지 이미지 1을 불러옴
    { id: 1, name: '팀원 1 :', description: '나는 오늘 힘들었다', imgUrl: circle1Image }, //각 자 이미지와 간결한 한줄
    { id: 2, name: '팀원 2 :', description: '나는 집에 가고싶다.', imgUrl: circle2Image },
    { id: 3, name: '팀원 3 :', description: '지구 망해라 ', imgUrl: circle3Image },
    { id: 4, name: '팀원 4 :', description: '집착하지마 ', imgUrl: circle4Image },
    { id: 5, name: '팀원 5 :', description: '살려줘', imgUrl: circle5Image },
    { id: 6, name: '팀원 6 :', description: '조기퇴근하고싶다 ', imgUrl: circle6Image },
  ]; // 서클 정보 배열입니다.

  const handleCircleClick = (id) => {
    // 서클 클릭 핸들러
    setSelectedCircle(circles.find(circle => circle.id === id)); // 클릭된 서클을 상태로 설정
  };

  const appStyle = {
    flexDirection: 'column', // 세로 방향으로 정렬
    alignItems: 'center', // 수직 중앙 정렬
    textAlign: 'center', // 텍스트 중앙 정렬
    padding: '20px', // 전체 패딩을 20px로 설정
  };

  return (
    <div style={appStyle}>
      <Typography variant="h4">
        Furniture
      </Typography>
        <img src={mainImage} alt="Main" style={{ width: '50%', height: 'auto', objectFit: 'cover', margin: '20px auto' }} /> 
      <Typography variant="h5">
        Furniture 함께 만들어간 우리들의 소개
      </Typography>
       <div>
        {circles.map(circle => (
          <div key={circle.id} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
            <Circle 
              id={circle.id} 
              name={circle.name} 
              description={circle.description} 
              imgUrl={circle.imgUrl} 
              onClick={handleCircleClick} 
            />
            <div>{circle.name}</div>
            <div>{circle.description}</div>
          </div>
        ))}
      </div>
      {selectedCircle && <Description description={selectedCircle.description} />}
    </div>
  );
};

export default App; // App 컴포넌트를 기본 익스포트합니다.



