import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img2 from './Image/1.jpg'
import img3 from './Image/gao-nep-cam-1.jpg';
import img4 from './Image/gao-seng-cu-2.jpg';

class ImageSlider extends React.Component {
    render() {
      const settings = {
        // dots: false, // Tắt hiển thị các chấm điều hướng
        arrows: false, // Tắt hiển thị nút button điều hướng
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000, // thời gian chờ giữa các slide (ms)
        speed: 500, // tốc độ chuyển đổi slide (ms)
        slidesToShow: 5,
        slidesToScroll: 1
      };
  
      return (
        <Slider className='slider-container'{...settings}>
          <div>
            <img src={img2} alt="Slide 1" className="slider-image" />
          </div>
          <div>
            <img src={img3} alt="Slide 2" className="slider-image" />
          </div>
          <div>
            <img src={img4} alt="Slide 3" className="slider-image"/>
          </div>
          <div>
            <img src={img2} alt="Slide 1" className="slider-image" />
          </div>
          <div>
            <img src={img3} alt="Slide 2" className="slider-image" />
          </div>
          <div>
            <img src={img4} alt="Slide 3" className="slider-image"/>
          </div>
          <div>
            <img src={img2} alt="Slide 1" className="slider-image" />
          </div>
          <div>
            <img src={img3} alt="Slide 2" className="slider-image" />
          </div>
          <div>
            <img src={img4} alt="Slide 3" className="slider-image"/>
          </div>
        </Slider>
      );
    }
  }
  
  export default ImageSlider;
  
