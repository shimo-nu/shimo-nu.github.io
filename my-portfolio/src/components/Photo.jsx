// src/components/Photo.js
import React, { useState, useEffect } from 'react';

const photos = [
    'imgs/random_photo1.jpg',
    'imgs/random_photo2.jpg',
    // 他の写真のパスをここに追加
];

const Photo = () => {
    const [randomPhoto, setRandomPhoto] = useState('');

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * photos.length);
        setRandomPhoto(photos[randomIndex]);
    }, []);

    return (
        <div className="photo-page">
            <img src={randomPhoto} alt="Random" />
        </div>
    );
};

export default Photo;
