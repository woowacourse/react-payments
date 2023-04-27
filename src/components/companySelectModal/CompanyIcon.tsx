import styled from "styled-components";

interface CompanyProps {
  companyName: string;
  imgSrc: string;
}

export const CompanyIcon = ({ companyName, imgSrc }: CompanyProps) => {
  return (
    <Wrapper>
      <CompanyImg src={imgSrc} alt={companyName} />
      <Name>{companyName}</Name>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  width: 60px;
  height: 62px;
  align-items: center;
  justify-content: space-between;
`;

const CompanyImg = styled.img`
  width: 37px;
  height: 37px;
`;

const Name = styled.div`
  font-size: 12px;
`;
