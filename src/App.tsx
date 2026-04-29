import styled from '@emotion/styled';
import { useState } from 'react';
import CardInputWrapper from './components/CardInputWrapper';
import { getCardNumberErrorMessage } from './utils/getCardNumberErrorMessage';
import CardInfoInput from './components/Input/CardInfoInput';
import CardInfoSection from './components/CardInfoSection';
import { getCVCumberErrorMessage } from './utils/getCVCNumberErrorMessage';
import { getEXPNumberErrorMessage } from './utils/getEXPNumberErrorMessage';
import { isLengthMatch } from './utils/isLengthMatch';
import { isMonthMatch } from './utils/isMonthMatch';

function App() {
    const [firstCardNumber, setFirstCardNumber] = useState('');
    const [secondCardNumber, setSecondCardNumber] = useState('');
    const [thirdCardNumber, setThirdCardNumber] = useState('');
    const [fourthCardNumber, setFourthCardNumber] = useState('');

    const [expMonth, setEXPMonth] = useState('');
    const [expYear, setEXPYear] = useState('');

    const [cvc, setCVC] = useState('');
    // TODO 커링, useReducer 등의 상태 관리 방식 변경 고려

    const cardNumberValues = [firstCardNumber, secondCardNumber, thirdCardNumber, fourthCardNumber];
    const expValues = [expMonth, expYear];
    return (
        <InputSectionContainer>
            <CardInfoSection
                title="결제할 카드 번호를 입력해 주세요"
                caption="본인 명의의 카드만 결제 가능합니다."
                inputLabel="카드 번호"
            >
                <CardInputWrapper validator={getCardNumberErrorMessage} value={cardNumberValues}>
                    <CardInfoInput
                        value={firstCardNumber}
                        setValue={setFirstCardNumber}
                        type="card-number"
                        placeHolder="1234"
                        validator={(value: string) => isLengthMatch(4, value)}
                        maxLength={4}
                    />
                    <CardInfoInput
                        value={secondCardNumber}
                        setValue={setSecondCardNumber}
                        type="card-number"
                        placeHolder="1234"
                        validator={(value: string) => isLengthMatch(4, value)}
                        maxLength={4}
                    />
                    <CardInfoInput
                        value={thirdCardNumber}
                        setValue={setThirdCardNumber}
                        type="card-number"
                        placeHolder="1234"
                        validator={(value: string) => isLengthMatch(4, value)}
                        maxLength={4}
                    />
                    <CardInfoInput
                        value={fourthCardNumber}
                        setValue={setFourthCardNumber}
                        type="card-number"
                        placeHolder="1234"
                        validator={(value: string) => isLengthMatch(4, value)}
                        maxLength={4}
                    />
                </CardInputWrapper>
            </CardInfoSection>

            <CardInfoSection
                title="카드 유효기간을 입력해 주세요"
                caption="월/년도(MMYY)를 순서대로 입력해 주세요."
                inputLabel="유효기간"
            >
                <CardInputWrapper validator={getEXPNumberErrorMessage} value={expValues}>
                    <CardInfoInput
                        value={expMonth}
                        setValue={setEXPMonth}
                        type="exp"
                        placeHolder="MM"
                        validator={(value: string) => isMonthMatch(value)}
                        maxLength={2}
                    />
                    <CardInfoInput
                        value={expYear}
                        setValue={setEXPYear}
                        type="exp"
                        placeHolder="YY"
                        validator={(value: string) => isLengthMatch(2, value)}
                        maxLength={2}
                    />
                </CardInputWrapper>
            </CardInfoSection>
            <CardInfoSection title="CVC 번호를 입력해 주세요" inputLabel="CVC">
                <CardInputWrapper validator={getCVCumberErrorMessage} value={[cvc]}>
                    <CardInfoInput
                        value={cvc}
                        setValue={setCVC}
                        type="cvc"
                        placeHolder="123"
                        validator={(value: string) => isLengthMatch(3, value)}
                        maxLength={3}
                    />
                </CardInputWrapper>
            </CardInfoSection>
        </InputSectionContainer>
    );
}

export default App;

const InputSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
