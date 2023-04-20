import { useState } from 'react';
import CardInfoInput from '../CardInfoInput/CardInfoInput';
import Input from '../Input/Input';

type ExpirationDateInputProps = {
  updateExpirationDate: (expirationDate: string) => void;
};

const ExpirationDateInput = ({ updateExpirationDate }: ExpirationDateInputProps) => {
  const [expirationDate, setExpirationDate] = useState('');

  const addSlashInExpirationDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (/[^0-9/]/.test(e.target.value)) return alert('숫자만 입력이 가능합니다!');

    const expirationDate = e.target.value;
    const slashRemovedExpirationDate = expirationDate.replaceAll('/', '');
    const expirationDateWithSlash = (slashRemovedExpirationDate.match(/.{1,2}/g) || []).join('/');

    setExpirationDate(expirationDateWithSlash);
    updateExpirationDate(expirationDateWithSlash);
  };

  return (
    <CardInfoInput title="만료일">
      <Input
        width="40%"
        onChange={addSlashInExpirationDate}
        value={expirationDate}
        maxLength={5}
        name="expirationDate"
      />
    </CardInfoInput>
  );
};

export default ExpirationDateInput;
