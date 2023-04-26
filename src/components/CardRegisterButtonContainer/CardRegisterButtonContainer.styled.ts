import styled from 'styled-components';

import { Card } from '../Card/Card.styled';

export const CardRegisterButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;

  margin: 48px 0;
`;

export const CardRegisterMessage = styled.p`
  letter-spacing: 0.1em;
  margin-bottom: 10px;
`;

export const CardRegisterButton = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;

  color: black;
`;

export const ButtonIcon = styled.div`
  font-size: 30px;

  opacity: 0.6;
`;
