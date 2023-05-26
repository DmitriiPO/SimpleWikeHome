import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom'

const MSlider = () => {
  return (
    <Carousel>
    <Carousel.Item interval ={3000} pause="hover" >
      <img
        className="img d-block w-100 "
        src="./img/first.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <Link to={"/form"}>
            <Button variant='primary'>
                Форма обратной связи
            </Button>
        </Link>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item interval ={3000} pause="hover">
      <img 
        className="img d-block w-100"
        src="./img/second.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>

      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item interval ={3000} pause="hover" className="imgContaner">
      <img 
        className="img d-block w-100"
        src="./img/three.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        {/* <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p> */}
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item interval ={3000} pause="hover" >
      <img 
        className="img d-block w-100 "
        src="./img/four.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        {/* <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default MSlider

