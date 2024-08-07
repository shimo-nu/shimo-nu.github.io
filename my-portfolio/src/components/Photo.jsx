import React, { useState } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const PhotoLibrary = ({ images, columns, maxImagesPerPage }) => {
  // const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalImage, setModalImage] = useState(null);

  const totalImages = images.length;
  const totalPages = Math.ceil(totalImages / maxImagesPerPage);

  const startIndex = (currentPage - 1) * maxImagesPerPage;
  const endIndex = startIndex + maxImagesPerPage;
  const currentImages = images.slice(startIndex, endIndex);


  const renderImages = () => {
    return (
      <div className="photo-container">
        {currentImages.map((img, index) => (
          <div key={index} className="photo-item">
            <div className="photo-inner" onClick={() => setModalImage(img)}>
              <img src={img} alt={`img-${index}`} />
            </div>
          </div>
        ))}
      </div>
    );
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div>
      <div>
        {renderImages()}
      </div>
      <div className="pagination">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={`icon ${currentPage === 1 ? 'disabled' : ''}`}
          onClick={handlePreviousPage}
        />
        <span>{` ${currentPage} of ${totalPages} `}</span>
        <FontAwesomeIcon
          icon={faChevronRight}
          className={`icon ${currentPage === totalPages ? 'disabled' : ''}`}
          onClick={handleNextPage}
        />
      </div>
      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <img src={modalImage} alt="Modal" />
        </div>
      )}
    </div>
  );
};

const Photo = () => {
  const columns = 2; 
  const maxImagesPerPage = 6; 
  const images = [
    `${window.location.origin}/imgs/photo_library/img1.jpg`,
    `${window.location.origin}/imgs/photo_library/img2.jpg`,
    `${window.location.origin}/imgs/photo_library/img3.jpg`,
  ];

  return (
    <div className='photo_library'>
      <h1>Photo Library</h1>
      <PhotoLibrary images={images} columns={columns} maxImagesPerPage={maxImagesPerPage} />
    </div>
  );
};


export default Photo;
