interface Props {
  errors: string[];
}

const Errors: React.FC<Props> = ({ errors }) => {
  // TODO style
  return (
    <div className="absolute left-0 top-0">
      {errors.map((error) => {
        return (
          <div>
            <p>{error}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Errors;
