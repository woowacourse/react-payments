import React, { useState, useContext } from 'react';

import styled, { css } from 'styled-components';
import { MMYY_REGEXP, ONLY_NUMBER_REGEXP } from '../../../utils/regexp';
import FormLabel from '../../@common/FormLabel';
import Input from '../../@common/Input';
import ErrorSpan from '../../@common/ErrorSpan';
import CreditCardContext from '../../../contexts/InputValueContext';

function ExpireDate() {
  console.log('>>> ExpireDate 시작');
  const [creditCardInfo, setCreditCardInfo] = useContext(CreditCardContext);

  const [expireError, setExpireError] = useState(false);

  const expireDateChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const enteredValue = event.currentTarget.value as string;
    const [curMM, _, curYY] = new Date().toLocaleDateString('en-US').split('/');
    const [MM, YY] = enteredValue.split('/');
    const date = enteredValue.replace('/', '');

    if (!ONLY_NUMBER_REGEXP.test(date)) return;
    if (!setCreditCardInfo) return;

    const isDateValid =
      enteredValue.length > 0 &&
      (!MMYY_REGEXP.test(date) || curYY.slice(2) > YY || (curYY.slice(2) === YY && curMM > MM));

    try {
      if (isDateValid) {
        throw new Error();
      }

      setExpireError(false);
    } catch {
      setExpireError(true);
    } finally {
      if (isDateValid && enteredValue.length === 5) {
        // FIXME: 버그 있을 예정
        setCreditCardInfo('expirationDate', enteredValue.split(' / '));
        return;
      }
      // FIXME:
      const expiration = date.match(/.{1,2}/g) ?? [];

      setCreditCardInfo('expirationDate', expiration);
    }
  };

  return (
    <ExpireDateContainer>
      <FormLabel>{'만료일'}</FormLabel>
      <Input
        value={creditCardInfo.expirationDate.join(' / ')}
        onChange={expireDateChange}
        maxLength={5}
        customInputStyle={ExpireDateInput}
        placeholder="MM / YY"
      />
      {expireError && <ErrorSpan>{'유효한 만료일이 아닙니다.'}</ErrorSpan>}
    </ExpireDateContainer>
  );
}
export default ExpireDate;

const ExpireDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const ExpireDateInput = css`
  width: 137px;
  letter-spacing: 3px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
`;
