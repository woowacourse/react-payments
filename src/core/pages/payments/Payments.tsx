import { CreditCard } from '../../components/creditCard';
import { FormGroup } from '../../components/formGroup';
import { Input } from '../../components/input';

export const Payments = () => {
  return (
    <>
      <CreditCard bank="default" cardBrand="mastercard" cardNumberList={[]} expirationDate={[]} />
      <FormGroup
        title="결제할 카드 번호를 입력해 주세요"
        subTitle="본인 명의의 카드만 결제 가능합니다."
        label="카드 번호"
        errorMessage="errorMessage"
      >
        <Input />
        <Input />
        <Input />
        <Input />
      </FormGroup>
      <FormGroup
        title="카드 유효기간을 입력해 주세요"
        subTitle="월/년도(MMYY)를 순서대로 입력해 주세요"
        label="유효기간"
        errorMessage="errorMessage"
      >
        <Input />
        <Input />
      </FormGroup>
      <FormGroup title="CVC 번호를 입력해 주세요" label="CVC" errorMessage="errorMessage">
        <Input />
      </FormGroup>
    </>
  );
};
