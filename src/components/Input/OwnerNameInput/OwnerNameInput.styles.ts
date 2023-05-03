import styled from 'styled-components';
import { Container } from 'components/style/InputContainer';

export const Styled = {
  OwnerNameInputWrapper: styled(Container)`
    width: 318px;
    margin-bottom: 16px;
  `,

  OwnerNameLabelContainer: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0);
  `,
};
