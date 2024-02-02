import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import img1 from "../../database/testImgs/converse1.jpg";
import img2 from "../../database/testImgs/jordan1.jpg";
import { Link } from "react-router-dom";
import { VscFilter } from "react-icons/vsc";
import { IoFilterCircleOutline } from "react-icons/io5";

function Kids() {
  return (
    <div id="Kids" className="dark:bg-bg1 dark:text-white">
      <Header />
      {/* Content */}
      <div>
        <h1 className="mt-10 text-center font-semibold text-xl">Çocuk</h1>
        {/* listing area */}
        <div className="p-12">
          {/* filter order cart curt */}
          <div className="flex">
            <p className="flex-none">8 ürün bulundu</p>
            <div className="flex-auto flex flex-row-reverse">
              {/* Filter */}
              <Link to="/cocuk">
                <VscFilter size={25} />
              </Link>
              {/* Order */}
              <Link to="/cocuk">
                <IoFilterCircleOutline size={25} />
              </Link>
            </div>
          </div>
          {/* products container */}
          <div className="w-full mt-2">
            {/* products grid */}
            <div className="grid grid-cols-4 gap-4 ">
              <div className="h-96">
                <img src={img1} alt="converse" className="w-full h-64" />
                <h2 className="mt-1 font-medium text-xl truncate">
                  Converse Classic V1
                </h2>
                <p className="text-sm font-light text-gray-500">Klasik</p>
                {/* old price if exists */}
                <h3 className="h-8 mt-2 w-full font-bold text-xl line-through text-gray-500">
                  900,00 TL
                </h3>
                <h3 className="font-bold text-2xl">700,99 TL</h3>
              </div>
              <div className="h-96">
                <img src={img1} alt="converse" className="w-full h-64" />
                <h2 className="mt-1 font-medium text-xl truncate">
                  Converse Classic V1
                </h2>
                <p className="text-sm font-light text-gray-500">Klasik</p>
                {/* old price if exists */}
                <h3 className="h-8 mt-2 w-full font-bold text-xl line-through text-gray-500">
                  900,00 TL
                </h3>
                <h3 className="font-bold text-2xl">700,99 TL</h3>
              </div>
              <div className="h-96">
                <img src={img1} alt="converse" className="w-full h-64" />
                <h2 className="mt-1 font-medium text-xl truncate">
                  Converse Classic V1
                </h2>
                <p className="text-sm font-light text-gray-500">Klasik</p>
                {/* old price if exists */}
                <h3 className="h-8 mt-2 w-full font-bold text-xl line-through text-gray-500">
                  900,00 TL
                </h3>
                <h3 className="font-bold text-2xl">700,99 TL</h3>
              </div>
              <div className="h-96">
                <img src={img1} alt="converse" className="w-full h-64" />
                <h2 className="mt-1 font-medium text-xl truncate">
                  Converse Classic V1
                </h2>
                <p className="text-sm font-light text-gray-500">Klasik</p>
                {/* old price if exists */}
                <h3 className="h-8 mt-2 w-full font-bold text-xl line-through text-gray-500">
                  900,00 TL
                </h3>
                <h3 className="font-bold text-2xl">700,99 TL</h3>
              </div>
              <div className="h-96">
                <img src={img1} alt="converse" className="w-full h-64" />
                <h2 className="mt-1 font-medium text-xl truncate">
                  Converse Classic V1
                </h2>
                <p className="text-sm font-light text-gray-500">Klasik</p>
                {/* old price if exists */}
                <h3 className="h-8 mt-2 w-full font-bold text-xl line-through text-gray-500">
                  900,00 TL
                </h3>
                <h3 className="font-bold text-2xl">700,99 TL</h3>
              </div>
              <div className="h-96">
                <img src={img1} alt="converse" className="w-full h-64" />
                <h2 className="mt-1 font-medium text-xl truncate">
                  Converse Classic V1
                </h2>
                <p className="text-sm font-light text-gray-500">Klasik</p>
                {/* old price if exists */}
                <h3 className="h-8 mt-2 w-full font-bold text-xl line-through text-gray-500">
                  900,00 TL
                </h3>
                <h3 className="font-bold text-2xl">700,99 TL</h3>
              </div>
              <div className="h-96">
                <img src={img1} alt="converse" className="w-full h-64" />
                <h2 className="mt-1 font-medium text-xl truncate">
                  Converse Classic V1
                </h2>
                <p className="text-sm font-light text-gray-500">Klasik</p>
                {/* old price if exists */}
                <h3 className="h-8 mt-2 w-full font-bold text-xl line-through text-gray-500">
                  900,00 TL
                </h3>
                <h3 className="font-bold text-2xl">700,99 TL</h3>
              </div>
              <div className="h-96">
                <img src={img1} alt="converse" className="w-full h-64" />
                <h2 className="mt-1 font-medium text-xl truncate">
                  Converse Classic V1
                </h2>
                <p className="text-sm font-light text-gray-500">Klasik</p>
                {/* old price if exists */}
                <h3 className="h-8 mt-2 w-full font-bold text-xl line-through text-gray-500">
                  900,00 TL
                </h3>
                <h3 className="font-bold text-2xl">700,99 TL</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Kids;
