import styled from 'styled-components';

import { CardBox } from '../CardBox/CardBox.styled';

export const RegisterEntryBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;

  margin: 48px 0;
`;

export const GuideMessage = styled.p`
  letter-spacing: 0.1em;
  margin-bottom: 10px;
`;

export const Button = styled(CardBox)`
  display: flex;
  justify-content: center;
  align-items: center;

  color: black;
`;

export const ButtonIcon = styled.div`
  font-size: 30px;

  opacity: 0.6;
`;
