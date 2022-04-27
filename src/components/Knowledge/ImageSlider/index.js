import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import MainContainer from '../../Resume/MainContainer';
import { carouselContainer } from './style.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const ImageSlider = ({ imgArr }) => {
  return (
    <MainContainer>
      <div className={carouselContainer}>
        <Carousel autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          showThumbs={false} 
          transitionTime={800}
        >
          {Object.keys(imgArr).map(tech => (
            <div key={tech}>
              <img src={imgArr[tech]} alt={tech} key={`${tech}img`} />
            </div>
          ))}
        </Carousel>
      </div>
    </MainContainer>
  )
}
export default ImageSlider;
