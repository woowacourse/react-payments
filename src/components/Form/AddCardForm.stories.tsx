import { Meta, StoryObj } from '@storybook/react';
import AddCardForm from './AddCardForm';
import { PageContainer } from 'components/style/PageContainer';
import { CardFormContainer } from 'pages/RegisterCard';
import { GlobalStyle } from 'GlobalStyle';

const meta = {
  component: AddCardForm,
} satisfies Meta<typeof AddCardForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AddCardFormStory: Story = {
  args: {},
  decorators: [
    (Story) => {
      return (
        <>
          <GlobalStyle />
          <PageContainer>
            <CardFormContainer>
              <Story onSubmit={() => {}} />
            </CardFormContainer>
          </PageContainer>
        </>
      );
    },
  ],
};
