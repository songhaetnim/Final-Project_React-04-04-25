import React, { useState } from 'react';

function OrderForm() {
  const [name, setName] = useState('');
  const [product, setProduct] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기에서 주문 정보를 처리하고 서버로 보낼 수 있습니다.
    console.log('주문 정보:', { name, product, paymentMethod });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
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
