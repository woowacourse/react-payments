import styled from '@emotion/styled';
import useCardForm from '../hooks/useCardForm';
import { createDigitFieldValidations, getCardBrand, validateMonth, validateYear } from '../utils';
import Flex from './Common/Flex';
import CardPreview from './CardPreview';

const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;

const Description = styled.h3`
  font-size: 10px;
  color: var(--color-description);
  margin: 0;
`;

const Input = styled.input`
  width: 100%;
  font-size: 13px;
  border-radius: 2px;
  padding: 8px 6px;
  border: 1px solid var(--color-border);

  :focus {
    border-color: var(--color-black);
    outline: 0;
  }

  &[data-is-error='true'] {
    border-color: var(--color-error);
  }
`;

const ErrorMessage = styled.p`
  color: var(--color-error);
  font-size: 12px;
  line-height: 14px;
  min-height: 14px;
  margin: 0;
`;

function CardForm() {
  const { register, values, errors } = useCardForm({
    initialValues: {
      cardNumberSegments: ['', '', '', ''],
      expiryMonth: '',
      expiryYear: '',
      cvc: '',
    },
    validations: {
      cardNumberSegments: [
        [...createDigitFieldValidations(4)],
        [...createDigitFieldValidations(4)],
        [...createDigitFieldValidations(4)],
        [...createDigitFieldValidations(4)],
      ],
      expiryMonth: [
        ...createDigitFieldValidations(2),
        {
          type: 'onBlur',
          validator: validateMonth,
          message: '유효한 월을 입력해주세요. (01 ~ 12)',
        },
      ],
      expiryYear: [
        ...createDigitFieldValidations(2),
        {
          type: 'onBlur',
          validator: validateYear,
          message: '유효한 년도를 입력해주세요. (00 ~ 99)',
        },
      ],
      cvc: [...createDigitFieldValidations(3)],
    },
  });

  return (
    <form>
      <CardPreview
        cardBrand={getCardBrand(values.cardNumberSegments)}
        cardNumberSegments={values.cardNumberSegments}
        expiryMonth={values.expiryMonth}
        expiryYear={values.expiryYear}
      />
      <Flex direction="column" gap={10}>
        <Flex direction="column" gap={10}>
          <Flex direction="column" gap={5}>
            <Title>결제할 카드 번호를 입력해 주세요</Title>
            <Description>본인 명의의 카드만 결제 가능합니다.</Description>
          </Flex>
          <Flex gap={8}>
            <Input
              placeholder="1234"
              data-is-error={!!errors['cardNumberSegments'][0]}
              {...register('cardNumberSegments', { index: 0 })}
            />
            <Input
              placeholder="1234"
              data-is-error={!!errors['cardNumberSegments'][1]}
              {...register('cardNumberSegments', { index: 1 })}
            />
            <Input
              placeholder="1234"
              data-is-error={!!errors['cardNumberSegments'][2]}
              {...register('cardNumberSegments', { index: 2 })}
            />
            <Input
              placeholder="1234"
              data-is-error={!!errors['cardNumberSegments'][3]}
              {...register('cardNumberSegments', { index: 3 })}
            />
          </Flex>
          <ErrorMessage>{errors['cardNumberSegments'].find((el) => el !== null)}</ErrorMessage>
        </Flex>
        <Flex direction="column" gap={10}>
          <Flex direction="column" gap={5}>
            <Title>카드 유효기간을 입력해 주세요</Title>
            <Description>월/년도(MMYY)를 순서대로 입력해 주세요.</Description>
          </Flex>
          <Flex gap={8}>
            <Input placeholder="MM" {...register('expiryMonth')} />
            <Input placeholder="YY" {...register('expiryYear')} />
          </Flex>
          <ErrorMessage>{errors['expiryMonth'] || errors['expiryYear']}</ErrorMessage>
        </Flex>
        <Flex direction="column" gap={10}>
          <Flex direction="column" gap={5}>
            <Title>CVC 번호를 입력해 주세요</Title>
          </Flex>
          <Input placeholder="CVC" {...register('cvc')} />
          <ErrorMessage>{errors['cvc']}</ErrorMessage>
        </Flex>
      </Flex>
    </form>
  );
}

export default CardForm;
