import { TitleContainer, Title, SubTitle } from "./PaymentsFormTitle.styled";

const PaymentsFormTitle = ({ ...props }: PaymentsFormTitleProps) => {
  return (
    <TitleContainer>
      <Title>{props.title}</Title>
      <SubTitle>{props.subTitle}</SubTitle>
    </TitleContainer>
  );
};

export default PaymentsFormTitle;
