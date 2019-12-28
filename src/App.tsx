import React from 'react';
import './App.css';
import Router from './Router';
import {BrowserRouter} from 'react-router-dom';


const App: React.FC = () => {


    return (
        <div className="App">
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </div>
    );
};

export default App;
