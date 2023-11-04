import  { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
    const images = [
        {
          id: 1,
          src: 'https://source.unsplash.com/random/800x600/?Food',
          alt: 'Thai Food',
        },
        {
          id: 2,
          src: 'https://source.unsplash.com/random/800x601/?Food',
          alt: 'Thai Food',
        },
        {
          id: 3,
          src: 'https://source.unsplash.com/random/800x602/?food',
          alt: 'Thai Food',
        },
        {
          id: 4,
          src: 'https://source.unsplash.com/random/800x603/?food',
          alt: 'Thai Food',
        },
        {
          id: 5,
          src: 'https://source.unsplash.com/random/800x604/?food',
          alt: 'Thai Food',
        },
        {
          id: 6,
          src: 'https://source.unsplash.com/random/800x605/?food',
          alt: 'Thai Food',
        },
        {
          id: 7,
          src: 'https://source.unsplash.com/random/800x606/?food',
          alt: 'Thai Food',
        },
        {
          id: 8,
          src: 'https://source.unsplash.com/random/800x607/?food',
          alt: 'Thai Food',
        },
      ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Image Gallery</h2>
      <div className="featured-image">
        <img src={selectedImage.src} alt={selectedImage.alt} />
      </div>
      <div className="gallery-images">
        {images.map((image) => (
          <div
            key={image.id}
            className={`gallery-image ${selectedImage === image ? 'selected' : ''}`}
            onClick={() => handleImageClick(image)}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Gallery;
