import styled from 'styled-components';
import { Container } from 'components/style/InputContainer';

export const Styled = {
  OwnerNameInputWrapper: styled(Container)`
    width: 375px;
    margin-bottom: 16px;
    input {
      padding-left: 10px;
      width: 100%;
      height: 44px;
    }
    input:focus {
      background-color: var(--focus-input-color);
    }
    input.error {
      background-color: var(--error-input-color);
    }
  `,

  OwnerNameLabelContainer: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0);
  `,
};
