import InputLabels from '../common/InputLabels';

const CardNumbers = () => {
  return (
    <InputLabels
      title="결제할 카드 번호를 입력해 주세요"
      caption="본인 명의의 카드만 결제 가능합니다."
    />
  );
};
export default CardNumbers;
