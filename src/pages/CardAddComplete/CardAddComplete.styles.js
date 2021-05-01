import styled from '@emotion/styled';
import { Flex } from '../../styles/mixins';

const Styled = {
  Container: styled.div`
    padding: 0 28px;
    ${Flex({ direction: 'column', justify: 'center', items: 'stretch' })};

    height: 100%;
  `,

  Header: styled.h2`
    text-align: center;
    font-weight: normal;
    margin: 0;
    margin-bottom: 77px;
  `,

  InputContainer: styled.div`
    width: 80%;
    min-width: 200px;
    margin: 0 auto;
    margin-top: 33px;

    input {
      outline: none;
    }
  `,

  ButtonContainer: styled.div`
    ${Flex({ justify: 'flex-end', items: 'center' })};
    margin-top: 172px;
  `,
};

export default Styled;
