import type { Meta, StoryObj } from '@storybook/react';
import CardPreview from '../components/CardPreview/CardPreview';
import { FormContext } from '../contexts/useFormContext';
import { createMockFormState } from '../../.storybook/decorators/withFormContext';
const meta: Meta<typeof CardPreview> = {
  title: 'Components/CardPreview',
  component: CardPreview,
  decorators: [
    (Story) => (
      <FormContext.Provider value={createMockFormState()}>
        <Story />
      </FormContext.Provider>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
