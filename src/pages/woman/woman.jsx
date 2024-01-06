import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import img1 from "../../database/testImgs/converse1.jpg";
import img2 from "../../database/testImgs/jordan1.jpg";

function Woman() {
  return (
    <div id="Woman">
      <Header />
      {/* Content */}
      <div>
        <h1 className="mt-10 text-center font-semibold text-xl">Kadın</h1>
        {/* listing area */}
        <div className="p-12">
          {/* filter order cart curt */}
          <div className="flex">
            <p className="flex-none">31 ürün bulundu</p>
            <div className="flex-auto flex flex-row-reverse">
              <div>sırala</div>
              <div>filtrele</div>
            </div>
          </div>
          {/* products container */}
          <div className="w-full mt-2">
            {/* products grid */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-gray-100 h-96">
                <img src={img1} alt="converse" className="w-full h-56" />
              </div>
              <div className="bg-gray-100 h-96">
                <img src={img2} alt="converse" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Woman;
