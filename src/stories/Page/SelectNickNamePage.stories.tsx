import type { Meta } from '@storybook/react';
import { Main } from '../../pages/Main';
import { BrowserRouter } from 'react-router-dom';
import { AddCardNickName } from '../../pages/register/AddCardNickName';
import { CardInfoProvider } from '../../components/providers/CardInfoProvider';
import { useCardInfoActionContext } from '../../hooks/cardInfoContext';
import { useEffect } from 'react';
import { v4 } from 'uuid';

const meta = {
  title: 'Example/Page',
  component: Main,
  tags: ['autodocs'],
} satisfies Meta<typeof Main>;

export default meta;

export const AddCardNickNamePageInApp = () => {
  return (
    <BrowserRouter>
      <CardInfoProvider>
        <AddCardNickNamePage />
      </CardInfoProvider>
    </BrowserRouter>
  );
};

const AddCardNickNamePage = () => {
  const {
    setCompanyId,
    setCardNumber,
    setExpirationDate,
    setOwnerName,
    setSecurityCode,
    setPassword,
    setCardId,
  } = useCardInfoActionContext();

  useEffect(() => {
    setCompanyId('HANA');

    for (let i = 0; i < 4; i++) {
      setCardNumber(i, '1234');
    }

    setExpirationDate('month', '12');
    setExpirationDate('year', '34');

    setOwnerName('EXAMPLE NAME');

    setSecurityCode('123');

    setPassword(0, '1');
    setPassword(1, '2');

    setCardId(v4());
  }, [
    setCardId,
    setCardNumber,
    setCompanyId,
    setExpirationDate,
    setOwnerName,
    setPassword,
    setSecurityCode,
  ]);

  return <AddCardNickName />;
};
