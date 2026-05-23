import type { Meta, StoryObj } from '@storybook/react-vite';
import { userEvent, within, expect } from 'storybook/test';
import { MemoryRouter } from 'react-router';
import AddCardPage from './AddCardPage';

const meta: Meta<typeof AddCardPage> = {
  title: 'Pages/PaymentApp',
  component: AddCardPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AddCardPage>;

// 빈 화면
export const Default: Story = {};

// 정상 입력 케이스 (VISA)
export const NormalCase: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByPlaceholderText('0000 0000 0000 0000'),
      '4111111111111111',
    );
    await userEvent.selectOptions(await canvas.findByRole('combobox'), '41');

    await userEvent.type(await canvas.findByPlaceholderText('MM'), '12');
    await userEvent.type(await canvas.findByPlaceholderText('YY'), '28');
    await userEvent.type(await canvas.findByPlaceholderText('123'), '789');
    await userEvent.type(await canvas.findByPlaceholderText('**'), '12');
  },
};

// 에러 검증: 사용자가 잘못된 값을 입력했을 때 에러가 잘 뜨는지 확인하는 시나리오
export const ErrorValidationScenario: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByPlaceholderText('0000 0000 0000 0000'),
      '12',
    );
    await userEvent.click(canvasElement);

    await expect(
      canvas.getByText('카드 번호는 16자리를 입력해주세요.'),
    ).toBeInTheDocument();
  },
};
