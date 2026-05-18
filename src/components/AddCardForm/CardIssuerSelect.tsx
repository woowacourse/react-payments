import { CARD_ISSUER } from '../../constants';
import useCardForm from '../../hooks/useCardForm';
import Flex from '../Common/Flex';
import Select from '../Common/Select';
import Text from '../Common/Text';

interface CardIssuerSelectProps {
  field: ReturnType<typeof useCardForm>['cardIssuer'];
}

function CardIssuerSelect({ field }: CardIssuerSelectProps) {
  return (
    <Flex direction="column" gap={10}>
      <Select autoFocus data-is-error={!!field.error} value={field.value ?? ''} {...field.register()}>
        <Select.Option value="" disabled hidden>
          카드사를 선택해 주세요
        </Select.Option>
        {Object.entries(CARD_ISSUER).map(([, { issuerCode, label }]) => (
          <Select.Option key={issuerCode} value={issuerCode}>
            {label}
          </Select.Option>
        ))}
      </Select>
      {field.error && (
        <Text size="s" color="error" role="alert">
          {field.error}
        </Text>
      )}
    </Flex>
  );
}

export default CardIssuerSelect;
