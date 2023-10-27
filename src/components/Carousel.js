import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from"../assets/Image1.png"
import Image2 from"../assets/Image2.png"
import Image3 from"../assets/Image3.png"
import Image4 from"../assets/Image4.png"
import Image5 from"../assets/Image5.png"
import Image6 from"../assets/Image6.png"
import Image7 from"../assets/Image7.png"
import Image8 from"../assets/Image8.png"

const Carousel = () => {


    const list=[Image1,Image2,Image3,Image4,Image5,Image6,Image7,Image8]

  const settings = {
    dots: true,
    infinite: true, 
    speed: 500, 
    slidesToShow: 5, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 2000, 
  };

  return (
    <div className="max-w-screen-xl mt-[100px] bg-white mx-auto p-4">
      
      <Slider {...settings}>
        {list.map((image,index) => (
          <div className="    bg-whiteflex justify-center items-center">
            <img
              src={image}
              alt="image1"
              className="w-[280px] h-[200px] object-fit overlay mx-auto "></img>
          </div>
        ) )}
      </Slider>
    </div>
  );
}

export default Carousel;


