import styled from '@emotion/styled';

interface CardInputWrapperProps {
    validator: (value: string[]) => string | null;
    value: string[];
    children: React.ReactNode;
}

export default function CardInputWrapper({ validator, value, children }: CardInputWrapperProps) {
    const errorMessage = validator(value);

    return (
        <CardInputWrapperStyle>
            {children}
            {errorMessage && <ErrorMessageStyle>{errorMessage}</ErrorMessageStyle>}
        </CardInputWrapperStyle>
    );
}

const CardInputWrapperStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const ErrorMessageStyle = styled.p`
    font-size: 9.5px;
    line-height: 100%;
    font-weight: 400;
    color: #ff3d3d;
`;
