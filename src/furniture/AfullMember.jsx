import React, { useState, useEffect } from 'react';

const NonMemberOrder = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [postalcode, setPostalcode] = useState('');
  const [orderItems, setOrderItems] = useState('');
  const [messageType, setMessageType] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [bank, setBank] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  useEffect(() => {
    // Daum 우편번호 서비스 스크립트를 동적으로 추가합니다.
    const script = document.createElement('script');
    script.src = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    script.async = true;
    document.body.appendChild(script);

    // 컴포넌트가 언마운트될 때 스크립트를 정리합니다.
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openPostcodePopup = () => {
    // Daum 우편번호 서비스 객체가 로드된 후 실행되도록 합니다.
    if (window.daum && window.daum.Postcode) {
      new window.daum.Postcode({
        oncomplete: function(data) {
          let fullAddress = data.address;
          let extraAddress = '';

          if (data.addressType === 'R') {
            if (data.bname !== '') {
              extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
              extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
          }

          setPostalcode(data.zonecode);
          setAddress(fullAddress);
          // 상세 주소 입력란에 포커스를 이동시킵니다.
          document.getElementById('detailAddress').focus();
        }
      }).open();
    } else {
      console.error('Daum 우편번호 서비스가 로드되지 않았습니다.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Address: ${address}, Phone: ${phone}, Postal Code: ${postalcode}, Order Items: ${orderItems}, Message Type: ${messageType}, Custom Message: ${customMessage}, Detail Address: ${detailAddress}, Payment Method: ${paymentMethod}, Bank: ${bank}, Account Number: ${accountNumber}`);
  };

  const handleMessageChange = (e) => {
    const selectedMessageType = e.target.value;
    setMessageType(selectedMessageType);
    if (selectedMessageType !== '직접 입력') {
      setCustomMessage('');
    }
  };

  const handlePaymentChange = (e) => {
    const selectedPaymentMethod = e.target.value;
    setPaymentMethod(selectedPaymentMethod);
  };

  return (
    <div className="order-container">
      <h2 style={{ textAlign: 'center' }}>정회원 주문하기</h2>
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
                <button type="button" onClick={openPostcodePopup} style={{ flex: 1, marginLeft: '10px' }}>우편번호 찾기</button>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="address">배송주소:</label></td>
              <td><input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required /></td>
            </tr>
            <tr>
              <td><label htmlFor="detailAddress">상세주소:</label></td>
              <td><input type="text" id="detailAddress" value={detailAddress} onChange={(e) => setDetailAddress(e.target.value)} required /></td>
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
                  <option value="부재시 집 앞에 놔주세요.">파손위험이 있는 상품이니 조심히 다뤄주세요.</option>
                  <option value="직접 입력">직접 입력</option>
                </select>
                {messageType === '직접 입력' && (
                  <textarea value={customMessage} onChange={(e) => setCustomMessage(e.target.value)} style={{ marginTop: '5px', width: '100%' }} placeholder="직접 입력해주세요" />
                )}
              </td>
            </tr>
            <tr>
              <td><label htmlFor="payment">결제 방법:</label></td>
              <td>
                <select id="payment" value={paymentMethod} onChange={handlePaymentChange}>
                  <option value="">-- 선택하세요 --</option>
                  <option value="신용카드">신용카드</option>
                  <option value="계좌이체">계좌이체</option>
                  <option value="무통장 입금">무통장 입금</option>
                  <option value="kakaoPay">kakaoPay</option>
                  {/* 다른 결제 방법도 추가 가능 */}
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="bank">환불받을 은행:</label></td>
              <td>
                <select id="bank" value={bank} onChange={(e) => setBank(e.target.value)}>
                  <option value="">-- 선택하세요 --</option>
                  <option value="국민은행">국민은행</option>
                  <option value="신한은행">신한은행</option>
                  <option value="우리은행">우리은행</option>
                  <option value="우리은행">하나은행</option>
                  <option value="우리은행">기업은행</option>
                  <option value="우리은행">카카오뱅크</option>
                  {/* <option value="우리은행">kbank</option> */}
                  {/* 다른 은행도 추가 가능 */}
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="accountNumber">환불받을 계좌번호:</label></td>
              <td><input type="text" id="accountNumber" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} required /></td>
            </tr>
          </tbody>
        </table>
        <div style={{ textAlign: 'center', marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button type="submit">주문 완료</button>
            <button style={{ marginLeft: '10px' }} type="button" onClick={() => window.history.back()}>취소</button>
        </div>

      </form>
    </div>
  );
};

export default NonMemberOrder;
