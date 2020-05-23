import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Prism from "prismjs";

// FIXME: 自動シンタックスハイライトつきエディター

const Wrapper = styled.div`
  height: 400px;
  background: black;
  overflow: scroll;
  .editor {
    position: relative;
    .sync {
      padding: 10px;
      margin: 0;
      font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
      white-space: pre-wrap;
      line-height: 1.5em;
      word-wrap: break-word;
      font-size: 16px;
    }

    textarea {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      resize: none;
      color: transparent;
      background: transparent;
      caret-color: red;
      border: none;
      outline: none;
    }

    pre {
      position: relative;
      pointer-events: none;
    }
  }
`;

export const useCodeEditor = ({
  language,
  content,
}: {
  language: string;
  content: string;
}) => {
  const [_content, setContent] = useState(content);
  useEffect(() => {
    Prism.highlightAll();
  }, [_content]);
  return {
    content: _content,
    setContent,
    language,
  };
};
const CodeEditor: React.FC<{
  language: string;
  content: string;
  setContent: (content: string) => void;
}> = ({ content, setContent, language }) => (
  <Wrapper>
    <div className="editor">
      <pre className="sync">
        <code className={`language-${language}`}>{content}</code>
      </pre>
      <textarea
        value={content}
        className="sync"
        onChange={(e: any) => setContent(e.target.value)}
      />
    </div>
  </Wrapper>
);
export default CodeEditor;
