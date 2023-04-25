import type { Meta } from '@storybook/react';

import { useState } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { Input } from '../../../components/InputBox';
import validator from '../../../domain/validator';

import useForm from '../../../hooks/useForm';

import { CardInfo } from '../../../types/card';

const InputStories = () => {
  const [cardList, setCardList] = useState<CardInfo[]>([]);
  const { cardInfo, onChange } = useForm(setCardList, validator);

  return (
    <form>
      <Input
        name="firstCardNumbers"
        value={cardInfo?.firstCardNumbers}
        onChange={onChange}
        maxLength={4}
        center={true}
        type="text"
        dataType="number"
      />
    </form>
  );
};

const meta: Meta<typeof InputStories> = {
  title: 'Components/InputBox/Input',
  component: InputStories,
};

export default meta;

export const CardNumber: React.FC = () => {
  return (
    <MemoryRouter initialEntries={['/register']}>
      <InputStories />
    </MemoryRouter>
  );
};
