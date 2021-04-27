import { FC } from 'react';
import styled from 'styled-components';
import BackIcon from '../Icon/BackIcon';

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
            <BackIcon />
          </a>
        )}
        <span className="title">{title}</span>
      </Header>
      {children}
    </div>
  );
};

export default Template;
