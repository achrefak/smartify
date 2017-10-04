import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store } from './store/appStore';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/:var?/" component={App} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();