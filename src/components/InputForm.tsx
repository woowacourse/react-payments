import InputField from "./InputField";

export default function InputForm() {
  return (
    <>
      <InputField
        title="결제할 카드 번호를 입력해 주세요"
        subtitle="본인 명의의 카드만 결제 가능합니다."
        inputDesc="카드 번호"
        inputNumber={4}
        inputPlaceHolder="1234"
      />
      <InputField
        title="카드 유효기간을 입력해 주세요"
        subtitle="월/년도(MMYY)를 순서대로 입력해 주세요."
        inputDesc="유효기간"
        inputNumber={2}
        inputPlaceHolder="MM/YY"
      />
      <InputField
        title="카드 소유자 이름을 입력해 주세요"
        inputDesc="소유자 이름"
        inputNumber={1}
        inputPlaceHolder="JOHN DOE"
      />
    </>
  );
}
