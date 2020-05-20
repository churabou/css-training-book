import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Prism from "prismjs";

// FIXME: 自動シンタックスハイライトつきエディター

const Wrapper = styled.div`
  .editor {
    position: relative;
    height: 300px;
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

    textarea {
      position: absolute;
      padding: 10px;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      resize: none;

      caret-color: red;
    }

    pre {
      position: absolute;
      padding: 10px;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0px;
      z-index: 3;
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
      <div className="title">{language}</div>
      <pre>
        <code className={`language-${language}`}>{content}</code>
      </pre>
      <textarea
        value={content}
        onChange={(e: any) => setContent(e.target.value)}
      />
    </div>
  </Wrapper>
);

export default CodeEditor;
