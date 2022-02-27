import Head from "next/head";
import Image from "next/image";
import imageAbout1 from "../assets/about_1.jpg";
import imageAbout2 from "../assets/about_2.jpg";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Art of Comfort • Sobre</title>
      </Head>
      <div className="p-5 xl:mx-36">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl font-bold">História</h2>
            <p className="mt-8 text-sm text-gray-600 leading-8">
              A Art of Comfort nasceu em 2012 como uma empresa dedicada à arte,
              nomeadamente à construção de todo o tipo de decoração e mobiliário
              possíveis de serem estufados como espelhos, camas, sofás, cadeiras
              e cadeirões, marcado pelo detalhe, rigor e toque requintado. Desde
              então, a marca continua a ser reconhecida por estas
              características únicas que a definem pois contratamos
              profissionais com mais de 25 anos de experiência na área. Os
              nossos profissionais dão o melhor de si pela sua felicidade.
            </p>
          </div>
          <Image
            className="w-full md:w-1/2"
            src={imageAbout1}
            alt="About History Image"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-16 mt-8">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <Image src={imageAbout2} alt="About Brand Image" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center order-1">
            <h2 className="text-4xl font-bold">Marca</h2>
            <p className="mt-8 text-sm text-gray-600 leading-8">
              A Art of Comfort é uma marca portuguesa em que a fabricação dos
              seus produtos são realizados no distrito do Porto. O que nos
              distingue é essencialmente:
            </p>
            <ul className="text-sm text-gray-600 leading-8 list-disc list-inside ml-4">
              <li>A qualidade-preço</li>
              <li>A qualidade-produto</li>
              <li>
                A personalização de produtos à sua medida- ao nível de medidas,
                materiais, design e cores
              </li>
              <li>Vasta oferta de paleta de cores, tecidos e texturas</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
