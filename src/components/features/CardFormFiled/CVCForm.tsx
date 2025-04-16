import { CardInputLayout } from '../CardInputLayout';
import { Flex } from '@/components/common/Flex';
import { Input } from '@/components/common/Input';
import { useCardInput } from '@/hooks/useCardInput';

export const CVCForm = () => {
  const { value: cvcNumber, handleChange, handleBlur } = useCardInput(1);

  return (
    <CardInputLayout headerText="CVC 번호를 입력해 주세요." label="CVC">
      <Flex width="100%">
        {cvcNumber.map((cvc, index) => (
          <Input
            key={`cvc-${index}`}
            value={cvc.value}
            maxLength={3}
            placeholder="CVC 번호"
            isValid={cvc.isValid}
            onChange={(e) => handleChange(0, e)}
            onBlur={(e) => handleBlur(0, e)}
          />
        ))}
      </Flex>
    </CardInputLayout>
  );
};
