import React from "react";
import styled from "styled-components";
import Menu from "./menu";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  .header {
    padding: 20px;
    h1 {
      margin: 0px;
    }
    border-bottom: 1px #bbb solid;
    flex-shrink: 0;
  }

  .split {
    flex: auto;
    display: flex;
    &-left {
      width: 350px;
      border-right: 1px solid #bbb;
    }
    &-right {
      flex: auto;
    }
  }
`;

interface Props {
  content: any; // FIXME
  menu: {
    LinkComponent?: any; // FIXME
    sections: any;
  };
}

const ScrollWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;

  > div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
const Scroll: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ScrollWrapper>
    <div>{children}</div>
  </ScrollWrapper>
);

const Page: React.FC<Props> = ({ content, menu }) => {
  return (
    <Layout>
      <header className="header">
        <h1>CSS Traning</h1>
      </header>
      <div className="split">
        <div className="split-left">
          <Menu {...menu} />
        </div>
        <div className="split-right">
          <Scroll>{content}</Scroll>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
