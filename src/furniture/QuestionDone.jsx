import React from 'react';
import { Link } from "react-router-dom";

// 화면에 환영 메시지와 링크를 출력하는 함수형 컴포넌트입니다.
export default function QuestionDone() {
  return (
    <div style={{ textAlign: "center" }}>
    {/* 홈페이지 안내 메시지를 출력합니다. */}
      <h2>등록을 완료 하였습니다.</h2>
      
      {/* 다른 페이지로 이동할 수 있는 링크를 출력합니다. */}
      <p>
        {/* Link 컴포넌트를 사용하여 클릭하면 '/furniture/Questions' 경로로 이동할 수 있는 링크를 생성합니다. */}
        {/* 이 링크를 클릭하면 사용자는 'Questions' 페이지로 이동할 수 있습니다. */}
        {/* 'to' prop에는 이동할 경로를 지정합니다. */}
        <Link to="/furniture/QuestionDone">Go to QuestionDone</Link>
      </p>
    </div>
  );
}

