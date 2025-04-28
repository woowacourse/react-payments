import type { Meta, StoryObj } from '@storybook/react';
import * as S from '../../../pages/CardPage/CardPage.styles';
import Preview from './Preview';
import { CardInfoProvider } from '../../../features/cardInfo/context';
import { CardInfoContainer } from '../../../features/cardInfo/ui';

const meta: Meta<typeof Preview> = {
  title: 'Widgets/Preview',
  component: Preview,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <CardInfoProvider>
        <Story />
      </CardInfoProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Preview>;

export const Default: Story = {
  render: () => {
    return (
      <S.AppContainer>
        <S.CardContainer>
          <Preview />
          <CardInfoContainer />
        </S.CardContainer>
      </S.AppContainer>
    );
  },
};
