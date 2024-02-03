// My Custom Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import required modules
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

// img imports
import shoe1 from "../../database/imgs/1.png";
import shoe2 from "../../database/imgs/2.png";
import shoe3 from "../../database/imgs/3.png";
import shoe4 from "../../database/imgs/4.png";
import shoe5 from "../../database/imgs/5.png";
import shoe6 from "../../database/imgs/6.png";

import nike1 from "../../database/testImgs/nike1.png";
import kadin from "./assets/kadin.jpg";
import erkek from "./assets/erkek.jpg";
import cocuk from "./assets/cocuk.jpg";
import { Link } from "react-router-dom";

const heroSlide = (img) => {
  return (
    <SwiperSlide
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={img}
        alt="jordan"
        style={{
          width: "700px",
          height: "700px",
          objectFit: "contain",
        }}
      />
    </SwiperSlide>
  );
};

const bestSellerSlide = (img) => {
  return (
    <SwiperSlide>
      <img
        src={img}
        alt="jordan"
        style={{
          width: "800px",
          height: "500px",
          objectFit: "contain",
        }}
      />
    </SwiperSlide>
  );
};

function App() {
  return (
    <div id="Home" className="dark:bg-bg1">
      <Header></Header>
      {/* Hero section */}
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        slidesPerView={1}
        navigation={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        style={{
          "--swiper-pagination-color": "#00CF2A",
        }}
        className="mt-2"
      >
        {heroSlide(shoe2)}
        {heroSlide(shoe3)}
        {heroSlide(shoe5)}
      </Swiper>
      {/*kadin erkek cocuk section*/}
      <div>
        <h1 className="mt-24 mb-4 px-2 text-xl font-semibold dark:text-white">
          Size özel tüm ayakkabıları keşfedin
        </h1>
      </div>
      <div className="flex px-2 justify-between w-full text-center">
        <Link to="/kadin" className="w-[33%] h-[600px] relative">
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-3xl font-semibold">
            Kadın
          </p>
          <img src={kadin} alt="kadin" className="w-full h-full" />
        </Link>
        <Link to="/erkek" className="w-[33%] h-[600px] relative">
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-3xl font-semibold">
            Erkek
          </p>
          <img src={erkek} alt="erkek" className="w-full h-full" />
        </Link>
        <Link to="/cocuk" className="w-[33%] h-[600px] relative">
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-3xl font-semibold">
            Çocuk
          </p>
          <img src={cocuk} alt="cocuk" className="w-full h-full" />
        </Link>
      </div>
      {/* Çok satanlar section */}
      <div className="mt-24 mb-24">
        <h2 className="text-center font-semibold text-5xl mb-10 dark:text-white">
          ÇOK SATANLAR
        </h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          style={{
            "--swiper-pagination-color": "#00CF2A",
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {bestSellerSlide(shoe1)}
          {bestSellerSlide(shoe2)}
          {bestSellerSlide(shoe3)}
          {bestSellerSlide(shoe4)}
          {bestSellerSlide(shoe5)}
          {bestSellerSlide(shoe6)}
        </Swiper>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
