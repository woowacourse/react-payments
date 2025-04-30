import { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import PreviewView from '../components/Preview/PreviewView';
import { theme } from '../styles/theme';

const meta = {
  title: 'Components/PreviewView',
  component: PreviewView,
  tags: ['autodocs'],
} satisfies Meta<typeof PreviewView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    numbers: ['1234', '5678', '9012', '3456'],
    period: ['12', '34'],
    cardBrandColor: theme.colors.cardBrandColors.default,
    isPeriodSeparatorShowing: false,
    cardMethodSrc: null,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const previewContainer = canvas.getByTestId('preview-component');
    const cardFrame = previewContainer.firstElementChild as HTMLElement;

    expect(cardFrame).toHaveStyle(
      `background-color: ${theme.colors.cardBrandColors.default}`
    );

    expect(canvas.getByText('1234')).toBeDefined();
    expect(canvas.getByText('5678')).toBeDefined();

    expect(canvas.getAllByText('••••').length).toBe(2);

    expect(canvas.queryByText('/')).toBeNull();

    expect(canvas.queryByTestId('card-method')).toBeNull();
  },
};

export const WithSeparator: Story = {
  args: {
    ...Default.args,
    isPeriodSeparatorShowing: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('/')).toBeDefined();
  },
};

export const WithVisaLogo: Story = {
  args: {
    ...Default.args,
    cardMethodSrc: './images/visa.svg',
    cardBrandColor: theme.colors.cardBrandColors['카카오'],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const previewContainer = canvas.getByTestId('preview-component');
    const cardFrame = previewContainer.firstElementChild as HTMLElement;
    expect(cardFrame).toHaveStyle(
      `background-color: ${theme.colors.cardBrandColors['카카오']}`
    );

    const logo = canvas.getByTestId('card-method');
    expect(logo).toBeDefined();
    expect(logo).toHaveAttribute('src', './images/visa.svg');
  },
};
