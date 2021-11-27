interface ContainerProps {
  children: React.ReactNode;
}
const Centered: React.FC<ContainerProps> = ({ children }) => {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-24 text-center">
      {children}
    </main>
  );
};

const Greeting = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold">
        Welcome to <p className="text-blue-600">Pastetry</p>
      </h1>
    </div>
  );
};

const Home = () => {
  return (
    <Centered>
      <Greeting />

      <p className="mt-8 text-2xl">
        Create a paste by hitting{" "}
        <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
          CTRL + V
        </code>
      </p>
    </Centered>
  );
};

export default Home;
