import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Prism from "prismjs";

// FIXME: 自動シンタックスハイライトつきエディター

const Wrapper = styled.div`
  .editor {
    position: relative;
    height: 300px;
    overflow-y: scroll;
    .title {
      width: 60px;
      height: 20px;
      position: absolute;
      top: -20px;
      left: 0;
      z-index: 4;
      line-height: 20px;
      text-align: center;
      background: white;
      color: var(--theme-color);
    }

    .sync {
      position: absolute;
      padding: 10px;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      font-size: 20px;
      font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
      white-space: pre-wrap;
      line-height: 1.5em;
      word-wrap: break-word;
    }

    textarea {
      resize: none;
      color: transparent;
      background: transparent;
      caret-color: red;
      border: none;
      outline: none;
      z-index: 1;
    }

    pre {
      pointer-events: none;
      overflow-y: auto;
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
      <div className="title">{language}</div>
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
