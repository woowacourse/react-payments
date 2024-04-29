import type { Meta, StoryObj } from '@storybook/react';

import CardCompanyInput from './CardCompanyInput';
import { validateCompany } from '../../../domain/Card';
import useInput from '../../../hooks/useInput';

const meta = {
  title: 'component/CardCompanyInput',
  component: CardCompanyInput,
  parameters: {
    controls: { exclude: 'company' },
  },
  decorators: [
    () => {
      const company = useInput<string>(validateCompany, '');
      return <CardCompanyInput company={company} />;
    },
  ],
} satisfies Meta<typeof CardCompanyInput>;

export default meta;

type Story = StoryObj<typeof CardCompanyInput>;

export const Default: Story = {};
