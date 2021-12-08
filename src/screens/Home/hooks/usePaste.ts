import { useEffect, useState } from "react";

const usePaste = () => {
  const [pasteContent, setPasteContent] = useState<string>();

  useEffect(() => {
    const pasteHandler = (event: ClipboardEvent) => {
      setPasteContent(event.clipboardData.getData("text"));
    };

    window.addEventListener("paste", pasteHandler);

    return () => {
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
