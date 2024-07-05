// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Photo from './components/Photo';
import SNS from './components/SNS';
import './App.css';
import Blog from './components/Contact';

const App = () => {
    const [page, setPage] = useState('about');

    return (
        <div className="App">
            <Header onSelectPage={setPage} selectedPage={page}/>
            {page === 'about' && <AboutMe />}
            {page === 'photo' && <Photo />}
            {page === 'contact' && <Blog />}
            <SNS />
        </div>
    );
};

export default App;
