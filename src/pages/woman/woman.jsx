import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {
  IoFilterCircleOutline,
  IoFilterCircle,
  IoTerminal,
} from "react-icons/io5";
import { VscFilter, VscFilterFilled } from "react-icons/vsc";

import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../features/getProducts";
import Product from "../../components/product";

function Woman() {
  const dispatch = useDispatch();
  const { loading, productsData } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="Woman" className="dark:bg-bg1 dark:text-white">
      <Header />
      {/* Content */}
      <div>
        <h1 className="mt-10 text-center font-semibold text-xl">Kadın</h1>
        {/* listing area */}
        <div className="p-12">
          {/* filter order cart curt */}
          <div className="flex">
            <p className="flex-none">{productsData.length} ürün bulundu</p>
            <div className="flex-auto flex flex-row-reverse items-center gap-1">
              {/* Filter */}
              <Link to="/kadin">
                <VscFilter size={25} />
              </Link>
              {/* Order */}
              <Link to="/kadin">
                <IoFilterCircleOutline size={25} />
              </Link>
            </div>
          </div>
          {/* products container */}
          <div className="w-full mt-2">
            {/* products grid */}
            <div className="grid grid-cols-4 gap-4 ">
              {productsData.map((product) => (
                <Product info={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Woman;
