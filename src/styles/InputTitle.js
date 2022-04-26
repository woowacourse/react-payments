import styled from 'styled-components';

export default styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: ${(props) => props.marginBottom || '4px'}
  color: #525252;
`;
