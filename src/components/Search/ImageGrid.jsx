import React, { useState, useEffect } from "react";

const ImageGrid = ({ searchQuery }) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const unsplashKey = import.meta.env.VITE_UNSPLASH_KEY;

  if (!unsplashKey) {
    console.error(
      "Unsplash API key is missing. Please set REACT_APP_UNSPLASH_KEY in your .env file."
    );
  }

  const query = searchQuery || "popular";
  const searchURL = `https://api.unsplash.com/search/photos?page=1&query=${query}&per_page=20&client_id=${unsplashKey}`;

  useEffect(() => {
    fetch(searchURL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        if (data.results && data.results.length > 0) {
          const imageUrls = data.results.map((image) => image.urls.regular);
          setImages(imageUrls);
        }
      })
      .catch((err) => {
        setError(err.message);
        console.error("Error fetching images:", err);
      });
  }, [searchURL]); // Added searchURL as dependency

  if (error)
    return <div className="text-center mt-4">Error loading images</div>;

  return (
    <>
      <section className="grid grid-cols-3 gap-[2px] px-1">
        {images.map((imageUrl, index) => (
          <div key={index} className="aspect-square">
            <img
              onClick={() => handleImageClick(imageUrl)}
              loading="lazy"
              src={imageUrl}
              className="w-full h-full object-cover cursor-pointer"
              alt={`Grid image ${index + 1}`}
            />
          </div>
        ))}
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="max-w-[90%] max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Selected image"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGrid;

// Learn Lazy Loading
// modal open hidden - modalImage clicked display block
