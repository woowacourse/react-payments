import { FC } from 'react';
import { Link } from 'react-router-dom';
import BackIcon from '../../shared/Icon/BackIcon';
import { Header, PageContainer } from './styles';

interface Props {
  title: string;
  prevPagePath?: string;
}

const Template: FC<Props> = ({ children, title, prevPagePath }) => {
  return (
    <PageContainer>
      <Header>
        {prevPagePath && (
          <Link to={prevPagePath}>
            <BackIcon />
          </Link>
        )}
        <span>{title}</span>
      </Header>
      {children}
    </PageContainer>
  );
};

export default Template;
