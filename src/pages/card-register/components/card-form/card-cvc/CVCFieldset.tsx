import React from 'react';
import CVCInputContainer from './CVCInputContainer';
import Fieldset from '../Fieldset';
import S from '../../../styled';

function CVCFieldset() {
  return (
    <Fieldset>
      <Fieldset.Head>
        <label htmlFor="card-cvc-input">보안 코드(CVC/CVV)</label>
      </Fieldset.Head>
      <Fieldset.Content>
        <div css={{ display: 'flex', alignItems: 'center' }}>
          <CVCInputContainer />
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

export default CVCFieldset;
