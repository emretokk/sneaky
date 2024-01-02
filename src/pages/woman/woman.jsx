import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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
          {/* products */}
          <div className="h-80 w-full bg-green-700"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Woman;
