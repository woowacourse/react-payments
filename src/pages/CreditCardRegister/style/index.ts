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
    cursor: pointer;
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
`;

export const RelativeBox = styled.div`
    position: relative;
`;

type FlexBoxProps = {
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'center';
};

export const FlexBox = styled.div<FlexBoxProps>`
    display: flex;
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
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
    cursor: pointer;
`;

export const HiddentInput = styled.input`
    opacity: 0;
    position: absolute;
    text-align: center;
    bottom: 0;
    left: 0;
    right: 0;
    outline: none;
    border: none;
    background: #ECEBF1;
    height: 48px;
    font-size: 18px;
    color: #ECEBF1;
    caret-color: black;
`;

export const PasswordBox = styled.div`
    width: 48px;
    height: 48px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ECEBF1;
    border-radius: 7px;
`;

export const QuestionBox = styled.div`
    border: 1px solid #BABABA;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
`;

export const QuestionMark = styled.div`
    padding-left: 11px;
    padding-right: 11px;
    padding-top: 9px;
`;

export const ErrorMessage = styled.div`
    font-size: 12px;
    color: red;
    margin-top: 5px;
    margin-bottom: 5px;
`;
