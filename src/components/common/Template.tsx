import { title } from 'node:process';
import { FC } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    margin-right: 0.25rem;
  }
`;

interface Props {
  title: string;
  hasPreviousPage?: boolean;
}

const Template: FC<Props> = ({ children, title, hasPreviousPage }) => {
  return (
    <div>
      <Header>
        {hasPreviousPage && (
          <a>
            <img src="/buttons/back-btn.svg" alt="뒤로가기" />
          </a>
        )}
        <span className="title">{title}</span>
      </Header>
      {children}
    </div>
  );
};

export default Template;
