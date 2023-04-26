import styled from 'styled-components';
import { Card } from '../../components/Card/Card.styled';

export const MyCardPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  overflow: auto;
`;

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;

  & > button:not(:last-child) {
    margin-bottom: 50px;
  }
`;

export const CardRegisterMessage = styled.p`
  letter-spacing: 0.1em;
  margin: 10px 0;
`;

export const CardRegisterButton = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;

  color: black;

  margin-bottom: 50px;

  cursor: pointer;
`;

export const ButtonIcon = styled.div`
  font-size: 30px;

  opacity: 0.6;
`;
