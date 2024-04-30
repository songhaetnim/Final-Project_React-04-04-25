import React, { useState } from 'react';

function InquiryBoard() {
  const [inquiries, setInquiries] = useState([]);
  const [newInquiry, setNewInquiry] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewInquiry({ ...newInquiry, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInquiries([...inquiries, newInquiry]);
    setNewInquiry({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <h1>문의하기 게시판</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="이름" value={newInquiry.name} onChange={handleInputChange} />
        <input type="email" name="email" placeholder="이메일" value={newInquiry.email} onChange={handleInputChange} />
        <textarea name="message" placeholder="메시지" value={newInquiry.message} onChange={handleInputChange} />
        <button type="submit">문의하기</button>
      </form>
      <div>
        {inquiries.map((inquiry, index) => (
          <div key={index}>
            <p>이름: {inquiry.name}</p>
            <p>이메일: {inquiry.email}</p>
            <p>메시지: {inquiry.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InquiryBoard;
