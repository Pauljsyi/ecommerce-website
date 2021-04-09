import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import luthier from '../img/customguitar/featured/luthier.jpg';
import custom from '../img/customguitar/featured/custom.jpg';
import vintage from '../img/customguitar/featured/vintage.jpg';



const Featured = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
      <Carousel fade activeIndex={index} onSelect={handleSelect}>
      
        <Carousel.Item className="firstSlide">
          <img
            className="first d-block w-100"
            backgroundPosition= 'center'
            src={custom}
            style={{ height: '500px', width: '80%'}}
            alt="First slide"
  
          />
          <Carousel.Caption>
            <h3>Custom Shop</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="secondSlide">
          <img
            className="second d-block w-100"
            src={luthier}
            style={{ height: '500px'}}
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Repairs & Build</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="thirdSlide">
          <img
            className="third d-block w-100"
            src={vintage}
            style={{ height: '500px', color: 'black' }}
            
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Vintage Shop</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> 




      // <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      //   <ol class="carousel-indicators">
      //     <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      //     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      //     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      //   </ol>
      //   <div class="carousel-inner">
      //     <div class="carousel-item active">
      //       <img class="d-block w-100" src="img/pexels-rombo-3528694.jpeg" alt="First slide" />
      //     </div>
      //     <div class="carousel-item">
      //       <img class="d-block w-100" src="img/pexels-rombo-3591232" alt="Second slide" />
      //     </div>
      //     <div class="carousel-item">
      //       <img class="d-block w-100" src="..." alt="Third slide" />
      //     </div>
      //   </div>
      //   <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      //     <span class="sr-only">Previous</span>
      //   </a>
      //   <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
      //     <span class="sr-only">Next</span>
      //   </a>
      // </div>
  )
}

export default Featured
