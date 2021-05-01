import { FC } from 'react';
import BackIcon from '../../shared/Icon/BackIcon';
import { Header, PageContainer } from './styles';

interface Props {
  title: string;
  hasPreviousPage?: boolean;
}

const Template: FC<Props> = ({ children, title, hasPreviousPage }) => {
  return (
    <PageContainer>
      <Header>
        {hasPreviousPage && (
          <a>
            <BackIcon />
          </a>
        )}
        <span>{title}</span>
      </Header>
      {children}
    </PageContainer>
  );
};

export default Template;
