import { FC } from 'react';
import { useHistory } from 'react-router';
import AddCardButton from './AddCardButton';
import { CardListContainer } from './styles';

interface Props {
  children: React.ReactNode;
}

const CardList: FC<Props> = ({ children }) => {
  const history = useHistory();

  return (
    <CardListContainer>
      {children}
      <li className="card-item" onClick={() => history.push('/register')}>
        <AddCardButton />
      </li>
    </CardListContainer>
  );
};

export default CardList;
