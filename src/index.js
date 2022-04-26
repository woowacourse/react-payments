import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// 성능 측정하기를 원한다면, 로그함수를 인자로 넘기면 성능을 콘솔에 찍어줍니다.
// 예시 : reportWebVitals(console.log)
// 참조 : https://bit.ly/CRA-vitals
reportWebVitals();
