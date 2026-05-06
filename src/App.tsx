import styled from '@emotion/styled';
import { getCardNumberErrorMessage } from './utils/getCardNumberErrorMessage';
import CardInfoSection from './components/CardInfoSection';
import { getCVCumberErrorMessage } from './utils/getCVCNumberErrorMessage';
import { getEXPNumberErrorMessage } from './utils/getEXPNumberErrorMessage';
import CardPreview from './components/Card/CardPreview';
import CardNumberInputWrapper from './components/InputWrapper/CardNumberInputWrapper';
import EXPInputWrapper from './components/InputWrapper/EXPInputWrapper';
import CVCInputWrapper from './components/InputWrapper/CVCInputWrapper';
import { useCardInfoValue } from './hooks/useCardInfoValue';

function App() {
    const {
        cardNumbers,
        setCardNumber,
        cardBrand,
        setCardBrand,
        EXPNumbers,
        setEXPNumber,
        cvc,
        setCVC,
        password,
        setPassword,
        isSatisfyCardNumber,
        isSatisfyCardBrand,
        isSatisfyEXP,
        isSatisfyCVC,
        isSatisfyPassword,
    } = useCardInfoValue();

    // 여기서 input state 별로 어디 보여줄지 관리
    // 카드 번호 -> 카드사 -> 유효기간 -> CVC -> 비밀번호 순서

    return (
        <MainContainer>
            <CardPreview cardNumbers={cardNumbers} EXP={EXPNumbers} />
            <InputSectionContainer>
                <CardInfoSection
                    title="비밀번호"
                    caption="앞의 2자리를 입력해 주세요"
                    inputLabel="비밀번호 앞 2자리"
                    isRender={isSatisfyCVC()}
                >
                    ㅇ
                </CardInfoSection>
                <CardInfoSection title="CVC 번호를 입력해 주세요" inputLabel="CVC" isRender={isSatisfyEXP()}>
                    <CVCInputWrapper setCVCNumber={setCVC} validator={getCVCumberErrorMessage} value={cvc} />
                </CardInfoSection>
                <CardInfoSection
                    title="카드 유효기간을 입력해 주세요"
                    caption="월/년도(MMYY)를 순서대로 입력해 주세요"
                    inputLabel="유효기간"
                    isRender={isSatisfyCardBrand()}
                >
                    <EXPInputWrapper
                        setEXPNumber={setEXPNumber}
                        validator={getEXPNumberErrorMessage}
                        value={EXPNumbers}
                    />
                </CardInfoSection>
                <CardInfoSection
                    title="카드사를 선택해 주세요"
                    caption="현재 국내 카드사만 가능합니다."
                    isRender={isSatisfyCardNumber()}
                >
                    ㅇ
                </CardInfoSection>

                <CardInfoSection
                    title="결제할 카드 번호를 입력해 주세요"
                    caption="본인 명의의 카드만 결제 가능합니다."
                    inputLabel="카드 번호"
                >
                    <CardNumberInputWrapper
                        setCardNumber={setCardNumber}
                        validator={getCardNumberErrorMessage}
                        value={cardNumbers}
                    />
                </CardInfoSection>
            </InputSectionContainer>
        </MainContainer>
    );
}

export default App;

const InputSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const MainContainer = styled.main`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 45px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
