import S from "./CreditCardPreviewRear.styled";

interface Props {
  CVC: string;
}
const CreditCardPreviewRear = ({ CVC }: Props) => {
  return (
    <S.CreditCard>
      <S.CVCInfo>
        <S.Input>{CVC}</S.Input>
      </S.CVCInfo>
    </S.CreditCard>
  );
};

export default CreditCardPreviewRear;
