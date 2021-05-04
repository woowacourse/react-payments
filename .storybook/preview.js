import GlobalStyle from '../src/global.styles';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import StoryRouter from 'storybook-react-router';
import { CardsStateProvider } from '../src/context/CardsStateContext';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
    defaultViewport: 'mobile2',
  },
};

export const decorators = [
  StoryRouter(),
  Story => (
    <>
      <GlobalStyle />
      <CardsStateProvider>
        <Story />
      </CardsStateProvider>
    </>
  ),
];
