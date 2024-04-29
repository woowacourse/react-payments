import {
  PAYMENTS_INPUT_MESSAGE,
  PAYMENTS_MESSAGE,
} from '../../../constants/message';

import { BOUND } from '../../../constants/number';
import FormItem from '../../FormItem';
import SectionTitle from '../../SectionTitle';
import TextInput from '../../TextInput';
import TextInputContainer from '../../InputContainer';
import { UseCardNumbers } from '../../../hooks/payments/useCardNumbers';
import useHTMLRefs from '../../../hooks/useRefs';
import { useState } from 'react';

interface props {
  useCardNumbers: UseCardNumbers;
}
export default function CardNumbers({ useCardNumbers }: props) {
  const refs = useHTMLRefs<HTMLInputElement>(4);
  const [nowFocusIdx, setNowFocusIdx] = useState(0);

  const numberElements = useCardNumbers.cardNumberOnChanges.map(
    (onChange, idx) => (
      <TextInput
        key={idx}
        type={idx < 2 ? 'text' : 'password'}
        placeholder={PAYMENTS_INPUT_MESSAGE.cardNumberPlaceHolder}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onChange(event);
          setNowFocusIdx(idx);
        }}
        borderColor={
          !useCardNumbers.wasNumbersChanged[idx] ||
          useCardNumbers.isValidNumberParts[idx]
            ? undefined
            : 'error'
        }
        aria-invalid={
          !(
            !useCardNumbers.wasNumbersChanged[idx] ||
            useCardNumbers.isValidNumberParts[idx]
          )
        }
        maxLength={BOUND.cardNumbersOnePartUpper}
        ref={refs[idx]}
        autoFocus={idx === 0}
        tabIndex={idx + 1}
      />
    )
  );

  if (useCardNumbers.isValidNumberParts[nowFocusIdx])
    setNowFocusIdx(nowFocusIdx + 1);
  if (nowFocusIdx < refs.length) refs[nowFocusIdx].current?.focus();
  return (
    <section>
      <SectionTitle
        title={PAYMENTS_MESSAGE.cardNumbersTitle}
        description={PAYMENTS_MESSAGE.cardNumberDescription}
      />
      <FormItem
        labelText={PAYMENTS_INPUT_MESSAGE.cardNumberLabel}
        errorMessage={useCardNumbers.errorMessage}
      >
        <TextInputContainer>{numberElements}</TextInputContainer>
      </FormItem>
    </section>
  );
}
