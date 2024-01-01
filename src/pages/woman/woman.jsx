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
          <div className="flex bg-orange-200">
            <p className="flex-none">31 ürün bulundu</p>
            <div className="flex-auto flex flex-row-reverse">
              <div>sırala</div>
              <div>filtrele</div>
            </div>
          </div>
          {/* products */}
          <div className="h-32 w-full bg-green-700">asdfa</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Woman;
