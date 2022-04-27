import { useState, useMemo } from 'react';
import Head from '../components/Head';
import styled from 'styled-components';
import Card from '../components/Card';
import LabeledInput from '../components/LabeledInput';

const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardSection = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100%;
  height: 158px;
  padding-top: 25px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 25px 28px 16px;
  gap: 19px;
`;

function CardAddPage() {
  const [companyName, setCompanyName] = useState('포코카드');
  const [cardNumbers, setCardNumbers] = useState([]);
  const [ownerName, setOwnerName] = useState('');
  const [expiredDate, setExpiredData] = useState({ month: 0, year: 0 });

  const convertedCardNumber = useMemo(() => {
    return cardNumbers
      .map((cardNumber, index) => (index >= 2 ? '●'.repeat(cardNumber.length) : cardNumber))
      .join('-');
  }, [cardNumbers]);

  const handleChangeCardNumbersInput = ({ target }) => {
    const changedNumber = target.value;
    convertedCardNumber.find((number, index) => number !== changedNumber[index]);
    // 11112222-0000-0000
  };

  const handleChangeOwnerNameInput = ({ target }) => {
    console.log('hello');
    setOwnerName(target.value);
  };

  return (
    <Page>
      <Head title="카드 추가" />
      <CardSection>
        <Card
          companyName={companyName}
          cardNumbers={cardNumbers}
          ownerName={ownerName}
          expiredDate={expiredDate}
        />
      </CardSection>
      <Form>
        <LabeledInput
          value={convertedCardNumber}
          isShowLengthChecker={false}
          countInput={1}
          inputProps={{
            type: 'text',
            width: '318px',
            isCenter: true,
            maxLength: 19,
            placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
          }}
          inputLabelProps={{
            label: '카드 번호',
          }}
        />
        <LabeledInput
          value=""
          isShowLengthChecker={false}
          countInput={1}
          inputProps={{
            type: 'text',
            width: '137px',
            isCenter: true,
            maxLength: 5,
            placeholder: 'MM / YY',
          }}
          inputLabelProps={{
            label: '만료일',
          }}
        />
        <LabeledInput
          value={ownerName}
          handleInputChange={handleChangeOwnerNameInput}
          headerWidth="318px"
          isShowLengthChecker={true}
          countInput={1}
          inputProps={{
            type: 'text',
            width: '318px',
            placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
            isCenter: false,
            maxLength: 30,
          }}
          inputLabelProps={{
            label: '카드 소유자 이름(선택)',
          }}
        />
        <LabeledInput
          value=""
          isShowLengthChecker={false}
          countInput={1}
          inputProps={{
            type: 'password',
            width: '84px',
            isCenter: true,
            maxLength: 3,
          }}
          inputLabelProps={{
            label: '보안 코드(CVC/CVV)',
          }}
        />
        <LabeledInput
          value=""
          isShowLengthChecker={false}
          countInput={4}
          inputProps={{
            type: 'pass',
            width: '43px',
            isCenter: true,
            maxLength: 1,
          }}
          inputLabelProps={{
            label: '카드 비밀번호',
          }}
        />
      </Form>
    </Page>
  );
}

export default CardAddPage;
