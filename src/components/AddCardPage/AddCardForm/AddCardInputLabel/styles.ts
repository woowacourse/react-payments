import styled from 'styled-components';

interface Props {
  width?: string;
}

export const AddCardInputLabelContainer = styled.label<Props>`
  display: block;
  margin-bottom: 1.5rem;
  ${({ width }) => width && `width: ${width};`}
`;

export const LabelText = styled.span`
  font-size: 0.875rem;
  display: block;
  margin-bottom: 0.5rem;
`;
