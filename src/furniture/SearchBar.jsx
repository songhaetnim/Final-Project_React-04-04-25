import React, { useState } from 'react';

// SearchBar 컴포넌트 정의. data라는 prop을 받아옴.
const SearchBar = ({ data }) => {
  // query: 검색창에 입력된 텍스트를 저장하는 상태.
  // filteredData: 필터링된 데이터를 저장하는 상태.
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  // 입력 필드의 값이 변경될 때 호출되는 함수.
  const handleInputChange = (e) => {
    const value = e.target.value; // 입력된 텍스트 가져오기
    setQuery(value); // query 상태 업데이트
    // 입력된 텍스트를 포함하는 데이터만 필터링
    setFilteredData(
      data.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div>
      {/* 검색어를 입력받는 인풋 필드 */}
      <input 
        type="text" 
        value={query} 
        onChange={handleInputChange} 
        placeholder="Search..." 
      />
      {/* 필터링된 데이터를 보여주는 리스트 */}
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li> // 각 아이템을 리스트 항목으로 렌더링
        ))}
      </ul>
    </div>
  );
};




export default SearchBar;
