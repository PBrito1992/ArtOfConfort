const ContactsPage = () => {
  return (
    <div className="h-full p-5 xl:mx-36">
      <h1 className="text-2xl xl:text-4xl text-center w-80 mx-auto uppercase border-t-2 xl:border-t-4 border-b-2 xl:border-b-4 border-black">
        Contactos
      </h1>
      <div className="h-full mt-16 flex flex-col xl:flex-row items-center">
        <div className="h-full w-full xl:w-1/2 order-2 xl:order-none mt-8 xl:mt-0 flex xl:flex-col justify-evenly xl:justify-start items-center">
          <div>
            <h3 className="text-center xl:text-left uppercase font-extrabold mb-2">
              Telefone
            </h3>
            <span className="text-sm text-gray-600">+351 912 456 789</span>
          </div>
          <div className="xl:mt-4">
            <h3 className="text-center xl:text-left uppercase font-extrabold mb-2">
              E-mail
            </h3>
            <span className="text-sm text-gray-600">email@email.com</span>
          </div>
        </div>
        <div className="h-full w-full xl:w-1/2 bg-gray-100 p-5 rounded">
          <h3 className="uppercase font-extrabold">
            Contactar a Art Of Confort
          </h3>
          <h4 className="text-sm text-gray-500 mt-1">
            Caso tenha alguma dúvida nós ajudamos
          </h4>
          <form className="flex flex-col mt-4 xl:w-2/3">
            <input
              placeholder="Nome"
              className="p-1 rounded placeholder:text-sm"
            />
            <input
              type="email"
              placeholder="Email"
              className="mt-2 p-1 rounded placeholder:text-sm"
            />
            <input
              placeholder="Assunto"
              className="mt-2 p-1 rounded placeholder:text-sm"
            />
            <textarea
              placeholder="Mensage"
              className="mt-2 p-1 rounded placeholder:text-sm"
            />
            <button className="mt-2 p-1 bg-white rounded hover:font-semibold">
              Submeter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
