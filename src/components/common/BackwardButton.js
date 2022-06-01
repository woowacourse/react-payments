import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const BackwardButton = () => {
  const navigate = useNavigate();

  return (
    <StyleBackwardButton
      onClick={() => {
        navigate(-1);
      }}
    />
  );
};

const StyleBackwardButton = styled.span`
  width: 8px;
  height: 8px;
  border: 1px;
  border-style: none none solid solid;
  transform: rotate(45deg);
  cursor: pointer;
`;
