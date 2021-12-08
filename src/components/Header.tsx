import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

const Title = () => {
  return <p className="font-bold text-2xl text-blue-600">Pastetry</p>;
};

const BackButton = () => {
  return (
    <Link href="/" passHref>
      <div className="rounded-md bg-gray-100 hover:bg-gray-200 hover:cursor-pointer px-4 py-2 shadow-sm transition-colors">
        <HiArrowLeft />
      </div>
    </Link>
  );
};

const Header = () => {
  return (
    <header className="flex items-center space-x-4 w-full h-12 border-b pl-4">
      <BackButton />
      <Title />
    </header>
  );
};

export default Header;
