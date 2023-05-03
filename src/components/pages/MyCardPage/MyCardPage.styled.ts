import styled from 'styled-components';
import { Card } from '../../Card/Card.styled';

export const MyCardPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const CardRegisterMessage = styled.p`
  letter-spacing: 0.1em;
  margin: 10px 0;
`;

export const CardRegisterButton = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #e5e5e5;
  color: black;

  margin-bottom: 50px;

  cursor: pointer;
`;

export const ButtonIcon = styled.div`
  font-size: 30px;

  opacity: 0.6;
`;

export const Nickname = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 600;

  margin-top: 20px;
  margin-bottom: 40px;
`;
