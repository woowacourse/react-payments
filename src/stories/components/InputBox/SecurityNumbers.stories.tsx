import type { Meta } from '@storybook/react';

import {
  CardInfoProvider,
  useCardInfoActions,
  useCardInfoValue,
} from '../../../context/CardInfoContext';
import useForm from '../../../hooks/useForm';
import { SecurityNumbers } from '../../../components/InputBox';
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
      <SecurityNumbers error={error}>
        <Input
          name="securityNumbers"
          value={cardInfo?.securityNumbers}
          onChange={onChange}
          maxLength={3}
          center={true}
          type="password"
          numeric={true}
        />
      </SecurityNumbers>
      <button style={{ visibility: 'hidden' }}></button>
    </form>
  );
};

export const SecurityNumbersBox = () => {
  return (
    <CardInfoProvider>
      <InputBoxStories />
    </CardInfoProvider>
  );
};

const meta: Meta<typeof SecurityNumbersBox> = {
  component: SecurityNumbersBox,
  title: 'Components/InputBox',
};

export default meta;
