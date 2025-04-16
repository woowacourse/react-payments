import { CardInputLayout } from '../CardInputLayout';
import { Flex } from '@/components/common/Flex';
import { Input } from '@/components/common/Input';

export const CVCForm = () => {
  return (
    <CardInputLayout headerText="CVC 번호를 입력해 주세요." label="CVC">
      <Flex>
        <Input maxLength={3} placeholder="CVC 번호" isValid={false} />;
      </Flex>
    </CardInputLayout>
  );
};
