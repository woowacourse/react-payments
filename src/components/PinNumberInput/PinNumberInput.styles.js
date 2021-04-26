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

    & label {
      margin-right: 7px;
    }

    & label:last-child {
      margin: 0;
    }
  `,

  Label: styled.label`
    width: 39px;
  `,

  PasswordDot: styled.div`
    width: 5px;
    height: 5px;
    background-color: ${(props) => props.theme.color.normal};
    border-radius: 50%;
    margin: 0 24px 0 17px;
  `,
};

export default Styled;
