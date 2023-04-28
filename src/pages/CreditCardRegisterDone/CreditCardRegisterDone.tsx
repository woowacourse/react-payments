import CreditCardNicknameInputForm from 'components/CreditCardNicknameInputForm';
import ControlButton from 'components/ControlButton';
import useCreditCardForm from 'hooks/useCreditCardForm';
import CreditCardRegisterLayout from 'components/CreditCardRegisterLayout';
import CreditCardRegisterTitle from 'components/CreditCardRegisterTitle';
import FlexBox from 'components/FlexBox';
import Box from 'components/Box';
import { useState } from 'react';

function CreditCardRegisterDone() {
  const { creditCardForm } = useCreditCardForm();
  const [nickname, setNickname] = useState('');

  return (
    <CreditCardRegisterLayout>
      <FlexBox justifyContent="center">
        <Box mt={15} mb={5}>
          <CreditCardRegisterTitle>카드 등록이 완료되었습니다.</CreditCardRegisterTitle>
        </Box>
      </FlexBox>
      <Box mb={15}>
        <CreditCardNicknameInputForm
          creditCardForm={creditCardForm}
          nickname={nickname}
          setNickname={setNickname}
        />
      </Box>
      <ControlButton
        onClick={() => alert('ㅎㅇ')}
        label={nickname.length > 0 ? '확인' : '건너뛰기'}
      />
    </CreditCardRegisterLayout>
  );
}
export default CreditCardRegisterDone;
