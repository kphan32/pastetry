interface Props {
  children: React.ReactNode;
}

const Centered: React.FC<Props> = ({ children }) => {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
      {children}
    </main>
  );
};

export default Centered;
