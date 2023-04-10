import * as React from 'react';

// Node component
export interface NodeProps {
  inline?: boolean;
  children: React.ReactNode;
  onRender?: () => void;
}

interface NodeContext {
  MathJax: any;
  input: string;
}

export class Node extends React.Component<NodeProps, {}, NodeContext> {
  private script: HTMLScriptElement | null;
}

// Text component
export interface TextProps {
  classes?: string;
  options?: any;
  text: string;
  onRender?: () => void;
}

interface TextContext {
  MathJax: any;
}

export class Text extends React.Component<TextProps, {}, TextContext> {}

// Context component
export interface ContextProps {
  children: React.ReactNode;
  didFinishTypeset?: () => void;
  script?: string | false;
  input?: 'ascii' | 'tex';
  delay?: number;
  options?: object;
  loading?: React.ReactNode;
  noGate?: boolean;
  onLoad?: () => void;
  onError?: (MathJax: any, message: any) => void;
}

interface ContextChildContext {
  MathJax: any;
  input: string;
}

export class Context extends React.Component<ContextProps, { loaded: boolean }, {}> {
  getChildContext(): ContextChildContext;
}

// Export all components together as default
declare const MathJax2: {
  Node: typeof Node;
  Context: typeof Context;
  Text: typeof Text;
};

declare module 'react-mathjax2' {
  export {
    Node,
    NodeProps,
    Text,
    TextProps,
    Context,
    ContextProps,
    MathJax2 as default,
  };
}
