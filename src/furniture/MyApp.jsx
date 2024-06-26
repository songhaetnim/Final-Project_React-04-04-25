import React from 'react';
import '../App.css'; // 스타일시트를 가져옵니다.
// import Success from '../success'; // success.js 파일을 가져옵니다.

const MyApp = () => {
  return (
    <div className="wrapper w-100">
      <div className="flex-column align-center confirm-loading w-100 max-w-540">
        <div className="flex-column align-center">
          <img src="https://static.toss.im/lotties/loading-spot-apng.png" width="120" height="120" alt="로딩 중"></img>
          <h2 className="title text-center">결제 요청까지 성공했어요.</h2>
          <h4 className="text-center description">결제 승인하고 완료해보세요.</h4>
        </div>
        <div className="w-100">
          <button id="confirmPaymentButton" className="btn primary w-100">결제 승인하기</button>
        </div>
      </div>
      <div className="flex-column align-center confirm-success w-100 max-w-540">
        <img src="https://static.toss.im/illusts/check-blue-spot-ending-frame.png" width="120" height="120" alt="체크 아이콘"></img>
        <h2 className="title">결제를 완료했어요</h2>
        <div className="response-section w-100">
          <div className="flex justify-between">
            <span className="response-label">결제 금액</span>
            <span id="amount" className="response-text"></span>
          </div>
          <div className="flex justify-between">
            <span className="response-label">주문번호</span>
            <span id="orderId" className="response-text"></span>
          </div>
          <div className="flex justify-between">
            <span className="response-label">paymentKey</span>
            <span id="paymentKey" className="response-text"></span>
          </div>
        </div>

        <div className="w-100 button-group">
          <div className="flex" style={{ gap: '16px' }}>
            <a className="btn w-100" href="https://developers.tosspayments.com/sandbox">다시 테스트하기</a>
            <a className="btn w-100" href="https://docs.tosspayments.com/guides/payment-widget/integration" target="_blank" rel="noreferrer noopener">결제 연동 문서가기</a>
          </div>
        </div>
      </div>
      {/* <Success /> \*/}
    </div>
  );
};

export default MyApp;
