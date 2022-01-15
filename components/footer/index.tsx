const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="h-10 p-5 flex justify-center items-center text-xs bg-black text-white">
      &copy; {year} Art Of Comfort - Todos os Direitos Reservados.
    </footer>
  );
};

export default Footer;
