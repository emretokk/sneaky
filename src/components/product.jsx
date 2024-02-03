import React, { useEffect } from "react";

import img1 from "../database/testImgs/converse1.jpg";
import img2 from "../database/testImgs/jordan1.jpg";

function Product(props) {
  return (
    <div className="h-96">
      <img
        src={require(`../database/imgs/${props.info.imgName}`)}
        alt="converse"
        className="w-full h-64"
        style={{
          objectFit: "contain",
        }}
      />
      <h2 className="mt-1 font-medium text-xl truncate">{props.info.title}</h2>
      <p className="h-5 w-full text-sm font-light text-gray-500">
        {props.info.category}
      </p>
      {/* old price if exists */}
      <h3 className="h-8 mt-2 w-full font-bold text-xl line-through text-gray-500">
        {props.info.oldPrice ? `${props.info.oldPrice} TL` : " "}
      </h3>
      <h3 className="font-bold text-2xl">{props.info.price} TL</h3>
    </div>
  );
}

export default Product;
