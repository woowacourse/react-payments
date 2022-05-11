import styled from "styled-components";

const CVCWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ToolTipWrapper = styled.div`
  display: none;
`;

const QuestionWrapper = styled.div`
  &:hover ~ ${ToolTipWrapper} {
    display: block;
    padding: 5px;
    color: ${({ theme }) => theme.colors.MINT};
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.MINT};
  }
`;

export { CVCWrapper, QuestionWrapper, ToolTipWrapper };
