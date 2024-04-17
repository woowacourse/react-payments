import { Form } from './style';
import FormField from '../FormField/FormField';
import InputField from '../InputField/InputField';
import Input from '../Input/Input';

interface CardInformationFormProps {
  cardNumberState: {
    first?: number;
    second?: number;
    third?: number;
    fourth?: number;
  };
  handleCardNumbers: {
    setFirst: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    setSecond: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    setThird: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    setFourth: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  };
  expirationDateState: {
    month?: number;
    year?: number;
  };
  setExpirationDateState: {
    setMonth: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setYear: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
  userNameState?: string;
  setUserNameState: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CardInformationForm = ({
  cardNumberState,
  handleCardNumbers,
  expirationDateState,
  setExpirationDateState,
  userNameState,
  setUserNameState,
}: CardInformationFormProps) => {
  const { first, second, third, fourth } = cardNumberState;
  const { setFirst, setSecond, setThird, setFourth } = handleCardNumbers;
  const { month, year } = expirationDateState;
  const { setMonth, setYear } = setExpirationDateState;
  return (
    <Form>
      <FormField
        title="결제할 카드 번호를 입력해 주세요"
        caption="본인 명의의 카드만 결제 가능합니다."
      >
        <InputField label="카드 번호" error="">
          <>
            <Input placeholder="1234" value={first} onChange={setFirst} />
            <Input placeholder="1234" value={second} onChange={setSecond} />
            <Input placeholder="1234" value={third} onChange={setThird} />
            <Input placeholder="1234" value={fourth} onChange={setFourth} />
          </>
        </InputField>
      </FormField>
      <FormField
        title="카드 유효기간을 입력해 주세요"
        caption="월/년도(MMYY)를 순서대로 입력해 주세요."
      >
        <InputField label="유효기간" error="">
          <>
            <Input placeholder="MM" value={month} onChange={setMonth} />
            <Input placeholder="YY" value={year} onChange={setYear} />
          </>
        </InputField>
      </FormField>
      <FormField title="카드 소유자 이름을 입력해 주세요">
        <InputField label="소유자 이름" error="">
          <Input placeholder="SIMO" value={userNameState} onChange={setUserNameState} />
        </InputField>
      </FormField>
    </Form>
  );
};

export default CardInformationForm;
