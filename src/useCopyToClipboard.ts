import { useState } from "react";
import copy from "copy-to-clipboard";

export interface Options {
  debug?: boolean;
  message?: string;
}

export default function useCopyToClipboard(): [
  (text: string, options?: Options | undefined) => void,
  { value: string; success: boolean },
] {
  const [value, setValue] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const copyToClipboard = (text: string, options?: Options) => {
    const result = copy(text, options);
    if (result) setValue(text);
    setSuccess(result);
  };

  return [copyToClipboard, { value, success }];
}
