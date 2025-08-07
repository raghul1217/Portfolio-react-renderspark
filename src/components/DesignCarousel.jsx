// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "../styles/DesignCarousel.css";
// // import s1 from "../assets/swiper-img/plane.jpg";
// import s2 from "../assets/swiper-img/blood doantion.png";
// // import s3 from "../assets/swiper-img/fashion.jpg";
// import s4 from "../assets/swiper-img/restaurant landing page.jpg";
// import s5 from "../assets/swiper-img/text editor.jpg";
// import s6 from "../assets/swiper-img/ui verse.png";
// import s7 from "../assets/swiper-img/pet landing page.jpg";
// // import s8 from "../assets/swiper-img/fashion.jpg";
// import s12 from "../assets/swiper-img/about-page3.png";
// import s11 from "../assets/swiper-img/welcome-page2.png";
// import s10 from "../assets/swiper-img/home-page1.png";
// import s13 from "../assets/swiper-img/comb1.png";
// import s14 from "../assets/swiper-img/comb11.png";

// const images = [ s2, s4, s5, s6, s7, s10, s11, s12, s13, s14];

// const DesignCarousel = () => {
//   const [activeImage, setActiveImage] = useState(null);

//   const handleImageClick = (img) => {
//     setActiveImage(img);
//   };

//   const closeImage = () => {
//     setActiveImage(null);
//   };

//   return (
//     <div className="carousel-container">
//       <h1 className="section-heading">
//         My <span>Figma Designs</span>
//       </h1>
//       <Swiper
//         modules={[Pagination, Navigation, Autoplay]}
//         spaceBetween={20}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         navigation
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         className="swiper-container"
//       >
//         {images.map((img, index) => (
//           <SwiperSlide key={index} onClick={() => handleImageClick(img)}>
//             <img src={img} alt={`Design ${index + 1}`} className="carousel-image" />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Fullscreen Image View */}
//       {activeImage && (
//         <div className="fullscreen-overlay" onClick={closeImage}>
//           <img src={activeImage} alt="Fullscreen" className="fullscreen-image" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default DesignCarousel;
