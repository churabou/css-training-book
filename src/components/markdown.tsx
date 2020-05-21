import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const Wapper = styled.div`
  h1,
  h2,
  h3,
  h4 {
    color: var(--theme-color);
  }
`;

export default ({ content }: { content: string }) => (
  <Wapper>
    <ReactMarkdown source={content} />
  </Wapper>
);
