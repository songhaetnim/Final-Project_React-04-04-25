import React, { useState } from 'react';

function OrderForm() {
// 주문자의 이름을 관리하는 상태 변수
  const [name, setName] = useState('');
   // 주문 상품을 관리하는 상태 변수
  const [product, setProduct] = useState('');
  // 선택된 결제 방법을 관리하는 상태 변수
  const [paymentMethod, setPaymentMethod] = useState('');

  // 주문 정보를 서버로 전송하는 함수
  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기에서 주문 정보를 처리하고 서버로 보낼 수 있음.
    console.log('주문 정보:', { name, product, paymentMethod });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
       {/* 이름 입력란 label로 이름란을 감싸고 입력 필드input와 연결하여 입력 필드의 레이블을 정의하는 HTML 요소이고 */}
       {/* 라벨 요소가 이름 입력란을 감싸다 것을 명시하고 있음. */}
      <label>
        이름:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        상품:
        <input
          type="text"
          value={product}
          onChange={(event) => setProduct(event.target.value)}
        />
      </label>
      <label>
         {/* 결제 방법 선택 필드를 포함하는 레이블 */}
         {/* 레이블은 결제 방법 드롭다운을 감싸고, 사용자가 결제 방법을 선택할 수 있는 드롭다운 메뉴를 제공함 */}
         결제 방법:
        <select
          value={paymentMethod}
          onChange={(event) => setPaymentMethod(event.target.value)}
        >
          <option value="">선택하세요</option>
          <option value="신용카드">신용카드</option>
          <option value="무통장입금">무통장입금</option>
          <option value="계좌이체">계좌이체</option>
          <option value="카카오페이">카카오페이</option>
        </select>
      </label>
      <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '20px' }}>
        <button style={{ marginRight: '10px' }} type="button" onClick={() => window.history.back()}>결제취소</button>
        <button type="submit">결제완료</button>
      </div>
    </div>
  );
}

export default OrderForm;
