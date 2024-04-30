import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import QuestionDone from './furniture/QuestionDone'; // QuestionDone 컴포넌트 import
import Questions from './furniture/Questions'; // Questions 컴포넌트 import
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');

// BrowserRouter로 애플리케이션을 감싸고, Routes를 사용하여 경로별로 컴포넌트를 렌더링합니다.
const router = (
  <BrowserRouter>
    <Routes>
      {/* 각 경로에 맞는 컴포넌트를 렌더링합니다. */}
      <Route path="/" element={<App />} /> {/* 루트 경로('/')에는 App 컴포넌트를 렌더링합니다. */}
      <Route path="/furniture/Questions" element={<Questions />} /> {/* '/furniture/Questions' 경로에는 Questions 컴포넌트를 렌더링합니다. */}
      <Route path="/furniture/QuestionDone" element={<QuestionDone />} /> {/* '/furniture/QuestionDone' 경로에는 QuestionDone 컴포넌트를 렌더링합니다. */}
    </Routes>
  </BrowserRouter>
);

// 라우터를 root 요소에 렌더링합니다.
ReactDOM.render(router, root);

// 웹 성능을 보고합니다.
reportWebVitals();

