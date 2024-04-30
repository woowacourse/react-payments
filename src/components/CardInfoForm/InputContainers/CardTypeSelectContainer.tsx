import styled from 'styled-components';

import Select from '../../common/Select';
import InputContainer from '../../common/InputContainer';

import { IInputControl } from '../../../hooks/useInput';
import getObjectKeys from '../../../utils/getObjectKeys';
import { CARD_TYPE } from '../../../constants/cardType';

const cardTypeOptions = getObjectKeys(CARD_TYPE).map(cardType => ({ value: cardType, label: cardType }));

export default function CardTypeSelectContainer({ value, onChange }: IInputControl<HTMLSelectElement>) {
  return (
    <S.Container>
      <InputContainer title="카드사를 선택해 주세요" subtitle="현재 국내 카드사만 가능합니다.">
        <Select placeholder="카드사를 선택해 주세요" value={value} onChange={onChange} options={cardTypeOptions} />
      </InputContainer>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    margin-bottom: 44px;
  `,
};
