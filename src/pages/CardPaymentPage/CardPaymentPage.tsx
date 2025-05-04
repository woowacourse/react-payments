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
  cardPaymentLayout,
} from './CardPayment.style';
import { CardBrand, useCard } from '../../context/CardContext';
import useEasyNavigate from '../../hooks/useEasyNavigate';
import { Button } from '../../component/@common/Button/Button';
import { useFunnel } from '../../component/@common/Funnel/hooks/useFunnel';

const CardPaymentPage = () => {
  const { Funnel, setStep } = useFunnel<typeof STEPS>({
    steps: STEPS,
    step: STEPS[0],
  });

  const { cardBrand } = useCard();
  const { goHome } = useEasyNavigate();

  const handleBackButtonClick = (stepNumber: number) => {
    const stepIndex = stepNumber - 1;

    if (stepIndex === 0) {
      goHome();
    } else {
      const prevStep = STEPS[stepIndex - 1];
      setStep(() => prevStep);
    }
  };

  return (
    <div css={cardPaymentLayout}>
      <div css={cardPaymentContentContainer}>
        <Card />

        <Funnel>
          <Funnel.Step name={STEPS[0]}>
            <CardNumberInput
              onNext={() => setStep(STEPS[1])}
              onClickBackButton={() => handleBackButtonClick(1)}
            />
          </Funnel.Step>

          <Funnel.Step name={STEPS[1]}>
            <Title>
              <Title.Text>카드사를 선택해주세요</Title.Text>
            </Title>
            <Dropdown
              placeholder="카드사를 선택해주세요"
              onNext={() => setStep(STEPS[2])}
              value={cardBrand.selected ?? ''}
              onChange={(value) => cardBrand.setSelected(value as CardBrand)}
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
            <Button variant="small" onClick={() => handleBackButtonClick(2)}>
              뒤로가기
            </Button>
            <Button
              variant="small"
              colorVariant="gray"
              onClick={() => setStep(STEPS[2])}
            >
              다음
            </Button>
          </Funnel.Step>

          <Funnel.Step name={STEPS[2]}>
            <CardPeriodInput
              onNext={() => setStep(STEPS[3])}
              onClickBackButton={() => handleBackButtonClick(3)}
            />
          </Funnel.Step>

          <Funnel.Step name={STEPS[3]} onNext={() => {}}>
            <CardCVCInput
              onNext={() => setStep(STEPS[4])}
              onClickBackButton={() => handleBackButtonClick(4)}
            />
          </Funnel.Step>

          <Funnel.Step name={STEPS[4]}>
            <CardPasswordInput
              onClickBackButton={() => handleBackButtonClick(5)}
            />
          </Funnel.Step>
        </Funnel>
      </div>
    </div>
  );
};

export default CardPaymentPage;
