import React, { CSSProperties, useState } from 'react';
import highlight from 'highlight.js';
import copy from 'copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import "Highlight.scss"

export type HighlightProps = {
  children: React.ReactNode;
  className?: string;
  language: string;
  style?: CSSProperties | undefined;
  showCopy?: boolean;
};

export default function Highlight (props: HighlightProps) {
  const {children, className, language, style, showCopy} = props;
  const codeRef = React.useRef<any>();
  const [copied, setCopied] = useState<boolean>(false);
  const [showCopyClipboard, setShowCopyClipboard] = useState<boolean>(false);

  React.useEffect(() => {
    highlight.highlightBlock(codeRef.current);
  }, [props.children]);

  function copyToClipboard() {
    setCopied(true);
    copy(codeRef.current.textContent);
  }

  return (
        <div
      className="highlight"
      onMouseOver={() => {
        setShowCopyClipboard(true);
      }}
      onMouseLeave={() => {
        setShowCopyClipboard(false);
        setCopied(false);
      }}
    >
      {showCopy && showCopyClipboard && (
        <div onClick={copyToClipboard} className="clipboard text-right">
          <FontAwesomeIcon size="1x" icon={faClipboard} title="Copy to clipboard" />{' '}
          {copied ? 'Copied!' : 'Copy'}
        </div>
      )}
      <pre className={className} style={style}>
        <code className={language} ref={codeRef}>
          {children}
        </code>
      </pre>
    </div>
    )
}