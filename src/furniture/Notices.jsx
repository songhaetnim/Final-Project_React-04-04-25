// import React from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom'; // BrowserRouter 추가

// export default function App() {
//   return (
   

//     <Router> {/* BrowserRouter로 App을 감싸줌 */}
//     <div className="container" style={{ display: 'flex', flexDirection: 'row' }}>
//       {/* 회사소개 */}
//       <div className="menu-item" style={{ marginRight: '20px' }}>
//         <h5 style={{ marginBottom: '10px' }}>회사소개</h5>
//         <p style={{ fontSize: '14px', color: 'black' }}>
//           회사명: furniture<br />
//           주소: 수원 휴먼교육센터 주소 16471 경기 수원시 팔달구 중부대로 104 3층
//         </p>
//       </div>
  
//       {/* 고객센터 */}
//       <div className="menu-item" style={{ marginRight: '20px' }}>
//         <h5 style={{ marginBottom: '10px' }}>고객센터</h5>
//         <p style={{ fontSize: '14px', color: 'black' }}>고객센터 번호: 031-239-5855</p>
//       </div>
      
//       {/* 공지사항 */}
//       <div className="menu-item" style={{ marginRight: '20px' }}>
//         <h5 style={{ marginBottom: '10px', textAlign: 'right' }}>공지사항</h5>
//         <Link to="/notice" style={{ textDecoration: 'none', color: 'black',
//             fontSize: '14px', fontWeight: 'normal', textAlign: 'right' }}>
//        </Link>
//       </div>
//     </div>
//   </Router>

   
//   );
// }



// import React from 'react';
// import { View, Text } from 'react-native';
// import Stack from '@mui/material/Stack';

// export default function Notices() {
//   return (
//     <View style={{ flexDirection: 'row' }}>
//       <Stack direction="row" spacing={2} style={{ flex: 1 }}>
//         {/* 회사소개 */}
//         <View>
//           <Text>회사소개</Text>
//           <Text>상호명: furniture</Text>
//           <Text>주소: 수원 휴먼교육센터 주소 16471 경기 수원시 팔달구 중부대로 104 3층</Text>
//         </View>
        
//         {/* 고객센터 */}
//         <View>
//           <Text>고객센터</Text>
//           <Text>031-239-5855</Text>
//         </View>
        
//         {/* 공지사항 */}
//         <View>
//           <Text>공지사항</Text>
//           {/* 공지사항 내용 추가 */}
//         </View>
//       </Stack>
//     </View>
//   );
// }




import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={linkContainerStyle}>
        <a href="/about" style={linkStyle}>회사소개</a>
        <span style={separatorStyle}>|</span>
        <a href="/customer-service" style={linkStyle}>고객센터</a>
        <span style={separatorStyle}>|</span>
        <a href="/notice" style={linkStyle}>공지사항</a>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#fff', // 흰색 배경색
  color: '#000', // 검정색 글씨색
  padding: '20px',
  textAlign: 'center',
  position: 'fixed', // 고정 위치
  bottom: '0', // 화면 하단에 고정
  width: '100%', // 전체 너비를 차지
};

const linkContainerStyle = {
  margin: '0 auto', // 가운데 정렬
};

const linkStyle = {
  marginRight: '20px', // 링크 사이 간격
  textDecoration: 'none',
  color: '#000' // 검정색 글씨색
};

const separatorStyle = {
  margin: '0 10px' // 구분자 간격
};

export default Footer;