import axios from 'axios';
import store from './store'

export function setToken() {
    store.subscribe(() => {
        axios.defaults.headers.common['Authorization'] =
            `Bearer ${store.getState().Authorization}`;
    });
}