import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer, {rootSaga} from './Authority/modules';
import createSagaMiddleware from 'redux-saga';
import {check, tempSetUser} from "./Authority/modules/user";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
const persistor = persistStore(store);


// function loadUser() {
//     try {
//         const user = localStorage.getItem('user');
//         if (!user) return; //로그인 상태가 아니라면 아무것도 안 함
//         store.dispatch(tempSetUser(JSON.parse(user)));
//         store.dispatch(check());
//         console.log('444444444444444444444');
//     } catch (e) {
//         console.log('localStorage is not working');
//     }
// }
//
// loadUser();

sagaMiddleware.run(rootSaga);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        </PersistGate>
    </Provider>,
);
