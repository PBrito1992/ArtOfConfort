import type { NextPage } from "next";
import homepageImage from "../assets/homepage.jpg";
import Image from "next/image";
import Highlights from "../components/highlights";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Art of Comfort</title>
        <meta
          name="description"
          content="Empresa dedicada à arte de construção de todo o tipo de decoração e mobiliário, marcada pelo detalhe, rigor e toque requintado. A empresa conta com uma vasta equipa de profissionais com mais de 25 anos de experiência na área."
        />
      </Head>
      <div className="relative overflow-hidden">
        <h1 className="text-4xl xl:text-8xl text-white font-bold absolute top-8 left-8 z-10">
          Art of Comfort
        </h1>
        <Image src={homepageImage} alt="homepage background image" priority />
        <Highlights />
      </div>
    </>
  );
};

export default Home;
