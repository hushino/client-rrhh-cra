import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import * as stores from './redux/store'
import './styles/index.less';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './components/header/Header';
import * as Sentry from '@sentry/browser';
Sentry.init({dsn: "https://8839572e21fe429bb5f080d732e169af@sentry.io/1776203"});

ReactDOM.render(
    <Provider store={stores.default}>
        <Header />
    </Provider>,
    document.getElementById('header'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


/* "accessToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNTY4NjY3OTQ3LCJleHAiOjE1NjkyNzI3NDd9.3lS9EhlHUgtnOSGui6sIEJcYu8wm5Ifgo3AaKagaoxIpIzN4x6U8jXHCZFH17CU5HOlaA0ja1FsK9E6ZplhO8Q",
    "tokenType": "Bearer",
        "roles": [
            {
                "authority": "USER"
            }
] */

/* ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')); */
