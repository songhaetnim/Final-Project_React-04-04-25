import React, { useRef, useEffect } from 'react';

const Sunflower = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // 캔버스 초기화
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 해바라기 그리기
    drawSunflower(ctx);

  }, []);

  const drawSunflower = (ctx) => {
    // 중심 원 그리기
    ctx.fillStyle = 'brown';
    ctx.beginPath();
    ctx.arc(150, 150, 30, 0, Math.PI * 2, true); 
    ctx.fill();

    // 꽃잎 그리기
    const petalCount = 20;
    const petalLength = 70;
    const petalWidth = 20;
    ctx.fillStyle = 'yellow';

    for (let i = 0; i < petalCount; i++) {
      const angle = (i * 2 * Math.PI) / petalCount;
      const x = 150 + Math.cos(angle) * 50;
      const y = 150 + Math.sin(angle) * 50;

      ctx.beginPath();
      ctx.ellipse(x, y, petalWidth, petalLength, angle, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  return <canvas ref={canvasRef} width={300} height={300} />;
};

export default Sunflower;




// import React from 'react';
// import Sunflower from './Sunflower';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Sunflower />
//       </header>
//     </div>
//   );
// }

// export default App;
