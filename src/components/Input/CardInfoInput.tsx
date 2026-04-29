import styled from '@emotion/styled';

type InputType = { type: 'card-number' } | { type: 'exp'; expType: 'month' | 'year' } | { type: 'cvc' };

interface CardInfoInputProps {
    value: string;
    setValue: (value: string) => void;
    // input에 더이상 입력이 되지 않게 하기 위한 용도의 validator를 추가로 받고 handleInputChange에서 validator 결과가 true일 때만 setValue 호출하도록
    validator: (value: string) => boolean;
    type: InputType;
}

interface CardInfoInputStyleProps {
    inputType: 'card-number' | 'exp' | 'cvc';
}

export default function CardInfoInput({ value, setValue, validator, type }: CardInfoInputProps) {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        const tmpValue = e.target.value;
        if (!validator(tmpValue)) return;
        setValue(tmpValue);
    };

    return <InputStyle value={value} onChange={(e) => handleInputChange(e)} inputType={type.type} />;
}

const InputStyle = styled.input<CardInfoInputStyleProps>`
    border: 1px solid #acacac;
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
`;
