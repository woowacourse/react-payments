import type { Meta } from '@storybook/react';

import {
  CardInfoProvider,
  useCardInfoActions,
  useCardInfoValue,
} from '../../../context/CardInfoContext';
import useForm from '../../../hooks/useForm';
import { Password as PasswordComponent } from '../../../components/InputBox';
import { Input } from '../../../components';

import validator from '../../../domain/validator';
import { CardInfo } from '../../../types/card';

const InputBoxStories = () => {
  const [cardInfo, { setCardInfo }] = [useCardInfoValue(), useCardInfoActions()];

  const { onSubmit, onChange, error } = useForm({
    submitAction: () => {},
    changeAction: (name: string, value: string) => {
      setCardInfo((prev: CardInfo) => ({ ...prev, [name]: value }));
    },
    errorOptions: {
      initState: {
        password: '',
      },
      validator,
    },
  });

  return (
    <form onSubmit={onSubmit}>
      <PasswordComponent error={error}>
        <Input
          name="firstPassword"
          value={cardInfo?.firstPassword}
          onChange={onChange}
          maxLength={1}
          center={true}
          type="password"
          numeric={true}
        />
        <Input
          name="secondPassword"
          value={cardInfo?.secondPassword}
          onChange={onChange}
          maxLength={1}
          center={true}
          type="password"
          numeric={true}
        />
      </PasswordComponent>
      <button style={{ visibility: 'hidden' }}></button>
    </form>
  );
};

export const Password = () => {
  return (
    <CardInfoProvider>
      <InputBoxStories />
    </CardInfoProvider>
  );
};

const meta: Meta<typeof Password> = {
  component: Password,
  title: 'Components/InputBox',
};

export default meta;
