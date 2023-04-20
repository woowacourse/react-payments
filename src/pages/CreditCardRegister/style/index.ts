import styled from 'styled-components';

export const CreditCardRegisterLayout = styled.div`
    padding: 28px 24px;
`;

export const CreditCardRegisterTopSheet = styled.div`
    display: flex;
    margin-bottom: 25px;
    font-size: 18px;
    align-items: center;
`;

export const HomeButton = styled.button`
    margin-right: 12px;
    margin-bottom: 3px;
`;

export const CreditCardRegisterHeader = styled.h3`
    line-height: 18.75px;
`;

export const PreviewCreditCard = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
`;

export const CreditCardRegisterForm = styled.form`
    display: grid;
    row-gap: 20px;

    #hiddenInput{
        visibility: hidden;
    }
`;

export const Box = styled.div`
    position: relative;
`;

export const FlexBox = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CreditCardRegisterLabel = styled.div`
    font-size: 12px;
    color: #525252;
    margin-bottom: 5px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const ResigerButton = styled.button`
    font-weight: 700;
`;

export const HiddentInput = styled.input`
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
`;
