import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as BackButtonIc } from "../../assets/backButtonIc.svg";

export function BackButton() {
  const navigate = useNavigate();

  function movePrevPage() {
    navigate(-1);
  }

  return <BackButtonIcon onClick={movePrevPage} />;
}

const BackButtonIcon = styled(BackButtonIc)`
  cursor: pointer;
`;
