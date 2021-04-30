import { FC } from 'react';
import BackIcon from '../../common/Icon/BackIcon';
import { Header, PageContainer } from './styles';

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
