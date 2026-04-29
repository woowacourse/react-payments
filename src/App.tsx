import { useState } from 'react';
import CardInputWrapper from './components/CardInputWrapper';
import { getCardNumberErrorMessage } from './utils/getCardNumberErrorMessage';
import CardInfoInput from './components/Input/CardInfoInput';
import { isCardNumber } from './utils/isCardNumber';

function App() {
    const [firstCardNumber, setFirstCardNumber] = useState('');
    const [secondCardNumber, setSecondCardNumber] = useState('');
    const [thirdCardNumber, setThirdCardNumber] = useState('');
    const [fourthCardNumber, setFourthCardNumber] = useState('');
    // TODO 커링, useReducer 등의 상태 관리 방식 변경 고려

    const cardNumberValues = [firstCardNumber, secondCardNumber, thirdCardNumber, fourthCardNumber];
    return (
        <>
            <CardInputWrapper validator={getCardNumberErrorMessage} value={cardNumberValues}>
                <CardInfoInput
                    value={firstCardNumber}
                    setValue={setFirstCardNumber}
                    type={{ type: 'card-number' }}
                    placeHolder="1234"
                    validator={isCardNumber}
                />
                <CardInfoInput
                    value={secondCardNumber}
                    setValue={setSecondCardNumber}
                    type={{ type: 'card-number' }}
                    placeHolder="1234"
                    validator={isCardNumber}
                />
                <CardInfoInput
                    value={thirdCardNumber}
                    setValue={setThirdCardNumber}
                    type={{ type: 'card-number' }}
                    placeHolder="1234"
                    validator={isCardNumber}
                />
                <CardInfoInput
                    value={fourthCardNumber}
                    setValue={setFourthCardNumber}
                    type={{ type: 'card-number' }}
                    placeHolder="1234"
                    validator={isCardNumber}
                />
            </CardInputWrapper>
        </>
    );
}

export default App;
