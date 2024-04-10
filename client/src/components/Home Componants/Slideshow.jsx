// import React, { useState, useEffect } from 'react';
// import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';

// const Slideshow = () => {
//   const [current, setCurrent] = useState(0);

//   const slides = [
//     'https://cdn.pixabay.com/photo/2023/11/22/15/20/books-8405721_960_720.jpg',
//     '/Literature.jpg',
//     'https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029_960_720.jpg',
//     'https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_1280.jpg',
//     'https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717_1280.jpg',
//     '/WhiteLitrature.jpg' 
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000); // Change slide every 5 seconds

//     return () => clearInterval(interval);
//   }, [current]); // Restart interval when current slide changes

//   // const previousSlide = () => {
//   //   if (current === 0) setCurrent(slides.length - 1);
//   //   else setCurrent(current - 1);
//   // };

//   // const nextSlide = () => {
//   //   if (current === slides.length - 1) setCurrent(0);
//   //   else setCurrent(current + 1);
//   // };

//   return (
//     <div className="border-black border h-[20rem] m-2 rounded-lg bg-gray-800 relative overflow-hidden bg-cover px-6">
//       <div
//         className=" transition-transform ease-in-out gap-12 duration-500" //flex
//         style={{
//           transform: `translateX(-${current * (100 / slides.length)}%)`,
//           width: `${slides.length * 100}%`,
//         }}
//       > 
//         {slides.map((s, index) => (
//           <img key={index} src={s} className=" h-[20rem] w-full mt-2 " alt={`slide-${index}`} />
//         ))}
//       </div>
//       {/* <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center text-white px-10 text-3xl">
//         <button onClick={previousSlide}>
//           <BsFillArrowLeftCircleFill />
//         </button>
//         <button onClick={nextSlide}>
//           <BsFillArrowRightCircleFill />
//         </button>
//       </div> */}

//       <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
//         {slides.map((i) => (
//           <div
//             onClick={() => setCurrent(i)}
//             key={`circle-${i}`}
//             className={`rounded-full w-5 h-5 cursor-pointer ${
//               i === current ? 'bg-white' : 'bg-gray-500'
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slideshow;


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
    autoplaySpeed: 2000,
  };

  return (
    <div className="border-black border h-[20rem] m-2 rounded-lg bg-gray-800 relative overflow-hidden bg-cover px-6">
      <Slider {...settings}>
        {slides.map((slideImages, index) => (
          <div key={index}>
            <div className="flex justify-center">
              {slideImages.map((image, i) => (
                <div key={i} className="w-1/2">
                  <img src={image} className="h-[20rem] w-full mt-2" alt={`slide-${index}-${i}`} />
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

