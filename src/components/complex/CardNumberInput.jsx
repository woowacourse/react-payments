import React from 'react';
import { Input } from '../common';

export default function CardNumberInput({ number, setNumber }) {
  return (
    <div>
      <Input description="카드 번호" value={number} onChangeFunc={setNumber} />
    </div>
  );
}
