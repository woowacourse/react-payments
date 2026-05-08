import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CardAddSuccessPage from './CardAddSuccessPage';

const StateInjector = ({ children, mockState }: { children: React.ReactNode, mockState: any }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    navigate('/success', { state: mockState, replace: true });
  }, [navigate, mockState]);

  if (!location.state) return null;

  return <>{children}</>;
};

const meta: Meta<typeof CardAddSuccessPage> = {
  title: 'Pages/CardAddSuccessPage',
  component: CardAddSuccessPage,
};

export default meta;
type Story = StoryObj<typeof CardAddSuccessPage>;

export const BCCard: Story = {
  decorators: [
    (Story) => (
      <StateInjector mockState={{ cardNumber: ['5511', '2222', '3333', '4444'], cardCompany: 'BC카드' }}>
        <Story />
      </StateInjector>
    ),
  ],
};

export const KakaoBank: Story = {
  decorators: [
    (Story) => (
      <StateInjector mockState={{ cardNumber: ['3333', '4444', '5555', '6666'], cardCompany: '카카오뱅크' }}>
        <Story />
      </StateInjector>
    ),
  ],
};