import React from "react";

import Centered from "./components/Centered";
import Greeting from "./components/Greeting";
import Instructions from "./components/Instructions";
import PasteButton from "./components/PasteButton";

import usePaste from "./hooks/usePaste";
import usePostPaste from "./hooks/usePostPaste";

const Home = () => {
  const { pasteContent, triggerPaste } = usePaste();

  // Forward paste content to the API hook.
  usePostPaste(pasteContent);

  return (
    <Centered>
      <Greeting />
      <Instructions />
      <PasteButton onClick={triggerPaste} />
    </Centered>
  );
};

export default Home;
