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
    padding: 10px;
    list-style: none;
    li {
      position: relative;
      height: 50px;
      :hover {
        background: #f4f4f4;
      }
      a {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        line-height: 30px;
        text-decoration: none;
        padding: 10px;
        color: #333;

        &.active {
          font-weight: bold;
          color: var(--theme-color);
        }
      }
    }
  }
`;

interface Item {
  title: string;
  path: string;
}

export interface Props {
  LinkComponent?: React.FC<{ item: Item }>;
  sections: {
    title: string;
    items: Item[];
  }[];
}

export type Section = Props["sections"][0];

const Menu: React.FC<Props> = ({ sections, LinkComponent }) => {
  return (
    <Wrapper>
      {sections.map((section: any, i: number) => (
        <div key={`section-${i}`}>
          <h3>section.title</h3>
          <ul>
            {section.items.map((item: Item, i: number) => (
              <li key={`page-${i}`}>{<LinkComponent item={item} />}</li>
            ))}
          </ul>
        </div>
      ))}
    </Wrapper>
  );
};

export default Menu;
