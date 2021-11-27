import React, { useEffect, useRef } from "react";

import Centered from "./components/Centered";
import Greeting from "./components/Greeting";
import HiddenInput from "./components/HiddenInput";

const Home = () => {
  return (
    <Centered>
      <Greeting />

      <p className="mt-8 text-2xl">
        Create a paste by hitting{" "}
        <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
          CTRL + V
        </code>
      </p>

      <HiddenInput />
    </Centered>
  );
};

export default Home;
