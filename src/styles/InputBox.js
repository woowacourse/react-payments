import styled from 'styled-components';

export default styled.div`
  width: ${(props) => props.width || '100%'};
  display: flex;
  align-items: center;
  margin-top: 0.375rem;
  color: #d3d3d3;
  border-radius: 0.25rem;
  background-color: #ecebf1;
`;
