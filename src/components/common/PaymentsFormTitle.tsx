import * as T from '../style/PaymentsFormTitle.style';

const PaymentsFormTitle = ({ ...props }: PaymentsFormTitleProps) => {
  return (
    <T.TitleContainer>
      <T.Title>{props.title}</T.Title>
      <T.SubTitle>{props.subTitle}</T.SubTitle>
    </T.TitleContainer>
  );
};

export default PaymentsFormTitle;
