import type { Meta } from '@storybook/react';

import {
  CardInfoProvider,
  useCardInfoActions,
  useCardInfoValue,
} from '../../../context/CardInfoContext';
import useForm from '../../../hooks/useForm';
import { ExpirationDate } from '../../../components/InputBox';
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
        expirationMonth: '',
        expirationYear: '',
      },
      validator,
    },
  });

  return (
    <form onSubmit={onSubmit}>
      <ExpirationDate error={error}>
        <Input
          name="expirationMonth"
          value={cardInfo?.expirationMonth}
          onChange={onChange}
          maxLength={2}
          center={true}
          placeholder="MM"
          type="text"
          numeric={true}
        />
        <Input
          name="expirationYear"
          value={cardInfo?.expirationYear}
          onChange={onChange}
          maxLength={2}
          center={true}
          placeholder="YY"
          type="text"
          numeric={true}
        />
      </ExpirationDate>
      <button style={{ visibility: 'hidden' }}></button>
    </form>
  );
};

export const ExpirationDateBox = () => {
  return (
    <CardInfoProvider>
      <InputBoxStories />
    </CardInfoProvider>
  );
};

const meta: Meta<typeof ExpirationDateBox> = {
  component: ExpirationDateBox,
  title: 'Components/InputBox',
};

export default meta;
