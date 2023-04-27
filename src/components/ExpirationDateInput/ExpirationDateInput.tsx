import { useContext, useState } from 'react';
import CardInfoInput from '../CardInfoInput/CardInfoInput';
import Input from '../Input/Input';
import { NUMBER_REGEX } from '../../constant/regex';
import { CardInfoContext } from '../../context/CardInfoContext';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const ExpirationDateInput = () => {
  const { expirationDate, setExpirationDate } = useContext(CardInfoContext);
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
    <div>
      <CardInfoInput title="만료일">
        <Input
          width="40%"
          onChange={addSlashInExpirationDate}
          value={expirationDate}
          maxLength={5}
          name="expirationDate"
        />
      </CardInfoInput>
      <ErrorMessage>{error}</ErrorMessage>
    </div>
  );
};

export default ExpirationDateInput;
