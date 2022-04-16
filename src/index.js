import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Fonts/woff/IRANSansXFaNum-Regular.woff';
import './Fonts/woff/IRANSansXFaNum-Bold.woff';
import './Fonts/woff2/IRANSansXFaNum-Regular.woff2';
import './Fonts/woff2/IRANSansXFaNum-Bold.woff2';

import './Fonts/woff_Yekan/iranyekanwebregularfanum.woff'
import './Fonts/woff2_Yekan/IRANYekanWebRegular.woff2'
import './Fonts/woff_kalameh/KalamehWebFaNum-Regular.woff'
import './Fonts/woff2_kalameh/KalamehWebFaNum-Regular.woff2'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
