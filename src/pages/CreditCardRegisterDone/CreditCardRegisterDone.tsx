import CreditCardNicknameInputForm from 'components/CreditCardNicknameInputForm';
import ControlButton from 'components/ControlButton';
import useCreditCardForm from 'hooks/useCreditCardForm';
import CreditCardRegisterLayout from 'components/CreditCardRegisterLayout';
import CreditCardRegisterTitle from 'components/CreditCardRegisterTitle';
import FlexBox from 'components/FlexBox';
import Box from 'components/Box';
import { useState } from 'react';
// import useCreditCardList from 'hooks/useCreditCardList';
import { useNavigate } from 'react-router-dom';
import { creditCardListStore } from 'stores/creditCardListStore';

function CreditCardRegisterDone() {
  const { creditCardForm } = useCreditCardForm();
  // const { updateCreditCardNickname } = useCreditCardList();
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();
  const handleNicknameInput = () => {
    // updateCreditCardNickname(creditCardForm.number, nickname);
    creditCardListStore.updateNickname(creditCardForm.number, nickname);
    navigate('/');
  };

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
        onClick={handleNicknameInput}
        label={nickname.length > 0 ? '확인' : '건너뛰기'}
      />
    </CreditCardRegisterLayout>
  );
}
export default CreditCardRegisterDone;
