import { FC } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const TemplateContainer = styled.div`
  padding: 1rem 1.125rem;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 600;

  a {
    display: flex;
    align-items: center;
    margin-right: 0.25rem;
    cursor: pointer;
  }
`;

interface Props {
  children: React.ReactNode;
  title?: string;
  hasPreviousPage?: boolean;
  className?: string;
}

const Template: FC<Props> = ({ className, children, title, hasPreviousPage }) => {
  const history = useHistory();

  return (
    <TemplateContainer className={className}>
      <Header>
        {hasPreviousPage && (
          <a onClick={history.goBack}>
            <img src={process.env.PUBLIC_URL + '/buttons/back-btn.svg'} alt="뒤로가기" />
          </a>
        )}
        <span className="title">{title}</span>
      </Header>
      {children}
    </TemplateContainer>
  );
};

export default Template;
