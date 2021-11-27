import React from "react";

import Centered from "./components/Centered";
import Greeting from "./components/Greeting";
import usePaste from "./hooks/usePaste";
import usePostPaste from "./hooks/usePostPaste";

const Home = () => {
  const { pasteContent } = usePaste();

  // Forward paste content to the API hook.
  usePostPaste(pasteContent);

  return (
    <Centered>
      <Greeting />

      <p className="mt-8 text-2xl">
        Create a paste by hitting{" "}
        <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
          CTRL + V
        </code>
      </p>
    </Centered>
  );
};

export default Home;
