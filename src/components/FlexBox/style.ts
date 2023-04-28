import styled from 'styled-components';

type FlexBoxProps = {
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'center';
};

export const FlexBox = styled.div<FlexBoxProps>`
      display: flex;
      justify-content: ${(props) => props.justifyContent};
      align-items: ${(props) => props.alignItems};
  `;
export default {};
