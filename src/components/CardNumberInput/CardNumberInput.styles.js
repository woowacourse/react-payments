import styled from '@emotion/styled';
import { Flex, MultipleInputContainer, MultipleInputHeader } from '../../styles/mixins';

const Styled = {
  Container: styled.div`
    ${MultipleInputContainer};
  `,

  Header: styled.div`
    ${MultipleInputHeader};
  `,

  InputContainer: styled.div`
    ${Flex({ items: 'center' })};

    & input {
      margin-right: 7px;
    }

    & input:last-child {
      margin: 0;
    }
  `,
};

export default Styled;
