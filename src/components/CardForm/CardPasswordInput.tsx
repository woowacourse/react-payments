import useCardForm from '../../hooks/useCardForm';
import Flex from '../Common/Flex';
import Input from '../Common/Input';
import Text from '../Common/Text';

interface CardPasswordInputProps {
  field: ReturnType<typeof useCardForm>['cardPassword'];
}

function CardPasswordInput({ field }: CardPasswordInputProps) {
  return (
    <Flex direction="column" gap={10}>
      <Text.Label htmlFor="password">비밀번호 앞 2자리</Text.Label>
      <Input
        id="password"
        autoFocus
        inputMode="numeric"
        type="password"
        placeholder="**"
        data-is-error={!!field.error}
        value={field.value}
        {...field.register()}
      />
      <Text size="s" color="error" role="alert">
        {field.error}
      </Text>
    </Flex>
  );
}

export default CardPasswordInput;
