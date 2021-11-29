interface CenteredProps {
  children: React.ReactNode;
}

const Centered: React.FC<CenteredProps> = ({ children }) => {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
      {children}
    </main>
  );
};

export default Centered;
