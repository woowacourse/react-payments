import React from 'react';
import styled from 'styled-components';
import NameRegisterCard from '../../components/templates/NameRegisterCard';

const AddCardAlias: React.FC = () => {
  return (
    <StyledAddCardAlias>
      <NameRegisterCard />
    </StyledAddCardAlias>
  );
};

const StyledAddCardAlias = styled.section`
  margin-top: 130px;
`;

export default AddCardAlias;
