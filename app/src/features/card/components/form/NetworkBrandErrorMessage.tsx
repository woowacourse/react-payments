import { useState } from "react";
import styled from "@emotion/styled";

export default function NetworkBrandErrorMessage({ message }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!message) return null;

  return (
    <Container>
      <Header type="button" onClick={() => setIsOpen((prev) => !prev)}>
        <LeftSection>
          <WarningBadge>!</WarningBadge>
          <MessageText>{message}</MessageText>
        </LeftSection>
        <Chevron isOpen={isOpen}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M2 3.5L5 6.5L8 3.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Chevron>
      </Header>
      <ContentWrapper isOpen={isOpen}>
        <BrandInfoList>
          <li>Visa: 4로 시작하는 16자리</li>
          <li>MasterCard: 51~55로 시작하는 16자리</li>
          <li>
            UnionPay: 아래 범위로 시작하는 16자리
            <BrandInfoSubList>
              <li>622126~622925</li>
              <li>624~626</li>
              <li>6282~6288</li>
            </BrandInfoSubList>
          </li>
          <li>Amex: 34 또는 37로 시작하는 15자리</li>
          <li>Diners: 300~305, 36, 38로 시작하는 14자리</li>
        </BrandInfoList>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 0.4rem;
  border: 1px solid #fca5a5;
  border-radius: 6px;
  background-color: #fff5f5;
  overflow: hidden;
`;

const Header = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 8px;
  background: none;
  border: none;
  cursor: pointer;
  gap: 6px;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const WarningBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: #c41616;
  color: #fff;
  font-size: 8px;
  font-weight: 700;
  flex-shrink: 0;
  line-height: 1;
`;

const MessageText = styled.span`
  color: #c41616;
  font-size: 10px;
  text-align: left;
`;

const Chevron = styled.span<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  color: #c41616;
  flex-shrink: 0;
  transform: rotate(${({ isOpen }) => (isOpen ? "180deg" : "0deg")});
  transition: transform 0.2s ease;
`;

const ContentWrapper = styled.div<{ isOpen: boolean }>`
  display: grid;
  grid-template-rows: ${({ isOpen }) => (isOpen ? "1fr" : "0fr")};
  transition: grid-template-rows 0.25s ease;
`;

const BrandInfoList = styled.ul`
  list-style: none;
  padding: 0 8px;
  margin: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 3px;

  &:not(:empty) {
    padding-bottom: 8px;
  }

  > li {
    color: #4a4a4a;
    font-size: 9px;
    padding-left: 8px;
    position: relative;

    &::before {
      content: "•";
      position: absolute;
      left: 0;
      color: #e22222;
      font-size: 7px;
      top: 1px;
    }
  }
`;

const BrandInfoSubList = styled.ul`
  list-style: none;
  padding: 2px 0 0 8px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;

  > li {
    color: #7a7a7a;
    font-size: 8.5px;
    padding-left: 8px;
    position: relative;

    &::before {
      content: "–";
      position: absolute;
      left: 0;
      color: #bbb;
    }
  }
`;
