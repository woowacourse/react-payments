import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import CardBrandSelect from './CardBrandSelect';
import { BRAND_SELECT_OPTIONS } from '../../constants/BRAND_SELECT_OPTIONS';
import type { CardBrandValue } from '../../types/CardBrandValue';

const meta: Meta<typeof CardBrandSelect> = {
    title: 'Components/CardBrandSelect',
    component: CardBrandSelect,
};

export default meta;
type Story = StoryObj<typeof CardBrandSelect>;

export const Default: Story = {
    render: () => {
        const [selected, setSelected] = useState<CardBrandValue>('');
        return (
            <CardBrandSelect
                options={BRAND_SELECT_OPTIONS}
                placeholder="카드사를 선택해주세요"
                selectedValue={selected}
                setSelectedValue={setSelected}
            />
        );
    },
};

export const WithSelection: Story = {
    render: () => {
        const [selected, setSelected] = useState<CardBrandValue>('BC');
        return (
            <CardBrandSelect
                options={BRAND_SELECT_OPTIONS}
                placeholder="카드사를 선택해주세요"
                selectedValue={selected}
                setSelectedValue={setSelected}
            />
        );
    },
};
