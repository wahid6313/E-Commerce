"use client";

// import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Product {
  _id: string;
  image: string;
  name: string;
  price: number;
}

const ProductList = () => {
  const products = ["'", "", "", "", ""];
  //   const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get("/api/fetch-products")
  //       .then((response) => setProducts(response.data.products));
  //   }, []);
  return (
    <div
      id="product"
      className="px-4 md:px-12 py-5 md:py-10 flex justify-center items-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map((Product, index) => (
          <Link href="/product/123" key={index}>
            <Image
              src="/dummy-img.jpg"
              alt="img"
              width={1000}
              height={1000}
              className="max-w-[17rem] h-72 object-cover object-center rounded-lg"
            />

            <div className="mt-4">
              <h2 className="font-semibold text-lg">A very good product</h2>
              <p className="font-medium text-sm mt-1">$ 120</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
