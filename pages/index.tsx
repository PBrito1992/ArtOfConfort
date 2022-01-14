import type { NextPage } from "next";
import homepageImage from "../assets/homepage.jpg";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="relative overflow-hidden">
      <h1 className="text-4xl xl:text-8xl text-white font-bold absolute top-8 left-8 z-10">
        Art of Confort
      </h1>
      <Image src={homepageImage} alt="homepage background image" priority />
    </div>
  );
};

export default Home;
