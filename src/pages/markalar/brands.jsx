import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// imgs
import kinetix from "../../database/testImgs/kinetix.png";
import polo from "../../database/testImgs/polo.png";

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
      <div className="p-12">
        <h2 className="font-extrabold text-lg">Popüler Markalar</h2>
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
        <h2 className="font-extrabold text-lg">Tüm Markalar</h2>
        <div></div>
      </div>
      <Footer />
    </div>
  );
}

export default Brands;
