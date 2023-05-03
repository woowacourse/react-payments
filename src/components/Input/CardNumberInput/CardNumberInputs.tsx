import { Fragment } from 'react';
import { ValueAndOnChange } from '../types';
import { Input } from 'components/common';
import FormLabel from 'components/common/FormLabel/FormLabel';
import { Styled as S } from './CardNumberInputs.styles';
import { useCardNumberInputs } from 'hooks/useCardNumberInputs';

interface CardNumberInputProps {
  valueAndOnChanges: ValueAndOnChange[];
}

export function CardNumberInputs({ valueAndOnChanges }: CardNumberInputProps) {
  const { inputs } = useCardNumberInputs(valueAndOnChanges);

  return (
    <>
      <FormLabel>카드 번호</FormLabel>
      <S.CardNumberContainer>
        {inputs.map((input, index) => {
          return (
            <Fragment key={index}>
              <Input {...input} />
              {index < valueAndOnChanges.length - 1 && <span>-</span>}
            </Fragment>
          );
        })}
      </S.CardNumberContainer>
    </>
  );
}
