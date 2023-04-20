import { useState } from 'react';
import { Meta } from '@storybook/react';
import CardPassword from './CardPassword';

const meta = {
  component: CardPassword,
  title: 'Section/CardPassword',
} satisfies Meta<typeof CardPassword>;

export default meta;

export const CardPasswordStory = () => {
  const [password, setPassword] = useState<Record<number, string>>({
    0: '',
    1: '',
  });

  return <CardPassword password={password} setPassword={setPassword} />;
};
