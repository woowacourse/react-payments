import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../styles/theme';
import { within, userEvent, expect } from '@storybook/test';
import BrandSelect from '../components/BrandSelect';
import { BrandProvider } from '../contexts/BrandContext';

const meta = {
  title: 'Components/BrandSelect',
  component: BrandSelect,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <BrandProvider>
          <Story />
        </BrandProvider>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof BrandSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <BrandSelect />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const container = await canvas.findByTestId('brand-component');
    expect(container).toBeDefined();

    const select = await canvas.findByRole('combobox');
    expect(select).toBeDefined();
    expect(select).toHaveValue('');

    const options = within(select).getAllByRole('option', { hidden: true });
    expect(options.length).toBeGreaterThan(1);
    expect(options[0]).toBeDisabled();
  },
};

export const SelectOption: Story = {
  render: () => <BrandSelect />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = await canvas.findByRole('combobox');

    await userEvent.selectOptions(select, 'BC');
    expect(select).toHaveValue('BC');

    await userEvent.selectOptions(select, '신한');
    expect(select).toHaveValue('신한');
  },
};
