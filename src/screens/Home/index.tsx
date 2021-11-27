import axios from "axios";
import React, { useEffect, useRef } from "react";

import Centered from "./components/Centered";
import Greeting from "./components/Greeting";
import usePaste from "./hooks/usePaste";

const Home = () => {
  const { paste: pasteContent } = usePaste();

  // TODO move to separate function
  // When paste state changes, post to paste API.
  useEffect(() => {
    if (!!pasteContent) {
      axios({
        method: "POST",
        url: "/api/paste",
        data: {
          content: pasteContent,
        },
      })
        .then((res) => {
          window.location.href = res.data.redirect;
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [pasteContent]);

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
