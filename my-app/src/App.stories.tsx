import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';
import App from './App';

const meta: Meta<typeof App> = {
  title: 'Pages/PaymentApp',
  component: App,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof App>;

// 빈 화면
export const Default: Story = {};

// 정상 입력 케이스 (VISA)
export const NormalCase: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 카드 번호 입력
    const cardInputs = canvas.getAllByPlaceholderText('1234');
    await userEvent.type(cardInputs[0], '4111');
    await userEvent.type(cardInputs[1], '2222');
    await userEvent.type(cardInputs[2], '3333');
    await userEvent.type(cardInputs[3], '4444');

    // 유효기간 입력 (MM, YY)
    const monthInput = canvas.getByPlaceholderText('MM');
    await userEvent.type(monthInput, '12');

    const yearInput = canvas.getByPlaceholderText('YY');
    await userEvent.type(yearInput, '26');

    // CVC 입력
    const cvcInput = canvas.getByPlaceholderText('123');
    await userEvent.type(cvcInput, '789');

    // 마지막으로 빈 배경을 클릭하여 최종 onBlur 이벤트 발생
    await userEvent.click(canvasElement);
  },
};

// 에러 검증: 사용자가 잘못된 값을 입력했을 때 에러가 잘 뜨는지 확인하는 시나리오
export const ErrorValidationScenario: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 카드 번호 자릿수 부족 에러 테스트
    const cardInputs = canvas.getAllByPlaceholderText('1234');
    await userEvent.type(cardInputs[0], '12'); // 4자리가 아닌 2자리만 입력
    await userEvent.click(canvasElement); // 포커스 해제 (onBlur)
    
    // 에러 메시지가 화면에 나타났는지 검증
    await expect(
      canvas.getByText('필요한 자릿수를 모두 입력해주세요!')
    ).toBeInTheDocument();

    // 유효기간 '월' 에러 테스트 (00월 입력)
    const monthInput = canvas.getByPlaceholderText('MM');
    await userEvent.type(monthInput, '00');
    await userEvent.click(canvasElement);

    // 에러 메시지가 화면에 나타났는지 검증
    await expect(
      canvas.getByText('월은 1월부터 12월 사이여야 합니다!')
    ).toBeInTheDocument();

    // CVC 자릿수 부족 에러 테스트
    const cvcInput = canvas.getByPlaceholderText('123');
    await userEvent.type(cvcInput, '7'); // 3자리가 아닌 1자리만 입력
    await userEvent.click(canvasElement);

    // CVC 쪽 에러 메시지 검증
    const lengthErrors = canvas.getAllByText('필요한 자릿수를 모두 입력해주세요!');
    await expect(lengthErrors.length).toBeGreaterThanOrEqual(2);
  },
};