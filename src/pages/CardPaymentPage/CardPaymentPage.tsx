import { useFunnel } from '../../hooks/useFunnel';
import CardNumberInput from '../../component/CardNumberInput/CardNumberInput';
import { Dropdown } from '../../component/@common/Dropdown/Dropdown';
import CardPeriodInput from '../../component/CardPeriod/CardPeriodInput';
import CardCVCInput from '../../component/CardCVCInput/CardCVCInput';
import Card from '../../component/Card/Card';
import { STEPS } from '../../constants/cardConfig';
import CardPasswordInput from '../../component/CardPasswordInput/CardPasswordInput';
import Title from '../../component/@common/Title/Title';
import {
  cardPaymentContentContainer,
  cardPaymentFormContainer,
  cardPaymentLayout,
} from './CardPayment.style';

const CardPaymentPage = () => {
  const { Funnel, setStep } = useFunnel<typeof STEPS>({
    steps: STEPS,
    step: STEPS[0],
  });

  return (
    <div css={cardPaymentLayout}>
      <div css={cardPaymentContentContainer}>
        <Card />
        <div css={cardPaymentFormContainer}>
          <Funnel>
            <Funnel.Step name={STEPS[0]}>
              <CardNumberInput onNext={() => setStep(STEPS[1])} />
            </Funnel.Step>

            <Funnel.Step name={STEPS[1]}>
              <Title>
                <Title.Text>카드사를 선택해주세요</Title.Text>
              </Title>
              <Dropdown
                placeholder="카드사를 선택해주세요"
                onNext={() => setStep(STEPS[2])}
              >
                <Dropdown.Option value="bc">BC카드</Dropdown.Option>
                <Dropdown.Option value="shinhan">신한카드</Dropdown.Option>
                <Dropdown.Option value="kakao">카카오뱅크</Dropdown.Option>
                <Dropdown.Option value="hyundai">현대카드</Dropdown.Option>
                <Dropdown.Option value="woori">우리카드</Dropdown.Option>
                <Dropdown.Option value="lotte">롯데카드</Dropdown.Option>
                <Dropdown.Option value="hana">하나카드</Dropdown.Option>
                <Dropdown.Option value="kb">국민카드</Dropdown.Option>
              </Dropdown>
            </Funnel.Step>

            <Funnel.Step name={STEPS[2]}>
              <CardPeriodInput onNext={() => setStep(STEPS[3])} />
            </Funnel.Step>

            <Funnel.Step name={STEPS[3]} onNext={() => {}}>
              <CardCVCInput onNext={() => setStep(STEPS[4])} />
            </Funnel.Step>

            <Funnel.Step name={STEPS[4]}>
              <CardPasswordInput />
            </Funnel.Step>
          </Funnel>
        </div>
      </div>
    </div>
  );
};

export default CardPaymentPage;
