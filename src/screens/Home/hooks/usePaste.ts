import React, { useEffect, useState } from "react";

const usePaste = () => {
  const [pasteContent, setPaste] = useState<string>();

  // Some TS issues with the paste event.
  useEffect(() => {
    const pasteHandler = (event: React.ClipboardEvent) => {
      setPaste(event.clipboardData.getData("text"));
    };

    // @ts-ignore
    window.addEventListener("paste", pasteHandler);

    return () => {
      // @ts-ignore
      window.removeEventListener("paste", pasteHandler);
    };
  }, []);

  return {
    pasteContent,
  };
};

export default usePaste;
