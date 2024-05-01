import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

function CustomPagination() {
  return (
    <div>
      <span>{"<"}</span>
      <span>1</span>
      <span>{">"}</span>
    </div>
  );
}

function Board() {
  const [inquiries, setInquiries] = useState([]);
  const [newInquiry, setNewInquiry] = useState({ name: '', email: '', title: '', date: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewInquiry({ ...newInquiry, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInquiries([newInquiry, ...inquiries]);
    setNewInquiry({ name: '', email: '', title: '', date: '' });
  };

  // 가짜 데이터 생성 함수
  const generateFakeData = () => {
    const fakeData = [];
    for (let i = 0; i < 5; i++) {
      fakeData.push({
        id: i,
        name: `유형 ${i}`,
        email: `제목 ${i}`,
        title: `작성자 ${i}`,
        date: `작성일 ${i}`,
      });
    }
    return fakeData;
  };

  // 가짜 데이터 생성
  const fakeData = generateFakeData();

  // 합쳐진 데이터 배열
  const mergedData = [...fakeData, ...inquiries];

  return (
    <div>
      <h1>문의하기 게시판</h1>
      <form onSubmit={handleSubmit}>
        {/* 입력 폼은 주석 처리 */}
      </form>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={mergedData}
          columns={[
            {
              field: 'name',
              headerName: '상세정보',
              width: 300,
            },
            {
              field: 'email',
              headerName: '구매상품안내',
              width: 300,
            },
            {
              field: 'title',
              headerName: '후기',
              width: 300,
            },
            {
              field: 'date',
              headerName: '문의하기',
              width: 300,
            },
          ]}
          pagination
          pageSize={5}
          rowsPerPageOptions={[]} // 빈 배열로 설정하여 페이지당 항목 수 옵션을 제거합니다.
          rowHeight={50} // 간격 조정을 위해 행의 높이를 설정합니다.
          style={{marginTop:'50px'}}
          localeText={{
            toolbarDensity: 'Size',
            toolbarDensityLabel: 'Size',
            toolbarDensityCompact: 'Small',
            toolbarDensityStandard: 'Medium',
            toolbarDensityComfortable: 'Large',
          }}
          components={{
            Toolbar: GridToolbar,
            Pagination: CustomPagination,
          }}
        />
      </div>
    </div>
  );
}

export default Board;
