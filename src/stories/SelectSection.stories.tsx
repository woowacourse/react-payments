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
          value="선택해주세요"
          isError={false}
          options={[
            { label: '옵션1', value: '옵션1' },
            { label: '옵션2', value: '옵션2' },
          ]}
        />
      </>
    ),
  },
};
