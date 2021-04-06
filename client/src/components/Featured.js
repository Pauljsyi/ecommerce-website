import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import freepicks11 from '../img/free-picks11.jpg';
import freepicks2 from '../img/free-picks2.jpeg';
import freepicks3 from '../img/free-picks3.jpeg';



const Featured = () => {
  return (
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={500}
            src={freepicks11}
            alt="First slide"
            fluid
            
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src={freepicks2}
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={freepicks3}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>*/}
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
