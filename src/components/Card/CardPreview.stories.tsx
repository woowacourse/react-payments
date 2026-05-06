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
        cardNumbers: { first: '', second: '', third: '', fourth: '' },
        EXP: { mm: '', yy: '' },
    },
};

export const Full: Story = {
    args: {
        cardNumbers: { first: '1234', second: '1234', third: '1234', fourth: '1234' },
        EXP: { mm: '12', yy: '55' },
    },
};

export const VisaFull: Story = {
    args: {
        cardNumbers: { first: '4234', second: '1234', third: '1234', fourth: '1234' },
        EXP: { mm: '12', yy: '55' },
    },
};

export const MasterCardFull: Story = {
    args: {
        cardNumbers: { first: '5134', second: '1234', third: '1234', fourth: '1234' },
        EXP: { mm: '12', yy: '55' },
    },
};

export const Partial: Story = {
    args: {
        cardNumbers: { first: '1234', second: '5678', third: '', fourth: '' },
        EXP: { mm: '12', yy: '' },
    },
};
