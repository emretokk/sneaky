import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// imgs
import kinetix from "../../database/testImgs/kinetix.png";
import polo from "../../database/testImgs/polo.png";
import nikeShowcase from "../../database/imgs/nikeShowcase.png";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/less/navigation";
import "swiper/css";

const getBrandJsx = (img) => {
  return (
    <SwiperSlide>
      <img src={img} alt="sdf" className="w-36 h-36 object-contain" />
    </SwiperSlide>
  );
};

function Brands() {
  return (
    <div>
      <Header />
      {/* Page content */}
      <div className="p-12 dark:bg-bg1 dark:text-white">
        <h2 className="mb-4 font-extrabold text-lg dark:text-primary">
          Popüler Markalar
        </h2>
        <div>
          <Swiper
            modules={[Navigation]}
            slidesPerView={10}
            watchSlidesVisibility={true}
            navigation={true}
            style={{
              "--swiper-navigation-size": "30px",
              "--swiper-navigation-top-offset": "50%",
              "--swiper-navigation-sides-offset": "10px",
              "--swiper-navigation-color": "#00CF2A",
            }}
          >
            {getBrandJsx(kinetix)}
            {getBrandJsx(polo)}
            {getBrandJsx(kinetix)}
            {getBrandJsx(kinetix)}
            {getBrandJsx(kinetix)}
            {getBrandJsx(kinetix)}
            {getBrandJsx(kinetix)}
            {getBrandJsx(kinetix)}
            {getBrandJsx(kinetix)}
            {getBrandJsx(kinetix)}
            {getBrandJsx(kinetix)}
            {getBrandJsx(kinetix)}
            {getBrandJsx(kinetix)}
            {getBrandJsx(kinetix)}
          </Swiper>
        </div>
        <h2 className="mt-12 font-extrabold text-lg dark:text-primary">
          Tüm Markalar
        </h2>
        <div className="mt-8">
          <div className="grid grid-cols-2 gap-3 ">
            <img src={nikeShowcase} alt="asdfasfd" className="w-full h-56" />
            <img src={nikeShowcase} alt="asdfasfd" className="w-full h-56" />
            <img src={nikeShowcase} alt="asdfasfd" className="w-full h-56" />
            <img src={nikeShowcase} alt="asdfasfd" className="w-full h-56" />
            <img src={nikeShowcase} alt="asdfasfd" className="w-full h-56" />
            <img src={nikeShowcase} alt="asdfasfd" className="w-full h-56" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Brands;
