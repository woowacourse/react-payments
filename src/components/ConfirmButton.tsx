import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

interface ConfirmButtonProps<TState = unknown> {
    to: string;
    purpose: 'submit' | 'confirm';
    state?: TState;
}

export default function ConfirmButton<TState = unknown>({ to, purpose, state }: ConfirmButtonProps<TState>) {
    return (
        <ConfirmButtonStyled purpose={purpose} to={to} state={state}>
            확인
        </ConfirmButtonStyled>
    );
}

const BUTTON_SIZE = {
    submit: { width: '100%', height: '44px', borderRadius: '0px' },
    confirm: { width: '320px', height: '44px', borderRadius: '5px' },
};

const ConfirmButtonStyled = styled(Link)<{ isRounded?: boolean; purpose: 'submit' | 'confirm' }>`
    width: ${({ purpose }) => BUTTON_SIZE[purpose].width};
    height: ${({ purpose }) => BUTTON_SIZE[purpose].height};
    border-radius: ${({ purpose }) => BUTTON_SIZE[purpose].borderRadius};
    background-color: #333333;
    color: #f3f3f3;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
`;
