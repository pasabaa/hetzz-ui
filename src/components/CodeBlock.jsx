import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { IoIosCopy, IoIosCheckmarkCircleOutline } from "react-icons/io";
import { stackoverflowDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CodeBlock = ({ code, language }) => {
  const [copied, setCopied] = useState(false);
  const notify = () => {
    copy();
  };

  const copy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3200);
  };

  return (
    <div className="relative">
      <button className="absolute flex items-center gap-1 right-0 m-2 px-4 p-2 bg-neutral-800/95 rounded-2xl">
        <CopyToClipboard text={code} onCopy={(copied) => notify()}>
          {copied ? (
            <IoIosCheckmarkCircleOutline className="text-sm text-green-500" />
          ) : (
            <IoIosCopy className="text-sm hover:text-white" />
          )}
        </CopyToClipboard>
      </button>
      <SyntaxHighlighter
        className="rounded-2xl mt-4"
        language={language}
        style={stackoverflowDark}
        wrapLines={true}
        wrapLongLines={true}
        showLineNumbers={false}
        showInlineLineNumbers={false}
      >
        {code}
      </SyntaxHighlighter>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        closeButton={false}
        limit={1}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  );
};
export default CodeBlock;
