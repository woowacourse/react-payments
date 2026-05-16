import styled from '@emotion/styled';

interface CardInputWrapperProps {
    errorMessage?: string | null;
    children: React.ReactNode;
}

export default function CardInputWrapper({ errorMessage, children }: CardInputWrapperProps) {
    return (
        <CardInputWrapperStyle>
            <CardInputArranger>{children}</CardInputArranger>
            <ErrorContainer>{errorMessage && <ErrorMessageStyle>{errorMessage}</ErrorMessageStyle>}</ErrorContainer>
        </CardInputWrapperStyle>
    );
}

const CardInputWrapperStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const CardInputArranger = styled.div`
    display: flex;
    gap: 10px;
`;

const ErrorContainer = styled.div`
    height: 14px;
`;

const ErrorMessageStyle = styled.p`
    font-size: 9.5px;
    line-height: 100%;
    font-weight: 400;
    color: #ff3d3d;
    margin: 0;
`;
