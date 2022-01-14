import Image from "next/image";
import imageAbout1 from "../assets/about_1.jpg";
import imageAbout2 from "../assets/about_2.jpg";

const AboutPage = () => {
  return (
    <div className="p-5 xl:mx-36">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-bold">História</h2>
          <p className="mt-8 text-sm text-gray-600 leading-8">
            A Antarte nasceu em 2000, como uma empresa dedicada às antiguidades
            e à arte, nomeadamente ao restauro de peças antigas e à
            comercialização de peças de mobiliário marcadas por um estilo mais
            clássico. Estas duas áreas de intervenção determinaram, na época, a
            génese da designação da própria marca, cujo nome resultou da fusão
            de “antiguidade” com “arte”: Antarte.
          </p>
          <p className="mt-8 text-sm text-gray-600 leading-8">
            Desde então, a marca trilhou um percurso singular no setor do
            mobiliário e da decoração, onde encontrou um novo rumo, fruto das
            exigências do mercado e dos respetivos clientes, que procuravam
            produtos modernos com a qualidade Antarte. Desde então, a marca
            soube amadurecer e tornou-se numa insígnia com caráter, prestigiada
            e valorizada no mercado.
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
            A Antarte é uma marca portuguesa, líder em tendências de mobiliário
            e decoração em Portugal. Com uma rede de oito lojas em território
            nacional, a Antarte é reconhecida pelas suas linhas inovadoras,
            elegantes e adaptáveis aos mais variados tipos de espaço.
          </p>
          <p className="mt-8 text-sm text-gray-600 leading-8">
            Com fábrica própria, no norte de Portugal, a marca exporta os seus
            produtos para vários mercados internacionais, com lojas próprias em
            África do Sul, Angola, Ghana , Marrocos, São Tomé e Príncipe e mais
            recentemente na costa do Marfim decorrente da sua estratégia de
            expansão.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
