import React from 'react';
import { Input } from '../common';

export default function CardValidDateInput({ validDate, setValidDate }) {
  return (
    <div>
      <Input
        description="만료일"
        placeholder="MM / YY"
        width="137px"
        value={validDate}
        onChangeFunc={setValidDate}
      />
    </div>
  );
}
