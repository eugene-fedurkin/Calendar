import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Calendar from './components/Calendar';
import Numbers from './components/Numbers';

import { BrowserRouter, Route, } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/" component={Calendar} />
            <Route path="/react" component={App} />
        </div>
    </BrowserRouter>,
    document.getElementById('root')
    );
registerServiceWorker();