import React, { CSSProperties } from 'react';
export declare type HighlightProps = {
    children: React.ReactNode;
    className?: string;
    language: string;
    style?: CSSProperties | undefined;
};
export default function Highlight(props: HighlightProps): JSX.Element;
