import { Form } from './style';
import FormField from '../FormField/FormField';
import InputField from '../InputField/InputField';
import Input from '../Input/Input';

const CardInformationForm = () => {
  return (
    <Form>
      <FormField
        title="결제할 카드 번호를 입력해 주세요"
        caption="본인 명의의 카드만 결제 가능합니다."
      >
        <InputField label="카드 번호" error="">
          <>
            <Input placeholder="1234" />
            <Input placeholder="1234" />
            <Input placeholder="1234" />
            <Input placeholder="1234" />
          </>
        </InputField>
      </FormField>
      <FormField
        title="카드 유효기간을 입력해 주세요"
        caption="월/년도(MMYY)를 순서대로 입력해 주세요."
      >
        <InputField label="유효기간" error="">
          <>
            <Input placeholder="MM" />
            <Input placeholder="YY" />
          </>
        </InputField>
      </FormField>
      <FormField title="카드 소유자 이름을 입력해 주세요">
        <InputField label="소유자 이름" error="">
          <Input placeholder="SIMO" />
        </InputField>
      </FormField>
    </Form>
  );
};

export default CardInformationForm;
