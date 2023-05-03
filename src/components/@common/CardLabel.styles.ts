import styled from 'styled-components';

export const Label = styled.label<{ color: string }>`
  color: ${(props) => props.color || '#000000'};
`;
