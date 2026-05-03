import styled from '@emotion/styled';

type InputType = 'card-number' | 'exp' | 'cvc';

interface CardInfoInputProps {
    value: string;
    setValue: (value: string) => void;
    // input에 에러메세지가 등장할 수 있는 경우에 border 색을 변경해주기 위한 용도의 validator
    validator: (value: string) => string | null;
    isError: boolean;
    maxLength?: number;
    placeHolder?: string;
    type: InputType;
    // CardInputWrapper에 에러 메세지 피드백 제공을 위한 함수
    onError: (message: string | null) => void;
    onBlur?: () => void;
    onFocus?: () => void;
}

interface CardInfoInputStyleProps {
    inputType: InputType;
    isError: boolean;
}

export default function CardInfoInput({
    value,
    setValue,
    validator,
    isError,
    placeHolder,
    type,
    maxLength,
    onError,
    onBlur,
    onFocus,
}: CardInfoInputProps) {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        const tmpValue = e.target.value;
        const error = validator(tmpValue);
        if (error !== null) {
            onError(error);
            return;
        }
        setValue(tmpValue);
        onError(null);
    };

    return (
        <InputStyle
            isError={isError}
            type="text"
            value={value}
            onChange={(e) => handleInputChange(e)}
            inputType={type}
            placeholder={placeHolder}
            maxLength={maxLength}
            onBlur={() => onBlur?.()}
            onFocus={() => onFocus?.()}
        />
    );
}

const InputStyle = styled.input<CardInfoInputStyleProps>`
    border: 1px solid ${({ isError }) => (isError ? '#FF3D3D' : '#acacac')};
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
    &:focus {
        outline: none;
        border-color: #000000 !important;
    }
`;
