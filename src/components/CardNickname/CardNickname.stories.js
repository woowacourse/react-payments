import CardNickname from '.';
import CardInfoContextProvider from 'CardInfoContextProvider';

export default {
  title: 'CardAddSuccessPage/CardNickname',
  component: CardNickname,
  decorators: [
    (CardNickname) => (
      <CardInfoContextProvider>
        <CardNickname />
      </CardInfoContextProvider>
    ),
  ],
};

export const CardNicknameInput = () => <CardNickname />;
