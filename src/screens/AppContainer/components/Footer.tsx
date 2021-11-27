const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t divide-x divide-black">
      <p className="px-2">
        Made by{" "}
        <a
          href="https://github.com/kphan32"
          className="text-blue-500 hover:underline"
        >
          Kavin Phan
        </a>
      </p>
      <a
        className="flex items-center justify-center px-2"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
      </a>
    </footer>
  );
};

export default Footer;
