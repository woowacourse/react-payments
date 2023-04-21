import styled from "styled-components";

type CardCompanyIconProps = {
  children: React.ReactNode;
  company: string;
};

const CardCompanyIcon = ({ children, company }: CardCompanyIconProps) => {
  return (
    <Wrapper>
      <Icon>{children}</Icon>
      <span>{company}</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Icon = styled.div`
  width: 37px;
  height: 37px;

  border-radius: 100%;
  background-color: red;
`;

export default CardCompanyIcon;
