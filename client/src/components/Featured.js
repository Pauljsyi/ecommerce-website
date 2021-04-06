import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import freepicks11 from '../img/freepicks11.jpg';
import freepicks222 from '../img/freepicks222.jpg';
import freepicks3 from '../img/freepicks3.jpg';



const Featured = () => {

  return (
      <Carousel fade>
        <Carousel.Item className="firstSlide">
          <img
            className="first d-block w-100"
            backgroundPosition= 'center'
            src={freepicks11}
            style={{ height: '500px', width: '80%'}}
            alt="First slide"
  
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="secondSlide">
          <img
            className="second d-block w-100"
            src={freepicks222}
            style={{ height: '500px'}}
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="thirdSlide">
          <img
            className="third d-block w-100"
            src={freepicks3}
            style={{ height: '500px'}}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
