// App.js

import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    require('C:/Users/egaaj/Documents/js-basics/COLLEGE/MERN/easyrentals/src/image1.png'),
    require('C:/Users/egaaj/Documents/js-basics/COLLEGE/MERN/easyrentals/src/image2.png'),
    require('C:/Users/egaaj/Documents/js-basics/COLLEGE/MERN/easyrentals/src/image3.png'),
    require('C:/Users/egaaj/Documents/js-basics/COLLEGE/MERN/easyrentals/src/image4.png'),
    require('C:/Users/egaaj/Documents/js-basics/COLLEGE/MERN/easyrentals/src/image5.png')
  ];

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>EasyRentals</h1>
        <p>Find the perfect car for your journey!</p>
      </header>
      <main>
        <section className="search-section">
          <h2>Search for Rental Cars</h2>
          <form>
            <input type="text" placeholder="Search for make and model" />
            <button type="submit">Search</button>
          </form>
        </section>
        <section className="popular-cars-section">
          <h2>Popular Cars</h2>
          <div className="carousel">
            <button className="carousel-button" onClick={prevImage}>Prev</button>
            <img src={images[currentImageIndex]} alt={`Carousel Image ${currentImageIndex + 1}`} />
            <button className="carousel-button" onClick={nextImage}>Next</button>
          </div>
        </section>
        <section className="how-it-works-section">
          <h2>How EasyRentals Works</h2>
          {}
          <div className="how-it-works-content">
            {}
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 EasyRentals. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
