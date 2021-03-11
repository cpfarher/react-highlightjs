import React, { CSSProperties } from 'react';
import highlight from 'highlight.js';

export type HighlightProps = {
  children: React.ReactNode,
  className: string,
  language: string, 
  style: CSSProperties | undefined
}
export default function Highlight (props: HighlightProps) {
  const { children, className, language, style } = props;
  const codeRef = React.useRef<any>();
  
  React.useEffect(()=>{
    highlight.highlightBlock(codeRef.current);
  },[])

  return (
      <pre
        className={className}
        style={style}
      >
        <code
          className={language}
          ref={codeRef}
        >
          {children}
        </code>
      </pre>
    )
}