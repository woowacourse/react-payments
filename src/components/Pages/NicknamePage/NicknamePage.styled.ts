import styled from 'styled-components';

import { FormSubmitButton } from '../../FormSubmitButton/FormSubmitButton.styled';
import { COLOR } from '../../../constants/card';

export const NicknamePageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  width: 100%;
  height: 100%;
`;

export const Title = styled.h2`
  margin: 40% 0 8% 0;

  font-size: x-large;
  font-weight: 400;
`;

export const InputBox = styled.div`
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

export const SubmitButton = styled(FormSubmitButton)``;
