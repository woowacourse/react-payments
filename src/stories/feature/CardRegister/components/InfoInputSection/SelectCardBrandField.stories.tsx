import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import SelectCardBrandField from '../../../../../feature/CardRegister/components/InfoInputSection/SelectCardBrandField';
import {
  useCardCompanyField,
  type CardCompanyFieldType,
} from '../../../../../feature/CardRegister/hooks/useCardCompanyField';
import { CARD_COMPANIES } from '../../../../../domain/card/constant/cardCompanies';

const cardCompanyOptions = CARD_COMPANIES.map((cardCompany) => ({
  value: cardCompany.id,
  label: cardCompany.name,
}));

const createCardCompanyField = (
  overrides: Partial<CardCompanyFieldType> = {},
): CardCompanyFieldType => ({
  cardCompanyId: null,
  cardCompanyOptions,
  isComplete: false,
  handleChange: fn(),
  ...overrides,
});

const meta = {
  title: 'feature/CardRegister/components/SelectCardBrandField',
  component: SelectCardBrandField,
  tags: ['autodocs'],
  args: {
    field: createCardCompanyField(),
  },
} satisfies Meta<typeof SelectCardBrandField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Selected: Story = {
  args: {
    field: createCardCompanyField({
      cardCompanyId: 'bc',
      isComplete: true,
    }),
  },
};

export const Interactive: Story = {
  render: function InteractiveSelectCardBrandField() {
    const field = useCardCompanyField({});

    return <SelectCardBrandField field={field} />;
  },
};
