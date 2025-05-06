import InputSection from '@/components/common/InputSection/InputSection';
import SelectField from '@/components/common/SelectField/SelectField';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'SelectSection',
  component: InputSection,
} satisfies Meta<typeof InputSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Select Section Title',
    description: 'Select Section Description',
    subtitle: 'Select Section Subtitle',
    children: (
      <>
        <SelectField
          name=""
          onChange={fn()}
          onBlur={fn()}
          isError={false}
          placeholder={'카드사를 선택해주세요'}
          options={[
            { label: '카드사1', value: '카드사1' },
            { label: '카드사2', value: '카드사2' },
            { label: '카드사3', value: '카드사3' },
          ]}
        />
      </>
    ),
  },
};
