import styled from 'styled-components';

const FlexStyled = styled.div(({ width }) => `
  display: flex;
  width: ${width || '100%'};
  background-color: var(--flex-background-color);
  border-radius: 0.25rem;
`);

export default FlexStyled;
