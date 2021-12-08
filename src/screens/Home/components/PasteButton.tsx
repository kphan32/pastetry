interface PasteButtonProps {
  onClick: () => void;
}

const PasteButton: React.FC<PasteButtonProps> = ({ onClick }) => {
  return (
    <div>
      <button
        className="mt-4 rounded-md bg-blue-500 hover:bg-blue-600 px-3 py- text-sm lg:mt-6 lg:text-lg lg:px-5 lg:py-2 transition-colors shadow-md"
        onClick={onClick}
      >
        <p className="text-white md:hidden">Create a Paste</p>
        <p className="text-white hidden md:block">or Click Here</p>
      </button>
    </div>
  );
};

export default PasteButton;
