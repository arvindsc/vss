import AppDisplay from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import getStore from './getStore';
import {Provider} from 'react-redux';

const store = getStore();


const render = (_App)=>{
    ReactDOM.render(
        <Provider store={store}>
            <_App/>
        </Provider>
        ,
        document.getElementById('app')
    );

}
render(AppDisplay);