import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'; //添加redux依赖后，引入创建store的方法createStore
import {Provider} from 'react-redux';//添加react-redux依赖，引入改节组件
import reduce from './redux';//createStore方法第一个参数是reduce
import App from './components/layout';
import 'antd/dist/antd.css';
import './style/index.css';
// import * as serviceWorker from './serviceWorker';
const store = createStore(reduce)

ReactDOM.render(
  // 严格模式检查
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
// serviceWorker.unregister();
