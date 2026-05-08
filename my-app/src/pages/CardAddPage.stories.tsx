import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';
import CardAddPage from './CardAddPage';

const meta: Meta<typeof CardAddPage> = {
  title: 'Pages/CardAddPage',
  component: CardAddPage,
};

export default meta;
type Story = StoryObj<typeof CardAddPage>;

// 빈 화면
export const Default: Story = {};

// 정상 입력 케이스
export const NormalCase: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const cardInputs = canvas.getAllByPlaceholderText('1234');
    await userEvent.type(cardInputs[0], '4111');
    await userEvent.type(cardInputs[1], '2222');
    await userEvent.type(cardInputs[2], '3333');
    await userEvent.type(cardInputs[3], '4444');

    const companyButton = await canvas.findByText('카드사를 선택해주세요'); 
    await userEvent.click(companyButton);
    const brandButton = await canvas.findByText('BC카드'); 
    await userEvent.click(brandButton);

    const monthInput = await canvas.findByPlaceholderText('MM');
    await userEvent.type(monthInput, '12');
    const yearInput = await canvas.findByPlaceholderText('YY');
    await userEvent.type(yearInput, '26');

    const cvcInput = await canvas.findByPlaceholderText('123');
    await userEvent.type(cvcInput, '789');

    const passwordInput = await canvas.findByPlaceholderText('**');
    await userEvent.type(passwordInput, '12');

    await expect(await canvas.findByText('확인')).toBeInTheDocument();
  },
};

// 에러 상태 시나리오
export const ErrorCase: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 카드 번호 자릿수 부족
    const cardInputs = canvas.getAllByPlaceholderText('1234');
    await userEvent.type(cardInputs[0], '12'); // 2자리만 입력
    await userEvent.click(canvasElement); // 포커스 해제 (onBlur)
    
    await expect(
      await canvas.findByText('필요한 자릿수를 모두 입력해주세요!')
    ).toBeInTheDocument();

    await userEvent.clear(cardInputs[0]);
    await userEvent.type(cardInputs[0], '4111');
    await userEvent.type(cardInputs[1], '2222');
    await userEvent.type(cardInputs[2], '3333');
    await userEvent.type(cardInputs[3], '4444');
    
    const companyButton = await canvas.findByText('카드사를 선택해주세요'); 
    await userEvent.click(companyButton);
    const brandButton = await canvas.findByText('BC카드'); 
    await userEvent.click(brandButton);

    // 월 에러
    const monthInput = await canvas.findByPlaceholderText('MM');
    await userEvent.type(monthInput, '00');
    await userEvent.click(canvasElement);

    await expect(
      await canvas.findByText('월은 1월부터 12월 사이여야 합니다!')
    ).toBeInTheDocument();
  },
};