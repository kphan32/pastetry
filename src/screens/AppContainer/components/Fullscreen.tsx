interface FullscreenProps {
  children: React.ReactNode;
}

const Fullscreen: React.FC<FullscreenProps> = ({ children }) => {
  return <div className="min-h-screen flex">{children}</div>;
};

export default Fullscreen;
