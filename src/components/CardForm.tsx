import styled from '@emotion/styled';
import { getCardNetwork } from '../utils';
import Flex from './Common/Flex';
import CardPreview from './CardPreview';
import { CARD_ISSUER } from '../constants';
import type { CardFormState } from '../types';
import useCardForm, { CARD_FORM_STEP } from '../hooks/useCardForm';
import Text from './Common/Text';
import Input from './Common/Input';
import Select from './Common/Select';
import Button from './Common/Button';

const Submit = styled(Button)`
  position: sticky;
  bottom: 0;
  border-radius: 0px;
  margin: 0 -32px;
`;

interface CardFormProps {
  onSubmit: (formData: CardFormState) => void;
}

function CardForm(props: CardFormProps) {
  const { step, ...form } = useCardForm();

  const handleFormAction = () => {
    props.onSubmit(form.formValue);
  };

  return (
    <form action={handleFormAction}>
      <CardPreview
        issuer={form.formValue.cardIssuer}
        network={getCardNetwork(form.formValue.cardNumberSegments)}
        numberSegments={form.formValue.cardNumberSegments}
        expiryDate={form.formValue.cardExpiryDate}
      />
      <Flex direction="column" gap={10}>
        {step >= CARD_FORM_STEP['CARD_PASSWORD'] && (
          <Flex direction="column" gap={10}>
            <Flex direction="column" gap={5}>
              <Text size="l" weight="bold">
                비밀번호를 입력해 주세요
              </Text>
              <Text size="xs" color="description">
                앞의 2자리를 입력해주세요
              </Text>
            </Flex>
            <Text.Label>비밀번호 앞 2자리</Text.Label>
            <Input
              autoFocus
              inputMode="numeric"
              type="password"
              placeholder="**"
              data-is-error={!!form.cardPassword.error}
              value={form.cardPassword.value}
              {...form.cardPassword.register()}
            />
            <Text size="s" color="error">
              {form.cardPassword.error}
            </Text>
          </Flex>
        )}
        {step >= CARD_FORM_STEP['CARD_VALIDATION_CODE'] && (
          <Flex direction="column" gap={10}>
            <Flex direction="column" gap={5}>
              <Text size="l" weight="bold">
                CVC 번호를 입력해 주세요
              </Text>
            </Flex>
            <Text.Label>CVC</Text.Label>
            <Input
              autoFocus
              inputMode="numeric"
              type="password"
              placeholder="CVC"
              data-is-error={!!form.cardValidationCode.error}
              value={form.cardValidationCode.value}
              {...form.cardValidationCode.register()}
            />
            <Text size="s" color="error">
              {form.cardValidationCode.error}
            </Text>
          </Flex>
        )}
        {step >= CARD_FORM_STEP['CARD_EXPIRY_DATE'] && (
          <Flex direction="column" gap={10}>
            <Flex direction="column" gap={5}>
              <Text size="l" weight="bold">
                카드 유효기간을 입력해 주세요
              </Text>
              <Text size="xs" color="description">
                월/년도(MMYY)를 순서대로 입력해 주세요.
              </Text>
            </Flex>
            <Text.Label>유효기간</Text.Label>
            <Flex gap={8}>
              <Input
                autoFocus
                inputMode="numeric"
                type="text"
                placeholder="MM"
                data-is-error={!!form.cardExpiryDate.errors[0]}
                value={form.cardExpiryDate.values[0]}
                {...form.cardExpiryDate.register({ index: 0 })}
              />
              <Input
                type="text"
                inputMode="numeric"
                placeholder="YY"
                data-is-error={!!form.cardExpiryDate.errors[1]}
                value={form.cardExpiryDate.values[1]}
                {...form.cardExpiryDate.register({ index: 1 })}
              />
            </Flex>
            <Text size="s" color="error">
              {form.cardExpiryDate.error}
            </Text>
          </Flex>
        )}
        {step >= CARD_FORM_STEP['CARD_ISSUER'] && (
          <Flex direction="column" gap={10}>
            <Flex direction="column" gap={5}>
              <Text size="l" weight="bold">
                카드사를 선택해 주세요
              </Text>
              <Text size="xs" color="description">
                현재 국내 카드사만 가능합니다.
              </Text>
            </Flex>
            <Select
              autoFocus
              data-is-error={!!form.cardIssuer.error}
              value={form.cardIssuer.value ?? ''}
              {...form.cardIssuer.register()}
            >
              <Select.Option value="" disabled hidden>
                카드사를 선택해 주세요
              </Select.Option>
              {Object.entries(CARD_ISSUER).map(([issuer, { label }]) => (
                <Select.Option key={issuer} value={issuer}>
                  {label}
                </Select.Option>
              ))}
            </Select>
            <Text size="s" color="error">
              {form.cardIssuer.error}
            </Text>
          </Flex>
        )}
        {step >= CARD_FORM_STEP['CARD_NUMBER'] && (
          <Flex direction="column" gap={10}>
            <Flex direction="column" gap={5}>
              <Text size="l" weight="bold">
                결제할 카드 번호를 입력해 주세요
              </Text>
              <Text size="xs" color="description">
                본인 명의의 카드만 결제 가능합니다.
              </Text>
            </Flex>
            <Text.Label>카드 번호</Text.Label>
            <Flex gap={8}>
              {form.cardNumberSegments.values.map((segment, segmentIndex) => (
                <Input
                  key={segmentIndex}
                  autoFocus={segmentIndex === 0}
                  type="text"
                  inputMode="numeric"
                  placeholder="1234"
                  data-is-error={!!form.cardNumberSegments.errors[segmentIndex]}
                  value={segment}
                  {...form.cardNumberSegments.register({ index: segmentIndex })}
                />
              ))}
            </Flex>
            <Text size="s" color="error">
              {form.cardNumberSegments.error}
            </Text>
          </Flex>
        )}
        {form.formStatus.isValid && <Submit type="submit">확인</Submit>}
      </Flex>
    </form>
  );
}

export default CardForm;
