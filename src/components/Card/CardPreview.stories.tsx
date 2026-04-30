import type { Meta, StoryObj } from '@storybook/react';
import CardPreview from './CardPreview';

const meta: Meta<typeof CardPreview> = {
    title: 'Components/CardPreview',
    component: CardPreview,
};

export default meta;
type Story = StoryObj<typeof CardPreview>;

export const Empty: Story = {
    args: {
        cardNumbers: ['', '', '', ''],
        EXP: ['', ''],
    },
};

export const Full: Story = {
    args: {
        cardNumbers: ['1234', '1234', '1234', '1234'],
        EXP: ['12', '55'],
    },
};

export const VisaFull: Story = {
    args: {
        cardNumbers: ['4234', '1234', '1234', '1234'],
        EXP: ['12', '55'],
    },
};

export const MasterCardFull: Story = {
    args: {
        cardNumbers: ['5134', '1234', '1234', '1234'],
        EXP: ['12', '55'],
    },
};

export const Partial: Story = {
    args: {
        cardNumbers: ['1234', '5678', '', ''],
        EXP: ['12', ''],
    },
};
