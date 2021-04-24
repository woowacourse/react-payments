import { FC } from 'react';
import AddCardButton from './AddCardButton';
import { CardListContainer } from './styles';

const CardList: FC = ({ children }) => {
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
