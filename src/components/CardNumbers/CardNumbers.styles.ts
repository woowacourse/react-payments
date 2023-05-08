import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.color.grey100};
  border-radius: 7px;

  & > * {
    width: 100%;
  }
`;

export const Pargraph = styled.p`
  width: 32px;
`;

export const ErorMessage = styled.p`
  font: ${(props) => props.theme.font.body};
  color: #bf1a1a;
`;
