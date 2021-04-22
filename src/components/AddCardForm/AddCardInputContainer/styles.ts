import styled from 'styled-components';

interface Props {
  width?: string;
}

export const AddCardInputContainerLabel = styled.label<Props>`
  display: block;
  margin-bottom: 1.5rem;
  ${({ width }) => width && `width: ${width};`}

  .label-text {
    font-size: 0.875rem;
    display: block;
    margin-bottom: 0.5rem;
  }
`;
