import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 100%;
`;

export const Select = styled.select`
  width: 100%;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.colors.input};
  color: ${(props) => props.theme.colors.input};
`;

export const Option = styled.option``;
