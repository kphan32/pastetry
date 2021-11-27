const Author = () => {
  return (
    <p className="text-xs pr-2 md:text-md lg:text-lg">
      Made by{" "}
      <a
        href="https://github.com/kphan32"
        className="text-blue-500 hover:underline"
      >
        Kavin Phan
      </a>
    </p>
  );
};

const MadeByVercel = () => {
  return (
    <a
      className="pl-2"
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/vercel.svg" alt="Vercel Logo" className="h-3 lg:h-4" />
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full h-10 border-t divide-x divide-gray-300 lg:h-12">
      <Author />
      <MadeByVercel />
    </footer>
  );
};

export default Footer;
