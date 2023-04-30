import React from 'react';
import styled from 'styled-components';
import NameRegisterCard from '../../components/templates/NameRegisterCard';
import { Card } from '../../store/type';

interface AddCardAliasProps {
  card: Card;
}

const AddCardAlias: React.FC<AddCardAliasProps> = ({ card }) => {
  return (
    <StyledAddCardAlias>
      <NameRegisterCard card={card} />
    </StyledAddCardAlias>
  );
};

const StyledAddCardAlias = styled.section`
  margin-top: 130px;
`;

export default AddCardAlias;
