import type { Meta, StoryObj } from '@storybook/react';
import FormField from '../../components/FormField/FormField';
import MESSAGE from '../../constants/Message';
import CONDITION from '../../constants/Condition';
import Dropdown from '../../components/Dropdown/Dropdown';

const { TITLE, LABEL, PLACEHOLDER, ERROR, CAPTION, OPTION } = MESSAGE;
const { MAX_LENGTH } = CONDITION;

const meta = {
  title: 'FormField_SelectedCard',
  component: FormField,
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SelectedCardDefault: Story = {
  args: {
    title: TITLE.cardSelect,
    caption: CAPTION.cardSelect,
    children: (
      <Dropdown
        optionArray={OPTION.cardSelect}
        selectText={TITLE.cardSelect}
        selectedOptionState={{ value: '', setValue: () => {} }}
      />
    ),
  },
};

export const SelectedBCCard: Story = {
  args: {
    title: TITLE.cardSelect,
    caption: CAPTION.cardSelect,
    children: (
      <Dropdown
        optionArray={OPTION.cardSelect}
        selectText={TITLE.cardSelect}
        selectedOptionState={{ value: 'BC카드', setValue: () => {} }}
      />
    ),
  },
};

export const SelectedSinhanCard: Story = {
  args: {
    title: TITLE.cardSelect,
    caption: CAPTION.cardSelect,
    children: (
      <Dropdown
        optionArray={OPTION.cardSelect}
        selectText={TITLE.cardSelect}
        selectedOptionState={{ value: '신한카드', setValue: () => {} }}
      />
    ),
  },
};

export const SelectedKakaoCard: Story = {
  args: {
    title: TITLE.cardSelect,
    caption: CAPTION.cardSelect,
    children: (
      <Dropdown
        optionArray={OPTION.cardSelect}
        selectText={TITLE.cardSelect}
        selectedOptionState={{ value: '카카오뱅크', setValue: () => {} }}
      />
    ),
  },
};

export const SelectedHyndaiCard: Story = {
  args: {
    title: TITLE.cardSelect,
    caption: CAPTION.cardSelect,
    children: (
      <Dropdown
        optionArray={OPTION.cardSelect}
        selectText={TITLE.cardSelect}
        selectedOptionState={{ value: '현대카드', setValue: () => {} }}
      />
    ),
  },
};

export const SelectedWooriCard: Story = {
  args: {
    title: TITLE.cardSelect,
    caption: CAPTION.cardSelect,
    children: (
      <Dropdown
        optionArray={OPTION.cardSelect}
        selectText={TITLE.cardSelect}
        selectedOptionState={{ value: '우리카드', setValue: () => {} }}
      />
    ),
  },
};

export const SelectedLotteCard: Story = {
  args: {
    title: TITLE.cardSelect,
    caption: CAPTION.cardSelect,
    children: (
      <Dropdown
        optionArray={OPTION.cardSelect}
        selectText={TITLE.cardSelect}
        selectedOptionState={{ value: '롯데카드', setValue: () => {} }}
      />
    ),
  },
};

export const SelectedHanaCard: Story = {
  args: {
    title: TITLE.cardSelect,
    caption: CAPTION.cardSelect,
    children: (
      <Dropdown
        optionArray={OPTION.cardSelect}
        selectText={TITLE.cardSelect}
        selectedOptionState={{ value: '하나카드', setValue: () => {} }}
      />
    ),
  },
};

export const SelectedKBCard: Story = {
  args: {
    title: TITLE.cardSelect,
    caption: CAPTION.cardSelect,
    children: (
      <Dropdown
        optionArray={OPTION.cardSelect}
        selectText={TITLE.cardSelect}
        selectedOptionState={{ value: '국민카드', setValue: () => {} }}
      />
    ),
  },
};
