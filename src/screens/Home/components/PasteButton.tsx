interface Props {
  onClick: () => void;
}

const PasteButton: React.FC<Props> = ({ onClick }) => {
  return (
    <div>
      <button
        className="mt-2 rounded-md bg-blue-500 hover:bg-blue-600 px-3 py-2 text-white text-sm lg:mt-4 lg:text-lg lg:px-5 lg:py-2"
        onClick={onClick}
      >
        <p className="lg:hidden">Create a Paste</p>
        <p className="hidden lg:block">or Click Here</p>
      </button>
    </div>
  );
};

export default PasteButton;
