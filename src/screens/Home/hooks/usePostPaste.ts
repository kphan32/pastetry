import axios from "axios";
import { useEffect } from "react";

// When pasteContent changes and is truthy, post to paste API.
const usePostPaste = (pasteContent?: string) => {
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
          // TODO handle this error
          console.error(err);
        });
    }
  }, [pasteContent]);
};

export default usePostPaste;
