import React, { useState } from 'react';

const NonMemberOrder = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [postalcode, setPostalcode] = useState('');
  const [orderItems, setOrderItems] = useState('');
  const [messageType, setMessageType] = useState('');
  const [customMessage, setCustomMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에서는 간단히 콘솔에 출력하도록 하겠습니다.
    console.log(`Name: ${name}, Email: ${email}, Address: ${address}, Phone: ${phone}, Postal Code: ${postalcode}, Order Items: ${orderItems}, Message Type: ${messageType}, Custom Message: ${customMessage}`);
    // 나중에 서버로 전송하거나 다른 작업을 수행할 수 있습니다.
  };

  const handleFindAddress = () => {
    // 우편번호를 검색하는 함수를 호출하여 주소를 가져옵니다.
    // 이 부분은 실제 API와 연동하여 구현해야 합니다.
    // 여기에는 실제 API 호출 코드가 들어가야 합니다.
    // 결과를 setAddress 함수를 통해 주소 입력란에 적용할 수 있습니다.
  };

  const handleMessageChange = (e) => {
    const selectedMessageType = e.target.value;
    setMessageType(selectedMessageType);
    if (selectedMessageType !== '직접 입력') {
      setCustomMessage('');
    }
  };

  return (
    <div className="order-container">
      <h2 style={{ textAlign: 'center' }}>비회원 주문하기</h2>
      <form onSubmit={handleSubmit}>
        <table style={{ margin: 'auto' }}>
          <tbody>
            <tr>
              <td><label htmlFor="name">이름:</label></td>
              <td><input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required /></td>
            </tr>
            <tr>
              <td><label htmlFor="phone">휴대폰:</label></td>
              <td><input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required /></td>
            </tr>
            <tr>
              <td><label htmlFor="email">이메일:</label></td>
              <td><input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></td>
            </tr>
            <tr>
              <td><label htmlFor="postalcode">우편번호:</label></td>
              <td style={{ display: 'flex' }}>
                <input type="text" id="postalcode" value={postalcode} onChange={(e) => setPostalcode(e.target.value)} style={{ flex: 1 }} required />
                <button type="button" onClick={handleFindAddress} style={{ flex: 1, marginLeft: '10px' }}>우편번호 찾기</button>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="address">배송주소:</label></td>
              <td><input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required /></td>
            </tr>
            <tr>
              <td><label htmlFor="orderItems">주문 상품:</label></td>
              <td><input type="text" id="orderItems" value={orderItems} onChange={(e) => setOrderItems(e.target.value)} required /></td>
            </tr>
            <tr>
              <td><label htmlFor="message">추가 메시지:</label></td>
              <td>
                <select id="message" value={messageType} onChange={handleMessageChange}>
                  <option value="">-- 선택하세요 --</option>
                  <option value="배송 전 연락바랍니다.">배송 전 연락바랍니다.</option>
                  <option value="경비실에 맡겨주세요.">경비실에 맡겨주세요.</option>
                  <option value="집앞에 놔주세요.">집앞에 놔주세요.</option>
                  <option value="택배함에 놔주세요.">택배함에 놔주세요.</option>
                  <option value="부재시 핸드폰으로 연락주세요.">부재시 핸드폰으로 연락주세요.</option>
                  <option value="부재시 경비실에 맡겨주세요.">부재시 경비실에 맡겨주세요.</option>
                  <option value="부재시 집 앞에 놔주세요.">부재시 집 앞에 놔주세요.</option>
                  <option value="직접 입력">직접 입력</option>
                </select>
                {messageType === '직접 입력' && (
                  <textarea value={customMessage} onChange={(e) => setCustomMessage(e.target.value)} style={{ marginTop: '5px', width: '100%' }} placeholder="직접 입력해주세요" />
                )}
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button style={{ marginRight: '10px' }} type="button" onClick={() => window.history.back()}>취소</button>
          <button type="submit">주문 완료</button>
        </div>
      </form>
    </div>
  );
};

export default NonMemberOrder;
