import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Calendar from './components/Calendar';

ReactDOM.render(
    <div>
        <App />
        <Calendar />
    </div>, document.getElementById('root')
    );
registerServiceWorker();
