import type { Meta, StoryObj } from '@storybook/react';
import UnderlinedInput from '../components/common/UnderlinedInput/UnderlinedInput';

/**
 * `UnderlinedInput` 은 항상 가운데에 정렬되고, 한 줄 전체를 차지하는, 밑줄이 포함된 형태의 인풋입니다.
 *  **카드 이름 선택 메뉴** 에 사용됩니다. 이 컴포넌트에는 검증 기능이 제공되지 않으므로 이벤트 또한 제공되지 않습니다.
 */
const meta = {
  component: UnderlinedInput,
  title: 'UnderlinedInput',
} satisfies Meta<typeof UnderlinedInput>;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {},
};

export const Short: Story = {
  args: {
    placeholder: '다음',
    width: '30%',
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: '다음',
  },
};

export default meta;
