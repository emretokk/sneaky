// My Custom Components
import Header from "../../components/Header";

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
import ayak3 from "../../database/testImgs/reebok1.jpg";
import ayak4 from "../../database/testImgs/adidas1.jpg";
import kadin from "./assets/kadin.jpg";
import erkek from "./assets/erkek.jpg";
import cocuk from "./assets/cocuk.jpg";

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* Hero section */}
      <Swiper
        className="mt-24"
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
      >
        <SwiperSlide
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={ayak1}
            alt="jordan"
            style={{
              width: "800px",
              height: "500px",
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
            src={ayak2}
            alt="jordan"
            style={{
              width: "800px",
              height: "500px",
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
            src={ayak3}
            alt="jordan"
            style={{
              width: "800px",
              height: "500px",
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
            src={ayak4}
            alt="jordan"
            style={{
              width: "800px",
              height: "500px",
            }}
          />
        </SwiperSlide>
      </Swiper>
      {/*kadin erkek cocuk section*/}
      <div className="flex justify-center w-full text-center mt-24">
        <a href="#" className="w-1/3 h-[600px] relative p-2">
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-3xl font-semibold">
            Kadın
          </p>
          <img src={kadin} alt="kadin" className="w-full h-full" />
        </a>
        <a href="#" className="w-1/3 h-[600px] relative p-2">
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-3xl font-semibold">
            Erkek
          </p>
          <img src={erkek} alt="erkek" className="w-full h-full" />
        </a>
        <a href="#" className="w-1/3 h-[600px] relative p-2">
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-3xl font-semibold">
            Cocuk
          </p>
          <img src={cocuk} alt="cocuk" className="w-full h-full" />
        </a>
      </div>
      {/* Çok satanlar section */}
      <div className="mt-24 mb-24">
        <h2 className="text-center font-semibold text-5xl">ÇOK SATANLAR</h2>
      </div>
    </div>
  );
}

export default App;
