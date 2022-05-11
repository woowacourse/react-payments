import styled from 'styled-components';

const MarginBottomWrapperStyled = styled.div(({ marginBottom }) => `
  margin-bottom: ${marginBottom || '4px'};
`);

export default MarginBottomWrapperStyled;
