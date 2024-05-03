import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Material-UI의 장바구니 아이콘

function Rder() {
  // 상품 목록과 수량 상태
  const [products, setProducts] = useState([
    { id: 1, name: '상품 1', price: 10000, quantity: 0 },
    { id: 2, name: '옵션 2', price: 20000, quantity: 0 },
    { id: 3, name: '옵션 3', price: 30000, quantity: 0 },
  ]);

  // 수량 변경 함수
  const handleQuantityChange = (id, quantity) => {
    setProducts(
      products.map(product =>
        product.id === id ? { ...product, quantity } : product
      )
    );
  };

  // 주문 처리 함수
  const handleOrder = () => {
    // 여기에 주문 처리 로직을 추가하세요.
    console.log('주문 처리됨:', products);
  };

  // 총 주문 가격 계산
  const totalPrice = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <div>
      <h1>주문하기</h1>
      <select>
        {products.map(product => (
          <option key={product.id} value={product.id}>{product.name}</option>
        ))}
      </select>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <span>{product.name}</span>
            <input
              type="number"
              value={product.quantity}
              onChange={e => handleQuantityChange(product.id, parseInt(e.target.value))}
              min={0}
            />
            <span>{product.price * product.quantity}원</span>
          </li>
        ))}
      </ul>
      <div>총 주문 가격: {totalPrice}원</div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button onClick={handleOrder}>바로구매하기</button>
        <button onClick={handleOrder}>
          <ShoppingCartIcon /> {/* 아이콘 추가 */}
          장바구니
        </button>
        <button onClick={handleOrder}>관심상품등록</button>
      </div>
    </div>
  );
}

export default Rder;
