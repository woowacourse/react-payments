import styled from 'styled-components';

type FlexBoxProps = {
  justifyContent: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
};

export const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
`;

export default {};
