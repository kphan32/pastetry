import axios from "axios";
import { useEffect, useState } from "react";

// When pasteContent changes and is truthy, post to paste API.
const usePostPaste = (pasteContent?: string) => {
  const [error, setError] = useState<string>(null);

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
          // TODO is this the best way to redirect?
          window.location.href = res.data.redirect;
        })
        .catch((err) => {
          setError(`Error creating paste: ${err.response.data}`);
        });
    }
  }, [pasteContent]);

  const clearError = () => {
    setError(null);
  };

  return {
    error,
    clearError,
  };
};

export default usePostPaste;
