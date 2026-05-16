import useCardForm from '../../hooks/useCardForm';
import Flex from '../Common/Flex';
import Input from '../Common/Input';
import Text from '../Common/Text';

interface CardCVCInputProps {
  field: ReturnType<typeof useCardForm>['cardValidationCode'];
}

function CardCVCInput({ field }: CardCVCInputProps) {
  return (
    <Flex direction="column" gap={10}>
      <Text.Label htmlFor="cvc">CVC</Text.Label>
      <Input
        id="cvc"
        autoFocus
        inputMode="numeric"
        type="password"
        autoComplete="cc-csc"
        placeholder="CVC"
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

export default CardCVCInput;
