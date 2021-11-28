import React, { useEffect } from "react";

import Centered from "./components/Centered";
import Errors from "./components/Errors";
import Greeting from "./components/Greeting";
import Instructions from "./components/Instructions";
import PasteButton from "./components/PasteButton";
import useList from "./hooks/useList";

import usePaste from "./hooks/usePaste";
import usePostPaste from "./hooks/usePostPaste";

const Home = () => {
  // Capture user clipboard data.
  const { pasteContent, triggerPaste } = usePaste();

  // Forward clipboard data to paste API.
  // This hook returns errors that we'll use below.
  const { error, clearError } = usePostPaste(pasteContent);

  // Create a list of errors.
  const { elements: errors, addElement: addError } = useList();

  // Forward paste API errors to list of errors.
  useEffect(() => {
    addError(error);
    clearError();
  }, [error]);

  return (
    <Centered>
      <Greeting />
      <Instructions />
      <PasteButton onClick={triggerPaste} />
      <Errors errors={errors} />
    </Centered>
  );
};

export default Home;
