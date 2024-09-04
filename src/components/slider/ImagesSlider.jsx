import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"; // Import the autoplay module CSS
import { Autoplay } from "swiper/modules"; // Import the autoplay module
import slide1 from "../../images/slide1.png";
import slide2 from "../../images/slide2.png";
import slide3 from "../../images/slide3.png";
import slide4 from "../../images/slide4.png";
import slide5 from "../../images/slide5.png";

const ImageSlider = () => {
  const images = [
    { image: slide1 },
    { image: slide2 },
    { image: slide3 },
    { image: slide4 },
    { image: slide5 },
  ];

  return (
    <div style={{ width: "80%", margin: "0 auto", padding: "10px 0" }}>
      <Swiper
        spaceBetween={30} // Space between slides in pixels
        loop={true} // Enables continuous loop mode
        autoplay={{
          delay: 0, // Sets delay to 0 for continuous scrolling
          disableOnInteraction: false, // Prevents autoplay from stopping on user interaction
          waitForTransition: true, // Wait for transition before autoplay resumes
        }}
        speed={5000} // Duration of the transition effect (milliseconds)
        modules={[Autoplay]} // Add the autoplay module
        breakpoints={{
          320: {
            slidesPerView: 1, // 1 slide per view for small screens (mobile)
            spaceBetween: 10, // Less space between slides on small screens
          },
          640: {
            slidesPerView: 2, // 2 slides per view for medium screens (tablets)
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3, // 3 slides per view for larger screens (desktop)
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 4, // 4 slides per view for extra-large screens
            spaceBetween: 40,
          },
        }}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.image}
              alt={`Slide ${index + 1}`}
              style={{ width: "50%", height: "auto", borderRadius: "8px" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
