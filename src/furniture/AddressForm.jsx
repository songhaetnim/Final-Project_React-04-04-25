import React, { useState, useEffect } from 'react';

const AddressForm = () => {
  // 상태 변수 설정
  const [postcode, setPostcode] = useState(''); // 우편번호 상태
  const [address, setAddress] = useState(''); // 주소 상태
  const [detailAddress, setDetailAddress] = useState(''); // 상세주소 상태
  const [extraAddress, setExtraAddress] = useState(''); // 참고항목 상태

  // 우편번호 팝업 열기 함수
  const openPostcodePopup = () => {
    new window.daum.Postcode({
      oncomplete: function(data) {
        let fullAddress = data.address; // 선택한 주소
        let extraAddress = '';

        // 주소 타입이 'R'인 경우에만 참고항목(extraAddress)을 추가
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname; // 동명
          }
          if (data.buildingName !== '') {
            extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName; // 건물명
          }
          // 주소와 참고항목을 결합
          fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }

        // 선택한 주소 정보를 상태에 설정
        setPostcode(data.zonecode); // 우편번호 설정
        setAddress(fullAddress); // 주소 설정
        
        // 팝업 닫기 후 우편번호 입력란으로 포커스 이동
        document.getElementById('sample6_postcode').focus();
      }
    }).open(); // 우편번호 팝업 열기
  };

  // 컴포넌트가 마운트될 때 Daum 우편번호 스크립트를 동적으로 로드
  useEffect(() => {
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

  // 주소 입력 폼 렌더링
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
