import React, {
  useState,
  useReducer,
  useContext,
  useCallback,
  useEffect,
} from "react";

import styled from "styled-components";
import LiveEditor from "./liveEditor";
import Menu from "./menu";

const Layout = styled.div`
  height: 100vh;
  .header {
    padding: 20px;
    h1 {
      margin: 0px;
    }
    border-bottom: 1px #bbb solid;
  }
  .split {
    width: 100%;
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
  content: any;
  menu: {
    LinkComponent?: any;
    sections: any;
  };
}

const App: React.FC<Props> = ({ content, menu }) => {
  return (
    <Layout>
      <header className="header">
        <h1>CSS Traning</h1>
      </header>
      <div className="split">
        <div className="split-left">
          <Menu {...menu} />
        </div>
        <div className="split-right">{content}</div>
      </div>
    </Layout>
  );
};

export default App;
