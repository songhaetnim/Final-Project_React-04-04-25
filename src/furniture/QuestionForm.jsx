// ProductList.js
import React from 'react';

// 이 컴포넌트는 상품 목록을 렌더링합니다.
const ProductList = () => {
  // 상품 데이터 배열
  const products = [
    { id: 1, name: '상품 1', price: 10 },
    { id: 2, name: '상품 2', price: 20 },
    { id: 3, name: '상품 3', price: 30 },
  ];

  return (
    <div>
      <h2>상품 목록</h2>
      <ul>
        {/* 각 상품을 리스트 아이템으로 렌더링 */}
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
