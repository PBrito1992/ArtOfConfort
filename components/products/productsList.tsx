import { useState } from "react";
import ProductItem from "./productItem";

const importAll = (r: any) => r.keys().map(r);

const images: { default: { src: string } }[] = importAll(
  require.context("../../assets/products", false, /\.(png|jpe?g|svg)$/)
);

const ProductsList = () => {
  const [colsNumber, setColsNumber] = useState(3);

  let gridClass = "grid-cols-1 md:grid-cols-2";
  gridClass += colsNumber === 3 ? " xl:grid-cols-3" : " xl:grid-cols-4";

  return (
    <>
      <div className="h-8 flex justify-end items-center gap-8">
        <span className="text-sm text-gray-600">
          <strong>{images.length}</strong> Artigos Encontrados
        </span>
        <div className="h-full hidden xl:flex gap-2">
          <div
            className={`h-full flex items-center gap-1 cursor-pointer ${
              colsNumber === 3 ? "" : "opacity-20"
            }`}
            onClick={() => setColsNumber(3)}
          >
            <div className="w-1 h-full bg-black"></div>
            <div className="w-1 h-full bg-black"></div>
            <div className="w-1 h-full bg-black"></div>
          </div>
          <div
            className={`h-full flex items-center gap-1 cursor-pointer ${
              colsNumber === 3 ? "opacity-20" : ""
            }`}
            onClick={() => setColsNumber(4)}
          >
            <div className="w-1 h-full bg-black"></div>
            <div className="w-1 h-full bg-black"></div>
            <div className="w-1 h-full bg-black"></div>
            <div className="w-1 h-full bg-black"></div>
          </div>
        </div>
      </div>
      <div className={`grid gap-5 mt-5 ${gridClass}`}>
        {images.map((image, index) => (
          <ProductItem
            key={image.default.src}
            imageSrc={image.default.src}
            imageAlt={`Product Image ${index}`}
            description="Product Image"
          />
        ))}
      </div>
    </>
  );
};
export default ProductsList;
