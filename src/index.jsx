import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import myData from '../data.json';


const renderApp = () => {
    render(
        <App />, 
        document.getElementById('app')
    );
}

renderApp();