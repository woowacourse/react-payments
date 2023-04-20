import styled from 'styled-components';

const Flex = styled.div<{
  width?: string;
  dir?: 'row' | 'column';
  justify?:
    | 'start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';

  align?: 'stretch' | 'center' | 'start' | 'end';
}>`
  display: flex;
  flex-direction: ${({ dir = 'row' }) => dir};

  justify-content: ${({ justify = 'start' }) => justify};
  align-items: ${({ align = 'stretch' }) => align};

  width: ${({ width = '100%' }) => width};
  overflow: scroll;
`;

export default Flex;
