import { PathProvider } from "../src/components/context/PathProvider";
import { CardInfoProvider } from "../src/components/context/CardInfoProvider";
import { CardListProvider } from "../src/components/context/CardListProvider";

const initialCardInfoState = {
  cardCompany: {
    name: "우아 카드",
    hexColor: "#ff00ff",
  },
  cardNumbers: {
    cardNoA: "1234",
    cardNoB: "1234",
    cardNoC: "1234",
    cardNoD: "1234",
  },
  cardDate: {
    month: "01",
    year: "23",
  },
  owner: {
    name: "TAE TAE",
  },
  cardCode: {
    cvc: "123",
  },
  pwd: {
    pwdNoA: "1",
    pwdNoB: "1",
  },
};

const initialCardListState = [
  {
    id: 1,
    cardCompany: {
      name: "우아 카드",
      hexColor: "#ff00ff",
    },
    cardNumbers: {
      cardNoA: "1234",
      cardNoB: "1234",
      cardNoC: "1234",
      cardNoD: "1234",
    },
    cardDate: {
      month: "01",
      year: "23",
    },
    owner: {
      name: "TAE TAE",
    },
    nickname: "우리집 카드",
  },
  {
    id: 2,
    cardCompany: {
      name: "헤헤 카드",
      hexColor: "#ffff00",
    },
    cardNumbers: {
      cardNoA: "1234",
      cardNoB: "1234",
      cardNoC: "1234",
      cardNoD: "1234",
    },
    cardDate: {
      month: "02",
      year: "25",
    },
    owner: {
      name: "NAN NOO",
    },
    nickname: "남의집 카드",
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <PathProvider>
      <CardInfoProvider initialState={initialCardInfoState}>
        <CardListProvider initialState={initialCardListState}>
          <Story />
        </CardListProvider>
      </CardInfoProvider>
    </PathProvider>
  ),
];
