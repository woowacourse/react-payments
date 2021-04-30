import { FC } from 'react';
import styled from 'styled-components';
import BackIcon from '../../common/Icon/BackIcon';

const PageContainer = styled.div`
  padding: 1rem 1.125rem;
`;

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
    <PageContainer className={className}>
      <Header>
        {hasPreviousPage && (
          <a>
            <BackIcon />
          </a>
        )}
        <span className="title">{title}</span>
      </Header>
      {children}
    </PageContainer>
  );
};

export default Template;
