import Image from "next/image";
import measureIcon from "../../assets/measure.svg";
import productionIcon from "../../assets/production.svg";
import deliverIcon from "../../assets/deliver.svg";

const Highlights = () => (
  <div className="flex flex-col md:flex-row justify-evenly items-center p-8">
    <div className="flex flex-col items-center p-4">
      <div className="w-8 h-8">
        <Image src={measureIcon} />
      </div>
      <h2 className="text-gray-400 mt-2">À sua medida</h2>
      <h3 className="text-lg text-gray-900 font-semibold mt-1">
        Personalizável
      </h3>
      <span className="text-sm text-gray-800 mt-1">Medidas e materiais</span>
    </div>
    <div className="flex flex-col items-center p-4">
      <div className="w-8 h-8">
        <Image src={productionIcon} />
      </div>
      <h2 className="text-gray-400 mt-2">Produção própria</h2>
      <h3 className="text-lg text-gray-900 font-semibold mt-1">
        Garantia de qualidade
      </h3>
      <span className="text-sm text-gray-800 mt-1">
        Com os melhores materiais
      </span>
    </div>
    <div className="flex flex-col items-center p-4">
      <div className="w-8 h-8">
        <Image src={deliverIcon} />
      </div>
      <h2 className="text-gray-400 mt-2">Em Portugal Continental</h2>
      <h3 className="text-lg text-gray-900 font-semibold mt-1">
        Entrega e Montagem
      </h3>
      <span className="text-sm text-gray-800 mt-1">Equipa especializada</span>
    </div>
  </div>
);

export default Highlights;
