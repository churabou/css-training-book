import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px;
  h3 {
    color: var(--theme-color);
    margin: 0px;
  }
  ul {
    margin: 0px;
    padding: 0px;
    list-style: none;
    li {
      padding: 10px 20px;
      :hover {
        background: #f4f4f4;
      }
    }
  }
`;

export interface Props {
  LinkComponent?: any;
  sections: {
    title: string;
    items: {
      title: string;
      path: string;
    }[];
  }[];
}

const Menu: React.FC<Props> = ({ sections, LinkComponent }) => {
  return (
    <Wrapper>
      {sections.map((section: any, i: number) => (
        <div key={`section-${i}`}>
          <h3>section.title</h3>
          <ul>
            {section.items.map((item: any, i: number) => (
              <li key={`page-${i}`}>{<LinkComponent item={item} />}</li>
            ))}
          </ul>
        </div>
      ))}
    </Wrapper>
  );
};

export default Menu;
