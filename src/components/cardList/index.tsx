import { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import AddCardButton from './AddCardButton';
import { CardListContainer } from './styles';

interface Props extends RouteComponentProps {
  children: React.ReactNode;
}

const CardList: FC<Props> = ({ children, history }) => {
  return (
    <CardListContainer>
      {children}
      <li className="card-item" onClick={() => history.push('/register')}>
        <AddCardButton />
      </li>
    </CardListContainer>
  );
};

export default withRouter(CardList);
