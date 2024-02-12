import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import slide1 from "../../assets/home/slider-images/slide1.jpg";
import slide2 from "../../assets/home/slider-images/slide2.jpg";
import slide3 from "../../assets/home/slider-images/slide3.jpg";
import slide4 from "../../assets/home/slider-images/slide4.jpg";
import slide5 from "../../assets/home/slider-images/slide5.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11:00am to 10:00pm"}
        header={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-center uppercase text-white -mt-16 text-4xl">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-center uppercase text-white -mt-16 text-4xl">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-center uppercase text-white -mt-16 text-4xl">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-center uppercase text-white -mt-16 text-4xl">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-center uppercase text-white -mt-16 text-4xl">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
