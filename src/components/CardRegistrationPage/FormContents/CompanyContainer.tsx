import styled from "styled-components";
import InputGroup from "../../common/InputGroup";
import { useCardItemValue, useErrorMessageValue } from "../../provider/CardItemProvider";

const CardCompany = () => {
  const { company } = useCardItemValue();
  const { companyErrorMessage } = useErrorMessageValue();

  return (
    <InputGroup labelValue={"카드사"} errorMessage={companyErrorMessage}>
      <CompanyContainer isError={!!companyErrorMessage}>
        <p>{company}</p>
        <ChangeButton type="button">{company ? "변경" : "카드사 선택"}</ChangeButton>
      </CompanyContainer>
    </InputGroup>
  );
};

const CompanyContainer = styled.div<{ isError: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  width: 100%;

  box-sizing: border-box;
  padding: 0 12px;

  border: 1px solid ${({ isError }) => (isError ? "#ec2f1b" : "#ecebf0")};
  border-radius: 7px;

  font-weight: 600;
  font-size: 18px;
`;

const ChangeButton = styled.button`
  background-color: #ecebf0;

  padding: 8px 10px;

  border: none;
  border-radius: 7px;

  cursor: pointer;
`;

export default CardCompany;
