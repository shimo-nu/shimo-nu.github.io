// src/components/Header.js
import React from 'react';

const Header = ({ onSelectPage, selectedPage }) => {
    return (
        <div className="header">
            <div className="name">
                <p className="hollow">Hironori Shimosato</p>
            </div>
            <div className="profile">
                <div className="profile-image">
                    <img src={`${window.location.origin}/imgs/profile_img.jpg`} alt="shimo face" />
                </div>
                <p className="profile-statement">名古屋大学大学院 工学研究科 <br/>博士課程3年</p>
            </div>
            <nav>
                <button 
                    className={`nav-button ${selectedPage === 'about' ? 'active' : ''}`} 
                    onClick={() => onSelectPage('about')}
                >
                    About Me
                </button>
                <button 
                    className={`nav-button ${selectedPage === 'photo' ? 'active' : ''}`} 
                    onClick={() => onSelectPage('photo')}
                >
                    Photo
                </button>
                <button 
                    className={`nav-button ${selectedPage === 'blog' ? 'active' : ''}`} 
                    onClick={() => onSelectPage('blog')}
                >
                    Blog
                </button>
                <button 
                    className={`nav-button ${selectedPage === 'project' ? 'active' : ''}`} 
                    onClick={() => onSelectPage('project')}
                >
                    Project
                </button>
            </nav>
        </div>
    );
};

export default Header;
