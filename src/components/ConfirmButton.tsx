import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

type ConfirmButtonProps<TState = unknown> =
    | { purpose: 'confirm'; to: string; state?: TState; onClick?: never; children?: React.ReactNode }
    | { purpose: 'submit'; to?: never; state?: never; onClick: () => void | Promise<void>; children?: React.ReactNode };

export default function ConfirmButton<TState = unknown>({
    purpose,
    to,
    state,
    onClick,
    children,
}: ConfirmButtonProps<TState>) {
    if (purpose === 'submit') {
        return <SubmitButton onClick={onClick}>{children ?? '확인'}</SubmitButton>;
    }

    return (
        <ConfirmLink to={to} state={state}>
            {children ?? '확인'}
        </ConfirmLink>
    );
}

const sharedStyles = css`
    background-color: #333333;
    color: #f3f3f3;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: none;
    cursor: pointer;
    font-size: inherit;
`;

const SubmitButton = styled.button`
    ${sharedStyles}
    width: 100%;
    border-radius: 0;
`;

const ConfirmLink = styled(Link)`
    ${sharedStyles}
    width: 320px;
    border-radius: 5px;
`;
