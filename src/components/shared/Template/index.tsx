import { Link } from 'react-router-dom';
import BackIcon from '../../shared/Icon/BackIcon';
import { Header, PageContainer } from './styles';

interface Props {
  children: React.ReactNode;
  title: string;
  prevPagePath?: string;
}

const Template = ({ children, title, prevPagePath }: Props) => {
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
