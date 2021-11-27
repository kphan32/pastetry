import React, { useEffect, useRef } from "react";

interface Props {
  className?: string | null;
  currentValue: string;
  onChange: (string) => void;
  onPaste: (string) => void;
}

const AutoFocusedInput: React.FC<Props> = ({
  className,
  currentValue,
  onChange,
  onPaste,
}) => {
  // Capture input element to focus.
  const inputElement = useRef(null);

  // Focus the referenced element when valid.
  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, [inputElement]);

  // Propagate onChange events.
  const onChangeEvent = (event: React.FormEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value);
  };

  // Propagate onPaste events.
  const onPasteEvent = (event: React.ClipboardEvent<HTMLInputElement>) => {
    onPaste(event.clipboardData.getData("Text"));
  };

  return (
    <input
      type="text"
      ref={inputElement}
      className={className}
      value={currentValue}
      onChange={onChangeEvent}
      onPaste={onPasteEvent}
    />
  );
};

export default AutoFocusedInput;
