import React, { useState, useEffect } from 'react';

const AddressForm = () => {
  const [postcode, setPostcode] = useState('');
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [extraAddress, setExtraAddress] = useState('');

  const openPostcodePopup = () => {
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

        setPostcode(data.zonecode);
        setAddress(fullAddress);
        // 팝업 닫기
        document.getElementById('sample6_postcode').focus();
      }
    }).open();
  };

  useEffect(() => {
    // Daum 우편번호 스크립트를 동적으로 로드
    const script = document.createElement('script');
    script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    script.onload = () => {
      // 스크립트 로드 완료 후 초기화 코드 실행
      // initDaumPostcode();
    };
    document.body.appendChild(script);

    // 컴포넌트 언마운트 시 스크립트 제거
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input type="text" id="sample6_postcode" placeholder="우편번호" value={postcode} readOnly style={{ marginRight: '1px', width: '300px' }} />
        <input type="button" value="우편번호찾기" onClick={openPostcodePopup} />
      </div>
      <br />
      <input type="text" id="sample6_address" placeholder="주소" value={address} readOnly style={{ width: '300px', height: '50px', marginBottom: '10px' }} />
      <br />
      <input type="text" id="sample6_detailAddress" placeholder="상세주소" value={detailAddress} onChange={(e) => setDetailAddress(e.target.value)} style={{ width: '300px', height: '50px' }} />
      {/* <input type="text" id="sample6_extraAddress" placeholder="참고항목" value={extraAddress} readOnly /> */}
    </div>
  );
};

export default AddressForm;
