import React, { CSSProperties } from 'react';
import "Highlight.scss";
export declare type HighlightProps = {
    children: React.ReactNode;
    className?: string;
    language: string;
    style?: CSSProperties | undefined;
    showCopy?: boolean;
};
export default function Highlight(props: HighlightProps): JSX.Element;
