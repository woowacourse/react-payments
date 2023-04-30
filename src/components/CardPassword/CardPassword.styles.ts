import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.color.grey100};
  border-radius: 7px;
  margin-bottom: 20px;
`;

export const PasswordInputWrapper = styled.div`
  display: flex;
  align-items: baseline;

  > * {
    width: 45px;
    margin-right: 8px;
  }
`;

export const Pargraph = styled.p`
  width: 45px;
  text-align: center;
`;
