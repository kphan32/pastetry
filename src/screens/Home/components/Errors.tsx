interface ErrorsProps {
  errors: string[];
}

const Errors: React.FC<ErrorsProps> = ({ errors }) => {
  // TODO style
  return (
    <div className="absolute left-0 top-0">
      {errors.map((error, i) => {
        return (
          <div key={i}>
            <p>{error}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Errors;
