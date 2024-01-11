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
import ayak1 from "../../database/testImgs/converse1.jpg";
import ayak2 from "../../database/testImgs/jordan1.jpg";
import nike1 from "../../database/testImgs/nike1.png";
import kadin from "./assets/kadin.jpg";
import erkek from "./assets/erkek.jpg";
import cocuk from "./assets/cocuk.jpg";
import { Link } from "react-router-dom";

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
      >
        <SwiperSlide
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={nike1}
            alt="jordan"
            style={{
              width: "700px",
              height: "700px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={nike1}
            alt="jordan"
            style={{
              width: "700px",
              height: "700px",
            }}
          />
        </SwiperSlide>
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
          <SwiperSlide>
            <img
              src={nike1}
              alt="jordan"
              style={{
                width: "800px",
                height: "500px",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={nike1}
              alt="jordan"
              style={{
                width: "800px",
                height: "500px",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={nike1}
              alt="jordan"
              style={{
                width: "800px",
                height: "500px",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={nike1}
              alt="jordan"
              style={{
                width: "800px",
                height: "500px",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={nike1}
              alt="jordan"
              style={{
                width: "800px",
                height: "500px",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={nike1}
              alt="jordan"
              style={{
                width: "800px",
                height: "500px",
              }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
