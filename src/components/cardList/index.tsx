import { FC } from 'react';
import AddCardButton from './AddCardButton';
import { CardListContainer } from './styles';

interface Props {
  children: React.ReactNode;
}

const CardList = ({ children }: Props) => {
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
