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
  className?: string;
}

const Template: FC<Props> = ({ className, children, title, hasPreviousPage }) => {
  return (
    <div className={className}>
      <Header>
        {hasPreviousPage && (
          <a>
            <img src={process.env.PUBLIC_URL + '/buttons/back-btn.svg'} alt="뒤로가기" />
          </a>
        )}
        <span className="title">{title}</span>
      </Header>
      {children}
    </div>
  );
};

export default Template;
