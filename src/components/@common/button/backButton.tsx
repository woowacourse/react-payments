import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BackButtonIc } from "../../../assets";
import { PATH } from "../../../constants/path";

export function BackButton() {
  const navigate = useNavigate();

  function movePrevPage() {
    navigate(PATH.PREV);
  }

  return <BackButtonIcon onClick={movePrevPage} />;
}

const BackButtonIcon = styled(BackButtonIc)`
  cursor: pointer;
`;
