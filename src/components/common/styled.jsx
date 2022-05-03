import styled from "styled-components";

export const InputContainer = styled.div`
  margin: 16px 0;
`;

export const InputTitle = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 12px;
  line-height: 14px;

  margin-bottom: 4px;

  color: #525252;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "unset"};
  align-items: ${(props) => props.alignItems || "unset"};
  gap: ${(props) => props.gap || "unset"};
`;
