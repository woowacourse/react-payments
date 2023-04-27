import styled from "styled-components";
import { CompanyIcon } from "./CompanyIcon";
import { CARD_COMPANIES } from "../../constant/cardCompany";

export const CompanySelectModal = () => {
  return (
    <>
      <BackDrop />
      <ModalContainer>
        <IconWrapper>
          {CARD_COMPANIES.map((company) => (
            <CompanyIcon
              key={company.name}
              companyName={company.name}
              imgSrc={company.imgSrc}
            />
          ))}
        </IconWrapper>
      </ModalContainer>
    </>
  );
};

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.35);
`;

const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  height: 33%;
  width: 100%;

  display: flex;
  align-items: center;

  border-radius: 5px 5px 0 0;
  background-color: white;
`;

const IconWrapper = styled.div`
  width: 80%;
  height: 80%;
  margin: 0 auto;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;
