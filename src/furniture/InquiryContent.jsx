import React, { useState } from 'react';

function InquiryContent() {
  const [inquiry, setInquiry] = useState('');
  const [issueType, setIssueType] = useState('');
  const [title, setTitle] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [receiveNotification, setReceiveNotification] = useState(false);
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('사용자의 문의 내용:', inquiry);
    console.log('사용자의 문의 유형:', issueType);
    console.log('사용자의 제목:', title);
    console.log('비밀로 문의하기:', isPrivate);
    console.log('답변 알림 받기:', receiveNotification);
    console.log('사용자가 선택한 이미지:', image);
    setInquiry('');
    setIssueType('');
    setTitle('');
    setImage(null);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>문의하기</h2>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left' }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontWeight: 'bold' }}>문의 유형:</label>
          <select style={{ width: '100%', padding: '8px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} value={issueType} onChange={(e) => setIssueType(e.target.value)}>
            <option value="">문의 유형을 선택하세요</option>
            <option value="결제문제">결제 문의</option>
            <option value="상품문제">상품 문의</option>
            <option value="배송문제">배송 문의</option>
            <option value="교환문제">교환 문의</option>
            <option value="환불문제">환불 문의</option>
          </select>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontWeight: 'bold' }}>제목:</label>
          <input style={{ width: '100%', padding: '8px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} type="text" value={title} onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력해 주세요" />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontWeight: 'bold' }}>문의 내용:</label>
          <textarea style={{ width: '100%', padding: '8px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} value={inquiry} onChange={(e) => setInquiry(e.target.value)} rows={8} cols={50} 
          placeholder="개인정보(이메일, 휴대폰번호, 주민등록번호, 주소와 같은 개인정보는 기록이 금지되어 있습니다.

            중복되는 질문이나 광고성, 욕설, 비방, 음란성 내용은 사전 양해 없이 비노출 처리될 수 있으며 작성된 글에 대한 책임은 작성자 본인에게 있습니다.
            
            주문건에 대한 결제/교환/반품 관련 문의는 “카카오톡 상담하기” 또는 “고객센터” 메뉴 또는 한샘몰 고객센터(1689-4945)로 문의주시기 바랍니다."
          />
        </div>
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
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontWeight: 'bold' }}>이미지:</label><br />
          <input type="file" accept="image/*" onChange={handleImageChange}/>
        </div>
        <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'block', margin: '0 auto' }}>문의하기</button>
      </form>
    </div>
  );
}

export default InquiryContent;
