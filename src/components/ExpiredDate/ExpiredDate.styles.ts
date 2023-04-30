import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.color.grey100};
  border-radius: 7px;
  margin-bottom: 20px;
`;

export const Pargraph = styled.p`
  width: 16px;
`;
