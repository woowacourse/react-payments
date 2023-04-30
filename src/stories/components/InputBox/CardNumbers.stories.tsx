import type { Meta } from '@storybook/react';

import { useEffect, useRef } from 'react';
import {
  CardInfoProvider,
  useCardInfoActions,
  useCardInfoValue,
} from '../../../context/CardInfoContext';
import useForm from '../../../hooks/useForm';
import { CardNumbers as CardNumbersComponent } from '../../../components/InputBox';
import { Input } from '../../../components';

import validator from '../../../domain/validator';
import { CardInfo } from '../../../types/card';

const InputBoxStories = () => {
  const [cardInfo, { setCardInfo }] = [useCardInfoValue(), useCardInfoActions()];

  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    firstInputRef.current?.focus();
  }, []);

  const { onSubmit, onChange, error } = useForm({
    submitAction: () => {},
    changeAction: (name: string, value: string) => {
      setCardInfo((prev: CardInfo) => ({ ...prev, [name]: value }));
    },
    errorOptions: {
      initState: {
        firstCardNumbers: '',
        secondCardNumbers: '',
        thirdCardNumbers: '',
        fourthCardNumbers: '',
      },
      validator,
    },
  });

  return (
    <form onSubmit={onSubmit}>
      <CardNumbersComponent error={error}>
        <Input
          ref={firstInputRef}
          name="firstCardNumbers"
          value={cardInfo?.firstCardNumbers}
          onChange={onChange}
          maxLength={4}
          center={true}
          type="text"
          numeric={true}
        />
        <Input
          name="secondCardNumbers"
          value={cardInfo?.secondCardNumbers}
          onChange={onChange}
          maxLength={4}
          center={true}
          type="text"
          numeric={true}
        />
        <Input
          name="thirdCardNumbers"
          value={cardInfo?.thirdCardNumbers}
          onChange={onChange}
          maxLength={4}
          center={true}
          type="password"
          numeric={true}
        />
        <Input
          name="fourthCardNumbers"
          value={cardInfo?.fourthCardNumbers}
          onChange={onChange}
          maxLength={4}
          center={true}
          type="password"
          numeric={true}
        />
      </CardNumbersComponent>
      <button style={{ visibility: 'hidden' }}></button>
    </form>
  );
};

export const CardNumbers = () => {
  return (
    <CardInfoProvider>
      <InputBoxStories />
    </CardInfoProvider>
  );
};

const meta: Meta<typeof CardNumbers> = {
  component: CardNumbers,
  title: 'Components/InputBox',
};

export default meta;
