import { Link } from "react-router-dom";
import styled from "styled-components";
import addIcon from "../assets/images/addIcon.svg";

import PageHeader from "./PageHeader";
import PossessCardItems from "./PossessCardItems";
import Button from "./UIComponents/Button/Button";

const StyledPossessCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const StyledButtonWrapper = styled.div`
  width: 213px;
  height: 133px;

  background-color: #eee;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;

export default function PossessCard() {
  return (
    <>
      <PageHeader>보유 카드</PageHeader>
      <StyledPossessCardContainer>
        <PossessCardItems />
        <Link to="/add-card">
          <StyledButtonWrapper>
            <Button type={"button"} position={"static"} isSvg={true}>
              {addIcon}
            </Button>
          </StyledButtonWrapper>
        </Link>
      </StyledPossessCardContainer>
    </>
  );
}
