import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slideshow = () => {
  const slides = [
    [
      'https://cdn.pixabay.com/photo/2023/11/22/15/20/books-8405721_960_720.jpg',
      '/Literature.jpg'
    ],
    [
      'https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029_960_720.jpg',
      'https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_1280.jpg'
    ],
    [
      'https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717_1280.jpg',
      '/WhiteLitrature.jpg'
    ]
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="border-black border h-[20rem] m-2 rounded-lg bg-gray-800 relative overflow-hidden bg-cover px-6">
      <Slider {...settings}>
        {slides.map((slideImages, index) => (
          <div key={index}>
            <div className="flex justify-center">
              {slideImages.map((image, i) => (
                <div key={i} className="w-1/2">
                  <img src={image} className="h-[20rem] w-full mt-2 p-2" alt={`slide-${index}-${i}`} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;

