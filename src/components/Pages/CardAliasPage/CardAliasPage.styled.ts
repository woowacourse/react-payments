import styled from 'styled-components';

import { CardInfoSubmitButton } from '../../CardInfoSubmitButtonContainer/CardInfoSubmitButtonContainer.styled';
import { COLOR } from '../../../constants/cardInfo';

export const CardAliasPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const CardAliasMessage = styled.h2`
  margin: 40% 0 8% 0;

  font-size: x-large;
  font-weight: 400;
`;

export const CardAliasInputBox = styled.div`
  margin: 24% 0 0 0;

  input {
    width: 240px;
    height: 40px;

    font-size: large;
    font-weight: 400;
    color: ${COLOR.BLACK};
    opacity: 1;
    border-bottom: solid 2px;
    border-radius: 0;
    background-color: transparent;

    &:focus {
      outline: none;
    }
  }
`;

export const CardAliasSubmitButton = styled(CardInfoSubmitButton)``;
