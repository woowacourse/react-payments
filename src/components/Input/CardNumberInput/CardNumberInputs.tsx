import { Fragment } from 'react';
import { ValueAndOnChange } from '../types';
import { Input } from 'components/common';
import FormLabel from 'components/common/FormLabel/FormLabel';
import { Styled as S } from './CardNumberInputs.styles';
import { useCardNumberInputs } from 'hooks/useCardNumberInputs';
import { ErrorCaption } from 'components/Form/AddCardForm';

interface CardNumberInputProps {
  valueAndOnChanges: ValueAndOnChange[];
}

export function CardNumberInputs({ valueAndOnChanges }: CardNumberInputProps) {
  const { isError, curIndex, inputs } = useCardNumberInputs(valueAndOnChanges);

  return (
    <>
      <FormLabel>카드 번호</FormLabel>
      <S.CardNumberContainer>
        {inputs.map((input, index) => {
          return (
            <Fragment key={index}>
              <S.CardNumberWrapper>
                <Input
                  {...input}
                  id={`card-number${index}`}
                  aria-label="card-number"
                  className={isError && index === curIndex ? 'error' : ''}
                />
              </S.CardNumberWrapper>
              {index < valueAndOnChanges.length - 1 && <S.DASH>-</S.DASH>}
            </Fragment>
          );
        })}
      </S.CardNumberContainer>
      {
        <ErrorCaption>
          {isError && '카드 번호를 4자리씩 총 16자리의 숫자로 입력해주세요'}
        </ErrorCaption>
      }
    </>
  );
}
