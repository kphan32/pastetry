import { useState } from "react";
import AutoFocusedInput from "./AutoFocusedInput";

const HiddenInput = () => {
  const [text, setText] = useState<string>("");

  return (
    <AutoFocusedInput
      className="opacity-0 w-0 h-0"
      currentValue={text}
      onChange={setText}
      onPaste={(paste) => alert(paste)}
    />
  );
};

export default HiddenInput;
