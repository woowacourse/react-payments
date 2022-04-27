import styled from 'styled-components';

export default styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.085em;
  margin-bottom: ${(props) => props.marginBottom || '4px'}
  color: #525252;
`;
