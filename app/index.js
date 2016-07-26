import React from 'react';
import { render } from 'react-dom';
import {Router,browserHistory} from 'react-router';
//使用browserHistory时，webpack启动时需要家一个参数 --history-api-fallback

import routes from './routes/Routes.js';
import 'bootstrap/dist/css/bootstrap.css';

let root = document.getElementById('app');
render(<Router routes={routes} history={browserHistory} />, root);
