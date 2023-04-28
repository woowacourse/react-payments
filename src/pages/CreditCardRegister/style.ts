import styled from 'styled-components';

export const HomeButton = styled.button`
    margin-right: 12px;
    margin-bottom: 3px;
    cursor: pointer;
`;

export const CreditCardRegisterHeader = styled.h3`
    line-height: 18.75px;
`;

export const CreditCardRegisterForm = styled.form`
    display: grid;
    row-gap: 20px;
`;

export const RelativeBox = styled.div`
    position: relative;
`;

export const CreditCardRegisterLabel = styled.div`
    font-size: 12px;
    color: #525252;
    margin-bottom: 5px;
`;

export const HiddenInput = styled.input`
    pointer-events: none;
    cursor: not-allowed;
    caret-color: transparent;
    position: absolute;
    text-align: center;
    bottom: 0;
    left: 0;
    right: 0;
    border: none;
    background: transparent;
    height: 48px;
    font-size: 18px;
    color: transparent;
    border-radius: 7px;
    :focus {
        outline: none;
        border: 2px solid gray;
    }
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

export const Box = styled.div``;

export const CreditCardCompanyInputLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap:20px;
`;

export const CreditCardCompanyItem = styled.div`
    text-align: center;
    cursor:pointer;
`;

export const CreditCardCompanyImage = styled.img`
    margin-bottom:10px;
`;

export const CreditCardCompanyTitle = styled.div`
    text-overflow:ellipsis;
    white-space:nowrap;
`;
