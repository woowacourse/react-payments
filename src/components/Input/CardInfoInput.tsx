import styled from '@emotion/styled';
import { useState } from 'react';

type InputType = 'card-number' | 'exp' | 'cvc';

interface CardInfoInputProps {
    value: string;
    setValue: (value: string) => void;
    // input에 에러메세지가 등장할 수 있는 경우에 border 색을 변경해주기 위한 용도의 validator
    validator: (value: string) => boolean;
    maxLength?: number;
    placeHolder?: string;
    type: InputType;
}

interface CardInfoInputStyleProps {
    inputType: InputType;
    isNotValidate: boolean;
}

export default function CardInfoInput({
    value,
    setValue,
    validator,
    placeHolder,
    type,
    maxLength,
}: CardInfoInputProps) {
    const [isNotValidate, setIsNotValidate] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        const tmpValue = e.target.value;
        // blockOption을 props로 두는 방식이 더 범용성 측면에서 좋을 수도 있을 것 같아서 고민할 점..
        if (Number.isNaN(Number(tmpValue))) return;
        setValue(tmpValue);
        if (!validator(tmpValue)) setIsNotValidate(true);
        else setIsNotValidate(false);
    };

    return (
        <InputStyle
            isNotValidate={isNotValidate}
            type="text"
            value={value}
            onChange={(e) => handleInputChange(e)}
            inputType={type}
            placeholder={placeHolder}
            maxLength={maxLength}
        />
    );
}

const InputStyle = styled.input<CardInfoInputStyleProps>`
    border: 1px solid ${(props) => (props.isNotValidate ? '#FF3D3D' : '#acacac')};
    &::placeholder {
        color: #acacac;
    }
    border-radius: 2px;
    height: 32px;
    width: ${({ inputType }) => {
        if (inputType === 'card-number') return '71px';
        if (inputType === 'exp') return '152px';
        if (inputType === 'cvc') return '315px';
    }};
    padding: 8px;
    box-sizing: border-box;
`;
