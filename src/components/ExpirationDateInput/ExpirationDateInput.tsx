import { useState } from 'react';
import CardInfoInput from '../CardInfoInput/CardInfoInput';
import Input from '../Input/Input';
import { NUMBER_REGEX } from '../../constant/regex';
import { useCardInfoContext } from '../../context/CardInfoContext';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const ExpirationDateInput = () => {
  const { expirationDate, setExpirationDate } = useCardInfoContext();
  const [error, setError] = useState('');

  const addSlashInExpirationDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const expirationDate = e.target.value;
    const slashRemovedExpirationDate = expirationDate.replaceAll('/', '');
    if (NUMBER_REGEX.test(slashRemovedExpirationDate)) {
      setError('0부터 9까지 숫자만 입력이 가능합니다.');
    } else {
      const expirationDateWithSlash = (slashRemovedExpirationDate.match(/.{1,2}/g) || []).join('/');
      setExpirationDate(expirationDateWithSlash);
      setError('');
    }
  };

  return (
    <section>
      <CardInfoInput title="만료일">
        <Input
          width="40%"
          onChange={addSlashInExpirationDate}
          value={expirationDate}
          maxLength={5}
          name="expirationDate"
          required
        />
      </CardInfoInput>
      <ErrorMessage>{error}</ErrorMessage>
    </section>
  );
};

export default ExpirationDateInput;
