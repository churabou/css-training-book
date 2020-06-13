import React from "react";
import styled from "styled-components";
import CodeEditor, { useCodeEditor } from "./codeEditor";

const Wrapper = styled.div`
  display: flex;
  margin: 60px 0px;

  * {
    box-sizing: border-box;
  }

  .left {
    margin-right: 20px;
    flex: 1;
    width: 10px;
    word-wrap: break-word;
  }

  .right {
    flex: 1;
    background: white;
    iframe {
      border: none;
      width: 100%;
      height: 100%;
    }
  }
`;

const LiveEditor: React.FC<{
  html: string;
  css: string;
  commonCSS?: string;
}> = ({ html, css, commonCSS }) => {
  const htmlEditor = useCodeEditor({
    language: "html",
    content: html,
  });
  const cssEditor = useCodeEditor({
    language: "css",
    content: css,
  });

  return (
    <Wrapper>
      <div className="left">
        <CodeEditor {...htmlEditor} />
        <br></br>
        <CodeEditor {...cssEditor} />
      </div>
      <div className="right">
        <iframe
          srcDoc={`<html><style>${commonCSS}${cssEditor.content}</style><body>${htmlEditor.content}</body></html>`}
        />
      </div>
    </Wrapper>
  );
};

export default LiveEditor;
