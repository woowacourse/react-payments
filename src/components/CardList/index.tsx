import AddCardButton from '../AddCardButton';
import { CardListContainer } from './styles';

const CardList = ({ children }) => {
  return (
    <CardListContainer>
      {children}
      <li>
        <AddCardButton />
      </li>
    </CardListContainer>
  );
};

export default CardList;
