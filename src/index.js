import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, } from 'react-router-dom';

import Calendar from './components/Calendar';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={Calendar} />
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();