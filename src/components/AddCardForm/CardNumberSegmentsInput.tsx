import useCardForm from '../../hooks/useCardForm';
import Flex from '../Common/Flex';
import Input from '../Common/Input';
import Text from '../Common/Text';

interface CardNumberSegmentsInputProps {
  field: ReturnType<typeof useCardForm>['cardNumberSegments'];
}

function CardNumberSegmentsInput({ field }: CardNumberSegmentsInputProps) {
  return (
    <Flex direction="column" gap={10}>
      <Text.Label htmlFor="cardnumber">카드 번호</Text.Label>
      <Flex gap={8}>
        {field.values.map((segment, segmentIndex) => (
          <Input
            key={segmentIndex}
            id={segmentIndex === 0 ? 'cardnumber' : undefined}
            autoFocus={segmentIndex === 0}
            type="text"
            inputMode="numeric"
            placeholder="1234"
            data-is-error={!!field.errors[segmentIndex]}
            value={segment}
            {...field.register({
              index: segmentIndex,
            })}
          />
        ))}
      </Flex>
      {field.error && (
        <Text size="s" color="error" role="alert">
          {field.error}
        </Text>
      )}
    </Flex>
  );
}

export default CardNumberSegmentsInput;
