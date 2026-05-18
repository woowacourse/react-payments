import useCardForm from '../../hooks/useCardForm';
import Flex from '../Common/Flex';
import Input from '../Common/Input';
import Text from '../Common/Text';

interface CardExpiryDateInputProps {
  field: ReturnType<typeof useCardForm>['cardExpiryDate'];
}

function CardExpiryDateInput({ field }: CardExpiryDateInputProps) {
  return (
    <Flex direction="column" gap={10}>
      <Text.Label htmlFor="expiry-date">유효기간</Text.Label>
      <Flex gap={8}>
        <Input
          id="expiry-date"
          autoFocus
          inputMode="numeric"
          type="text"
          autoComplete="cc-exp-month"
          placeholder="MM"
          data-is-error={!!field.errors[0]}
          value={field.values[0]}
          {...field.register({ index: 0 })}
        />
        <Input
          type="text"
          inputMode="numeric"
          autoComplete="cc-exp-year"
          placeholder="YY"
          data-is-error={!!field.errors[1]}
          value={field.values[1]}
          {...field.register({ index: 1 })}
        />
      </Flex>
      {field.error && (
        <Text size="s" color="error" role="alert">
          {field.error}
        </Text>
      )}
    </Flex>
  );
}

export default CardExpiryDateInput;
