import Image from "next/image";
import { FC } from "react";

type ProductItemType = {
  imageSrc: string;
  imageAlt: string;
  description: string;
};

const ProductItem: FC<ProductItemType> = ({
  imageSrc,
  imageAlt,
  description,
}) => (
  <div className="w-full flex flex-col items-center cursor-pointer">
    <div className="w-full">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={100}
        height={100}
        layout="responsive"
        priority
      />
    </div>
    <p className="mt-3 text-center text-xs font-semibold uppercase">
      {description}
    </p>
  </div>
);

export default ProductItem;
