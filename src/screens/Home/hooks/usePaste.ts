import React, { useEffect, useState } from "react";

const usePaste = () => {
  const [pasteContent, setPasteContent] = useState<string>();

  // Some TS issues with the paste event.
  useEffect(() => {
    const pasteHandler = (event: React.ClipboardEvent) => {
      setPasteContent(event.clipboardData.getData("text"));
    };

    // @ts-ignore
    window.addEventListener("paste", pasteHandler);

    return () => {
      // @ts-ignore
      window.removeEventListener("paste", pasteHandler);
    };
  }, []);

  const triggerPaste = async () => {
    setPasteContent(await navigator.clipboard.readText());
  };

  return {
    pasteContent,
    triggerPaste,
  };
};

export default usePaste;
