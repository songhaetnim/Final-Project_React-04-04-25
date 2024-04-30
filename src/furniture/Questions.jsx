import React, { useState } from 'react';
import { Link } from "react-router-dom";

// Questions 컴포넌트를 정의합니다.
export default function Questions() {
  // useState 훅을 사용하여 상태 변수를 정의합니다.
  const [inquiry, setInquiry] = useState(''); // 사용자의 문의 내용을 담는 상태
  const [issueType, setIssueType] = useState(''); // 선택된 문의 유형을 담는 상태
  const [title, setTitle] = useState(''); // 문의 제목을 담는 상태
  const [isPrivate, setIsPrivate] = useState(false); // 비밀 여부를 담는 상태
  const [receiveNotification, setReceiveNotification] = useState(false); // 알림 수신 여부를 담는 상태
  const [image, setImage] = useState(null); // 선택된 이미지를 담는 상태

  // 폼 제출을 처리하는 함수
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 폼 제출 동작을 막습니다.
    // 사용자의 입력값을 콘솔에 출력합니다.
    console.log('사용자의 문의 내용:', inquiry);
    console.log('사용자의 문의 유형:', issueType);
    console.log('사용자의 제목:', title);
    console.log('비밀로 문의하기:', isPrivate);
    console.log('답변 알림 받기:', receiveNotification);
    console.log('사용자가 선택한 이미지:', image);
    // 상태 변수들을 초기값으로 재설정합니다.
    setInquiry('');
    setIssueType('');
    setTitle('');
    setImage(null);
  };

  // 이미지 선택을 처리하는 함수
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0]; // 선택된 이미지 파일을 가져옵니다.
    setImage(selectedImage); // 이미지 상태를 선택된 이미지로 설정합니다.
  };

  // 컴포넌트를 렌더링합니다.
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>문의하기</h2>
      {/* 문의를 제출하기 위한 폼입니다. */}
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left' }}>
        {/* 문의 유형을 선택할 수 있는 드롭다운입니다. */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontWeight: 'bold' }}>문의 유형:</label>
          <select style={{ width: '100%', padding: '8px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} value={issueType} onChange={(e) => setIssueType(e.target.value)}>
            {/* 다양한 문의 유형 옵션들입니다. */}
            <option value="">문의 유형을 선택하세요</option>
            <option value="결제문제">결제 문의</option>
            <option value="상품문제">상품 문의</option>
            <option value="배송문제">배송 문의</option>
            <option value="교환문제">교환 문의</option>
            <option value="환불문제">환불 문의</option>
          </select>
        </div>
        {/* 문의 제목을 입력하는 입력 필드입니다. */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontWeight: 'bold' }}>제목:</label>
          <input style={{ width: '100%', padding: '8px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} type="text" value={title} onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력해 주세요" />
        </div>
        {/* 문의 내용을 입력하는 텍스트 영역입니다. */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontWeight: 'bold' }}>문의 내용:</label>
          <textarea style={{ width: '100%', padding: '8px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} value={inquiry} onChange={(e) => setInquiry(e.target.value)} rows={8} cols={50} 
          placeholder="개인정보(이메일, 휴대폰번호, 주민등록번호, 주소와 같은 개인정보는 기록이 금지되어 있습니다.

            중복되는 질문이나 광고성, 욕설, 비방, 음란성 내용은 사전 양해 없이 비노출 처리될 수 있으며 작성된 글에 대한 책임은 작성자 본인에게 있습니다.
            
            주문건에 대한 결제/교환/반품 관련 문의는 “문의하기” 또는 “고객센터”  Furniture 고객센터(1234-5678)로 문의주시기 바랍니다."
          />
        </div>
        {/* 비밀글 및 알림 수신 여부를 선택할 수 있는 체크박스들입니다. */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ marginRight: '20px' }}>
            <input type="checkbox" checked={isPrivate} onChange={(e) => setIsPrivate(e.target.checked)} />
            <label style={{ marginLeft: '5px' }}>비밀글 문의하기</label>
          </div>
          <div>
            <input type="checkbox" checked={receiveNotification} onChange={(e) => setReceiveNotification(e.target.checked)} />
            <label style={{ marginLeft: '5px' }}>답변 알림</label>
          </div>
        </div>
        {/* 이미지 선택을 위한 입력 필드입니다. */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontWeight: 'bold' }}>이미지:</label><br />
          <input type="file" accept="image/*" onChange={handleImageChange}/>
        </div>
        {/* 폼 제출을 위한 버튼입니다. */}
        <Link to="/furniture/QuestionDone">
        <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'block', margin: '0 auto' }}>문의하기</button>
      </Link>
    </form>
</div>
  );
}

