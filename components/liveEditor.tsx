import React from "react";
import styled from "styled-components";
import CodeEditor, { useCodeEditor } from "./editor";

const Wrapper = styled.div`
  display: flex;
  margin: 60px 0px;

  * {
    box-sizing: border-box;
  }

  .left {
    width: 100%;
    margin-right: 20px;
  }

  .right {
    width: 100%;
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
    <div>
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
    </div>
  );
};

export default LiveEditor;
