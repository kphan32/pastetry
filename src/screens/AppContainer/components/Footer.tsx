const Author = () => {
  return (
    <p className="text-xs md:text-md lg:text-lg">
      Made by{" "}
      <a
        href="https://github.com/kphan32/pastetry"
        className="text-blue-500 hover:underline"
      >
        Kavin Phan
      </a>
    </p>
  );
};

const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full h-10 border-t lg:h-12">
      <Author />
    </footer>
  );
};

export default Footer;
