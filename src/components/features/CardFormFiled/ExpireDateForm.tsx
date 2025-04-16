import { CardInputLayout } from '../CardInputLayout';
import { Flex } from '@/components/common/Flex';
import { Input } from '@/components/common/Input';
import { useCardInput } from '@/hooks/useCardInput';

export const ExpireDateForm = () => {
  return (
    <CardInputLayout
      headerText="카드 유효기간을 입력해 주세요."
      description="월/년도(MMYY)를 순서대로 입력해 주세요."
      label="유효기간"
    >
      {/* <Flex>
        {cardNumeber.map((number, index) => {
          <Input isValid={false} />;
        })}
      </Flex> */}
    </CardInputLayout>
  );
};
