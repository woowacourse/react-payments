import type {Meta, StoryObj} from '@storybook/react-vite';
import type {Decorator} from '@storybook/react-vite';
import {MemoryRouter} from 'react-router-dom';
import styled from 'styled-components';

import type {CardResponse} from '@/domain/card/cardApi.types';
import CardListPage from './CardListPage';

const createCardsResponse = (cards: CardResponse[]) =>
  new Response(JSON.stringify(cards), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });

const createErrorResponse = () =>
  new Response(
    JSON.stringify({
      code: 'INVALID_CARD_NUMBER',
      message: '카드 목록을 불러오지 못했습니다.',
    }),
    {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

const withMockFetch = (fetchCards: () => Promise<Response>): Decorator => {
  return (Story) => {
    window.fetch = async (_input, init) => {
      if (init?.method === 'DELETE') return new Response(null, {status: 204});

      return fetchCards();
    };

    return (
      <StoryBackground>
        <PhoneFrame>
          <MemoryRouter initialEntries={['/cards']}>
            <Story />
          </MemoryRouter>
        </PhoneFrame>
      </StoryBackground>
    );
  };
};

const cards: CardResponse[] = [
  {
    id: '1',
    issuerCode: '31',
    number: '551112******9012',
    expirationDate: '12/28',
  },
  {
    id: '2',
    issuerCode: '41',
    number: '411111******1111',
    expirationDate: '09/27',
  },
  {
    id: '3',
    issuerCode: '15',
    number: '622126******9012',
    expirationDate: '03/29',
  },
];

const meta = {
  title: 'feature/CardList/CardListPage',
  component: CardListPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CardListPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Loading: Story = {
  decorators: [withMockFetch(() => new Promise<Response>(() => {}))],
};

export const Empty: Story = {
  decorators: [withMockFetch(async () => createCardsResponse([]))],
};

export const Success: Story = {
  decorators: [withMockFetch(async () => createCardsResponse(cards))],
};

export const Error: Story = {
  decorators: [withMockFetch(async () => createErrorResponse())],
};

const StoryBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: #e0e0e0;
`;

const PhoneFrame = styled.div`
  width: 390px;
  max-width: 100%;
  height: 700px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
