import type { Meta, StoryObj } from '@storybook/react';
import CardPreview from './CardPreview';

const meta: Meta<typeof CardPreview> = {
    title: 'Components/CardPreview',
    component: CardPreview,
};

export default meta;
type Story = StoryObj<typeof CardPreview>;

const emptyCardFirm = { value: '', label: '' };

export const Empty: Story = {
    args: {
        cardNumbers: { first: '', second: '', third: '', fourth: '' },
        EXP: { mm: '', yy: '' },
        cardFirm: emptyCardFirm,
    },
};

export const Partial: Story = {
    args: {
        cardNumbers: { first: '1234', second: '5678', third: '', fourth: '' },
        EXP: { mm: '12', yy: '' },
        cardFirm: emptyCardFirm,
    },
};

export const Visa: Story = {
    args: {
        cardNumbers: { first: '4234', second: '1234', third: '1234', fourth: '1234' },
        EXP: { mm: '12', yy: '55' },
        cardFirm: emptyCardFirm,
    },
};

export const MasterCard: Story = {
    args: {
        cardNumbers: { first: '5134', second: '1234', third: '1234', fourth: '1234' },
        EXP: { mm: '12', yy: '55' },
        cardFirm: emptyCardFirm,
    },
};

export const BC: Story = {
    args: {
        cardNumbers: { first: '1234', second: '1234', third: '1234', fourth: '1234' },
        EXP: { mm: '12', yy: '55' },
        cardFirm: { value: 'BC', label: 'BC카드' },
    },
};

export const Shinhan: Story = {
    args: {
        cardNumbers: { first: '1234', second: '1234', third: '1234', fourth: '1234' },
        EXP: { mm: '12', yy: '55' },
        cardFirm: { value: '신한', label: '신한카드' },
    },
};

export const Kakao: Story = {
    args: {
        cardNumbers: { first: '1234', second: '1234', third: '1234', fourth: '1234' },
        EXP: { mm: '12', yy: '55' },
        cardFirm: { value: '카뱅', label: '카카오뱅크' },
    },
};
