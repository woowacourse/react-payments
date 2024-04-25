import S from "./CreditCardPreviewRear.styled";

interface Props {
  CVC: string;
}
const CreditCardPreview = ({ CVC }: Props) => {
  return (
    <S.CreditCard>
      <S.CVCInfo>
        <S.Input>{CVC}</S.Input>
      </S.CVCInfo>
    </S.CreditCard>
  );
};

export default CreditCardPreview;
