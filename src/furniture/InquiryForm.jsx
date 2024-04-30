import React, { useState } from 'react';

function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
    attachment: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기서 폼 데이터를 처리하거나 전송합니다.
    console.log(formData);
    // 예: 서버에 데이터 전송 또는 다른 처리 작업
  };

  return (
    <div className="container">
      <h2>가구 사이트 문의하기</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">이름:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        
        <label htmlFor="email">이메일 주소:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        
        <label htmlFor="phone">연락처 (선택 사항):</label>
        <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
        
        <label htmlFor="inquiry-type">문의 유형:</label>
        <select id="inquiry-type" name="inquiryType" value={formData.inquiryType} onChange={handleChange} required>
          <option value="">선택하세요</option>
          <option value="상품 문의">상품 문의</option>
          <option value="주문 관련 문의">주문 관련 문의</option>
          <option value="기타">기타</option>
        </select>
        
        <label htmlFor="message">문의 내용:</label>
        <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
        
        <label htmlFor="attachment">첨부 파일 (선택 사항):</label>
        <input type="file" id="attachment" name="attachment" onChange={(e) => setFormData({ ...formData, attachment: e.target.files[0] })} />
        
        <button type="submit">문의 제출</button>
      </form>
    </div>
  );
}

export default InquiryForm;
