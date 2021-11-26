interface FullscreenProps {
  children: React.ReactNode;
}

const Fullscreen: React.FC<FullscreenProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {children}
    </div>
  );
};

export default Fullscreen;
