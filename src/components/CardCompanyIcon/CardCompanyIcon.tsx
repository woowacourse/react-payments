import styled from "styled-components";

type CardCompanyIconProps = {
  children: React.ReactNode;
  company: string;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const CardCompanyIcon = ({ children, company, onClickHandler }: CardCompanyIconProps) => {
  return (
    <Wrapper onClick={onClickHandler}>
      {children}
      <span>{company}</span>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  border: none;
  background-color: transparent;

  cursor: pointer;
`;

export default CardCompanyIcon;
