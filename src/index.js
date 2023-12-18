import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//nhiệm vụ:khởi tạo root và render App ở chế độ StrictMode vào root (root này ở index.html)
// chỉ khởi tạo 1 lần ở đây
// có thể hiểu là hàm khởi tạo để chạy project Reactjs, nằm trong file index.ts
// tương tự hàm khởi tạo để chạy 1 project Angular sẽ nằm trong file main.ts

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
