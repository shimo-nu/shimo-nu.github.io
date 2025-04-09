// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Photo from './components/Photo';
import SNS from './components/SNS';
import './App.css';
import Blog from './components/Blog';
import Project from './components/Project';

const App = () => {
    const [page, setPage] = useState('project');

    return (
        <div className="App">
            <Header onSelectPage={setPage} selectedPage={page}/>
            {page === 'about' && <AboutMe />}
            {page === 'photo' && <Photo />}
            {page === 'blog' && <Blog />}
            {/* {page === 'project' && <Project />} */}
            <SNS />
        </div>
    );
};

export default App;
