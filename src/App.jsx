import logo from './logo.svg';
// import './App.css';
import { Routes, Route, Form } from 'react-router-dom';
import QuestionDone from './furniture/QuestionDone'; // 중괄호 제거
// import InquiryButton from './furniture/InquiryButton';
import Questions from './furniture/Questions'; // 중괄호 제거
import ProductInquiryList from './furniture/ProductInquiryList';
import MyListComponent from './furniture/MyListComponent';
import InquiryList from './furniture/InquiryList';
import BoardList from './furniture/QuestionForm';
import QuestionForm from './furniture/QuestionForm';
import QuestionList from './furniture/QuestionForm';
import ProductList from './furniture/QuestionForm';
import Board from './furniture/Board';
import HeartButton from './furniture/HeartButton';
import AddressForm, { Submit } from './furniture/AddressForm';
import OrderForm from './furniture/NonMemberOrder';
import NonMember from './furniture/NonMember';
import NonMemberOrder from './furniture/NonMemberOrder';
import Click from './furniture/Click';
import Rder from './furniture/Rder';
import MyApp from './furniture/MyApp';
import DeliveryTracker from './furniture/DeliveryTracker';
import MyComponent from './furniture/MyComponent';
import ThreeScene from './furniture/ThreeScene';



function App() {
  return (
    <>
      {/* <Notices/> */}
      {/* < StarIcon /> */}
      {/* <HeartIcon /> */}
      {/* <ShoppingIcon /> */}
      <Routes>
        <Route path="/Questions" element={<Questions />} />
        <Route path="/QuestionDone" element={<QuestionDone />} />
      </Routes>
      <>
      {/* Questions 컴포넌트는 라우터에 의해 자동으로 렌더링됩니다. */}
      {/* <Questions /> */}
      {/* <ProductInquiryList /> */}
      {/* <MyListComponent /> */}
      {/* <InquiryList /> */}
      {/* <BoardList /> */}
      {/* < Board /> */}
      {/* <HeartButton /> */}
       {/* <NonMemberOrder /> */}
      {/* <AddressForm /> */}
      {/* <OrderForm /> */}
      {/* <NonMember /> */}
      {/* <Click /> */}
      {/* <Rder /> */}
      {/* <MyApp /> */}
      {/* <DeliveryTracker /> */}
      {/* <MyComponent /> */}
      {/* <ThreeScene /> */}
    </>
    </>
  );
}

export default App;











