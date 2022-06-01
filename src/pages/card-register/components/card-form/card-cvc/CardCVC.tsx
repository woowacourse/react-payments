import React from 'react';
import { UseFormRegisterOption } from '../../../../../hooks/useForm/types';
import Fieldset from '../Fieldset';
import S from '../../../styled';
import { useFormContext } from '../../../../../hooks/useForm/useFormContext';
import { useCardRegisterContext } from '../../../context';
import PositiveNumberInput from '../../common/PositiveNumberInput';
import { inputStyle } from './CardCVC.styled';

function CardCVC() {
  const { register } = useFormContext();
  const { updateIsEditingCVC } = useCardRegisterContext();

  const registerOptions: UseFormRegisterOption = {
    onBlur: () => updateIsEditingCVC(false),
    onFocus: () => updateIsEditingCVC(true),
    required: { value: true },
    pattern: {
      value: '[0-9]{3,4}',
      message: '3자리 이상 입력해 주세요',
    },
    maxLength: { value: 4 },
  };

  return (
    <Fieldset>
      <Fieldset.Head>
        <label htmlFor="card-cvc-input">보안 코드(CVC/CVV)</label>
      </Fieldset.Head>
      <Fieldset.Content>
        <div css={{ display: 'flex', alignItems: 'center' }}>
          <PositiveNumberInput
            id="card-cvc-input"
            css={inputStyle}
            type="password"
            {...register('cvc', { ...registerOptions })}
          />
          <S.HelpTip>
            <div className="helptip-content">
              CVC(Card Validation Code)는 Visa, MasterCard, Discover 카드의 뒷면과 아메리칸 익스프레스 카드의 앞면에
              있는 3자리 또는 4자리 코드이다.
            </div>
          </S.HelpTip>
        </div>
      </Fieldset.Content>
    </Fieldset>
  );
}

export default CardCVC;
