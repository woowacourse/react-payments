import styled from "styled-components";

const InputBox = styled.div`
  display: flex;
  height: 45px;
  align-items: center;
  margin-top: 0.375rem;
  color: #d3d3d3;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.colors.input};

  ${({ formType }) => {
    switch (formType) {
      case "expire-date":
        return "width: 137px";
      case "security-code":
        return "width: 84px";
      case "card-password":
        return "width:43px";
      default:
        return "width:318px";
    }
  }}
`;

export default InputBox;
