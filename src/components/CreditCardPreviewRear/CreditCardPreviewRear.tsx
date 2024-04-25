import S from "./CreditCardPreviewRear.styled";

interface Props {
  CVC: string;
}
const CreditCardPreview = ({ CVC }: Props) => {
  return (
    <S.CreditCard>
      <div
        style={{
          display: "flex",
          justifyContent: "right",
          background: "#CBBA64",
          height: "24px",
          position: "relative",
          marginTop: "84px",
          width: "100%",
        }}
      >
        <S.Input type="text" value={CVC} readOnly></S.Input>
      </div>
    </S.CreditCard>
  );
};

export default CreditCardPreview;
