import React, { useState } from 'react';
import axios from 'axios';

function MyComponent() {
  // 운송장 번호와 택배 현황을 상태로 관리합니다.
  const [trackingNumber, setTrackingNumber] = useState(''); // 운송장 번호
  const [deliveryStatus, setDeliveryStatus] = useState(''); // 택배 현황

  // 입력 필드의 변화를 감지하여 운송장 번호 상태를 업데이트합니다.
  const handleChange = (event) => {
    setTrackingNumber(event.target.value);
  };

  // 폼을 제출할 때 실행됩니다.
  const handleSubmit = async (event) => {
    event.preventDefault(); // 기본 제출 동작을 막습니다.

    try {
      // 가상의 API 엔드포인트와 가정한 응답 형식
      const response = await axios.get(`https://api.example.com/tracking/${trackingNumber}`);
      
      // 응답에서 배송 상태를 추출하여 상태를 업데이트합니다.
      setDeliveryStatus(response.data.deliveryStatus);
    } catch (error) {
      // 오류가 발생하면 콘솔에 오류 메시지를 출력합니다.
      console.error('Error fetching delivery status:', error);
    }
  };



  
  return (
    <div>
      <h1>스마트 택배 현황 조회</h1>
      {/* 폼을 생성하고 제출할 때 handleSubmit 함수를 호출합니다. */}
      <form onSubmit={handleSubmit}>
        <label>
          운송장 번호:
          {/* 입력 필드에 변화가 있을 때 handleChange 함수를 호출하여 운송장 번호 상태를 업데이트합니다. */}
          <input type="text" value={trackingNumber} onChange={handleChange} />
        </label>
        {/* 조회 버튼 */}
        <button type="submit">조회</button>
      </form>
      {/* 택배 현황이 존재할 경우에만 표시합니다. */}
      {deliveryStatus && (
        <div>
          <h2>택배 현황:</h2>
          <p>{deliveryStatus}</p>
        </div>
      )}
    </div>
  );
}

export default MyComponent;
