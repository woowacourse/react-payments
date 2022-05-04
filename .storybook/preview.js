import "../src/styles/index.css";
import { CardInfoProvider } from "contexts/CardInfoProvider";
import { CardsProvider } from "contexts/CardsProvider";
import { MemoryRouter } from "react-router-dom";

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
  Story => (
    <MemoryRouter>
      <CardsProvider>
        <CardInfoProvider>
          <Story />
        </CardInfoProvider>
      </CardsProvider>
    </MemoryRouter>
  ),
];
