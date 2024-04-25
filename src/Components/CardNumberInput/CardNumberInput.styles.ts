import styled from "@emotion/styled";

export const CardNumberInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  input {
    width: 60px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    text-align: center;
  }
`;

export const Dd = styled.div`
  display: flex;
  gap: 10px;
`;

export const Tooltip = styled.div`
  color: #ff0000;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
`;
