import styled from '@emotion/styled';
import { Flex } from '../../styles/mixins';

const Styled = {
  Container: styled.div`
    width: 100%;
    font-size: 16px;
    letter-spacing: -0.085em;
    color: ${(props) => props.theme.color.label};
    position: relative;
    margin-bottom: 1.5em;

    input {
      box-shadow: ${(props) => (props.isError ? '0 0 0 2px #ff0000 inset' : 'none')};
      box-sizing: border-box;
    }
  `,

  Header: styled.div`
    ${Flex({ justify: 'space-between' })};
    margin-bottom: 7px;
    font-size: 12px;
    white-space: nowrap;
  `,

  Row: styled.div`
    ${Flex({ items: 'center' })};
  `,
};

export default Styled;
