import React from "react";

import Centered from "./components/Centered";
import Greeting from "./components/Greeting";
import Instructions from "./components/Instructions";

import usePaste from "./hooks/usePaste";
import usePostPaste from "./hooks/usePostPaste";

const Home = () => {
  const { pasteContent } = usePaste();

  // Forward paste content to the API hook.
  usePostPaste(pasteContent);

  return (
    <Centered>
      <Greeting />
      <Instructions />
    </Centered>
  );
};

export default Home;
