import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import ConfirmButton from './ConfirmButton';

const meta: Meta<typeof ConfirmButton> = {
    title: 'Components/ConfirmButton',
    component: ConfirmButton,
    decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
};

export default meta;
type Story = StoryObj<typeof ConfirmButton>;

export const Submit: Story = {
    args: {
        purpose: 'submit',
        onClick: () => {},
    },
};

export const Confirm: Story = {
    args: {
        to: '/',
        purpose: 'confirm',
    },
};
