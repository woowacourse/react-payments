import { FC } from 'react';
import AddCardButton from './AddCardButton';
import { CardListContainer } from './styles';

interface Props {
  children: React.ReactNode;
}

const CardList: FC<Props> = ({ children }) => {
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
