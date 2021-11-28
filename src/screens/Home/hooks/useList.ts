import { useState } from "react";

// TODO provide types
const useList = (defaultValue = []) => {
  const [elements, setElements] = useState(defaultValue);

  const addElement = (element) => {
    setElements([element, ...elements]);
  };

  return {
    elements,
    addElement,
  };
};

export default useList;
