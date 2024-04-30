import React from 'react';

function MyListComponent() {
  // 리스트에 들어갈 요소들
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <h1>My List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyListComponent;
