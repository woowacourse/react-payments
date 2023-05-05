import styled from 'styled-components';

import { FormSubmitButton } from '../../FormSubmitButton/FormSubmitButton.styled';
import { COLOR } from '../../../constants/card';

export const NicknamePageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  padding: 0 0 5rem 0;

  width: 100%;
  height: 100%;
`;

export const Title = styled.h2`
  margin: 1rem 0 3rem 0;

  font-size: x-large;
  font-weight: 400;
`;

export const InputBox = styled.div`
  margin: 4rem 0 0 0;

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
