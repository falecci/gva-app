import { useState } from 'react';
import copy from 'copy-to-clipboard';

type UseCopyToClipboardHook = {
  isCopied: boolean;
  copyText: (text: string) => void;
};

const useCopyToClipboard = (): UseCopyToClipboardHook => {
  const [isCopied, setIsCopied] = useState(false);

  const copyText = (text: string): void => {
    copy(text);
    setIsCopied(true);
  };

  return { isCopied, copyText };
};

export default useCopyToClipboard;
