import styled from '@emotion/styled';
import { Flex } from '../../styles/mixins';

const Styled = {
  Container: styled.div`
    ${Flex({ items: 'space-between', justify: 'center', flexWrap: 'wrap' })}
    border-radius: 7px;
    z-index: 999;

    & > button {
      border-width: 1px;
      border-style: solid;
      border-color: ${(props) => props.theme.borderColor.simple};
      margin: 2px;
    }
  `,
};

export default Styled;
