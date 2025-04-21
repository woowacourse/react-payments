import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import Input from './Input';
import { useState } from 'react';
import { DIGITS_ONLY_REGEX } from '../../../constants';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    onChange: { action: 'changed' },
    onBlur: { action: 'blurred' },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: '입력해 주세요',
    type: 'text',
  },
};

export const NumberInput: Story = {
  args: {
    placeholder: '숫자만 입력하세요',
    type: 'text',
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;

      if (newValue === '' || DIGITS_ONLY_REGEX.test(newValue)) {
        updateArgs({ value: newValue });
      }
      args.onChange?.(e);
    };

    return (
      <div>
        <Input {...args} value={value || ''} onChange={handleChange} />
        {value && !DIGITS_ONLY_REGEX.test(value) && (
          <div style={{ color: 'red', marginTop: '5px' }}>
            숫자만 입력 가능합니다
          </div>
        )}
      </div>
    );
  },
};

export const CVCInput: Story = {
  args: {
    placeholder: 'CVC 3자리 입력',
    maxLength: 3,
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;

      if (newValue === '' || DIGITS_ONLY_REGEX.test(newValue)) {
        updateArgs({ value: newValue });

        if (newValue.length > 0 && newValue.length < 3) {
          setError('3자리를 모두 입력해주세요');
        } else {
          setError('');
        }
      }
    };

    const handleBlur = () => {
      if (value && value.length < 3) {
        setError('3자리를 모두 입력해주세요');
      }
    };

    return (
      <div>
        <Input
          {...args}
          value={value || ''}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ borderColor: error ? 'red' : undefined }}
        />
        {error && <div style={{ color: 'red', marginTop: '5px' }}>{error}</div>}
      </div>
    );
  },
};
