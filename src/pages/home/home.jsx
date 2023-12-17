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

function App() {
  return (
    <div className="App">
      <Header></Header>
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
    </div>
  );
}

export default App;
