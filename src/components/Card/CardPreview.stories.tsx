import type { Meta, StoryObj } from '@storybook/react';
import CardPreview from './CardPreview';

const meta: Meta<typeof CardPreview> = {
    title: 'Components/CardPreview',
    component: CardPreview,
};

export default meta;
type Story = StoryObj<typeof CardPreview>;

export const Default: Story = {
    args: {
        cardNumbers: ['1234', '5678', '9012', '3456'],
        EXP: ['12', '26'],
    },
};

export const Empty: Story = {
    args: {
        cardNumbers: ['', '', '', ''],
        EXP: ['', ''],
    },
};

export const Partial: Story = {
    args: {
        cardNumbers: ['1234', '5678', '', ''],
        EXP: ['12', ''],
    },
};
