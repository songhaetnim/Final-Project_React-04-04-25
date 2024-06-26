import logo from './logo.svg';
// import './App.css';
import { Routes, Route, Form } from 'react-router-dom';
import QuestionDone from './furniture/QuestionDone'; // 중괄호 제거
// import InquiryButton from './furniture/InquiryButton';
import Questions from './furniture/Questions'; // 중괄호 제거
import ProductInquiryList from './furniture/ProductInquiryList';
import MyListComponent from './furniture/MyListComponent';
import InquiryList from './furniture/InquiryList';
import QuestionForm from './furniture/QuestionForm';
import Board from './furniture/Board';
import HeartButton from './furniture/HeartButton';
import AddressForm, { Submit } from './furniture/AddressForm';
import OrderForm from './furniture/OrderForm'; 
import NonMember from './furniture/NonMember';
import NonMemberOrder from './furniture/NonMemberOrder';
import Click from './furniture/Click';
import Rder from './furniture/Rder';
import MyApp from './furniture/MyApp';
import DeliveryTracker from './furniture/DeliveryTracker';
import MyComponent from './furniture/MyComponent';
import ThreeScene from './furniture/ThreeScene';
import DeveloperPage from './furniture/DeveloperPage';
import HeartIcon from './furniture/HeartIcon';
import StarRating from './furniture/StarIcon';
import ShoppingIcon from './furniture/ShoppingIcon';
import Calendar from './furniture/Calendar';
import CalendarButton from './furniture/CalendarButton';
import CalendarButtonin from './furniture/Calendarin';
import Moomin from './CherryBlossom/Moomin';



function App() {
  return (
    <>
      {/* <Notices/> */}
      {/* <ShoppingIcon /> */}
      {/* <HeartIcon /> */}
      
      <Routes>
        <Route path="/Questions" element={<Questions />} />
        <Route path="/QuestionDone" element={<QuestionDone />} />
      </Routes>
      <>
      {/* Questions 컴포넌트는 라우터에 의해 자동으로 렌더링됩니다. */}
      {/*  문의하기, 문의유형 드롭형식 */}
      {/* <Questions /> */}
      
      {/* 문의하기 게시판 */}
      {/* <Board />  */}

       {/* 문의사항 목록 */}
       {/* <InquiryList /> */}

      {/* 상품 목록 */}
      {/* <BoardList /> */}

      {/* 우편번혼찾기 */}
      {/* <AddressForm /> */}
      
      {/* 제품에 대한 문의 목록 */}
      {/* <ProductInquiryList /> */}

      {/* 사용자가 정의한 목록을 나타내는 컴포넌트 */}
      {/* <MyListComponent /> */}
      
      {/* 하트모양 아이콘 빈하트&채워진 하트 */}
      {/* <HeartButton /> */}
      {/* <HeartIcon /> */}

      {/* HeartIcon 눌렀을 시 숫자도올라감 */}
      {/* <Click /> */}
      
      {/*주문하기 상품드롭형식,상품1,2,3외 결제 더하기됨 */}
      {/* <Rder /> */}

      {/*비회원 주문하기&우편번호찾기  */}
      {/* <NonMemberOrder /> */}
      {/* <NonMember /> */}

      {/* 이름,상품,결제방법 드롭형식,결제취소,결제완료 */}
      {/* <OrderForm /> */}
      
      {/* 결제요청까지성공했어요 로딩, 결제완료했어요 */}
      {/* <MyApp /> */}
      
      {/* 운송장번호 조회하기( CJ대한통운코드 04) */}
      {/* <DeliveryTracker /> */}
      
      {/* 스마트택배 현황조회 */}
      {/* <MyComponent /> */}
      
      {/* 입체적 돌아가는? */}
      {/* <ThreeScene /> */}
      
     {/* 개발자페이지 */}
     {/* <DeveloperPage /> */}

     {/* 별점 소수점으로 오름 */}
     {/* <StarRating /> */}
    
    {/* 카트 아이콘 */}
    {/* <ShoppingIcon /> */}
    
    {/* 캘린더(달력) */}
    {/* <Calendar /> */}

    {/* 캘린더보기버튼 */}
    {/* <CalendarButtonin /> */}

    <Moomin />





    </>
    </>
  );
}

export default App;











