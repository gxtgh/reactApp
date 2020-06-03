import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/layout';
import 'antd/dist/antd.css';
import './style/index.css';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // 严格模式检查
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);
// serviceWorker.unregister();
