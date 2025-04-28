import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import styles from '../../css/main.module.css';
import CardRegistrationComplete from '@/pages/CardRegistrationComplete';

const meta = {
  title: 'CardRegistrationComplete',
  component: CardRegistrationComplete,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div className={styles.main}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof CardRegistrationComplete>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    firstNumber: '1234',
    resetForm: () => {},
  },
};
