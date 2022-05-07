import React from "react";
import styled from "styled-components";
import { PAGE_NAME } from "../utils/constants";

const pageTitle = {
  CardList: "보유 카드",
  CardAdd: "카드 추가",
};

const StyledPageHeaderContainer = styled.header`
  display: flex;
  gap: 10px;

  padding: 8px 0;

  color: #383838;
`;

const PreviousButton = React.memo(styled.button`
  border: none;
  background-color: transparent;

  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;

    color: #00caa5;
    font-weight: 700;
  }
`);

const StyledPageTitle = React.memo(styled.h1`
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.085em;
`);

export default function PageHeader({ isSubmitted, page, moveToListPage }) {
  return (
    <StyledPageHeaderContainer>
      {!isSubmitted && (
        <>
          {page === PAGE_NAME.CARD_ADD && (
            <PreviousButton onClick={moveToListPage}>&lt;</PreviousButton>
          )}
          <StyledPageTitle>{pageTitle[page]}</StyledPageTitle>
        </>
      )}
    </StyledPageHeaderContainer>
  );
}
