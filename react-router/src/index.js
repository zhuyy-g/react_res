import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import App from './components/app';
import './index.css'

render(
  // 下面的这个BrowserRouter组件是必须的  否则无法进行路由跳转
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
