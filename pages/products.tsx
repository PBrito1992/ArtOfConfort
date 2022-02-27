import Head from "next/head";
import ProductsList from "../components/products/productsList";

const ProductsPage = () => {
  return (
    <>
      <Head>
        <title>Art of Comfort • Produtos</title>
      </Head>
      <div className="p-5">
        <ProductsList />
      </div>
    </>
  );
};

export default ProductsPage;
