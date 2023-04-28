import CreditCardNicknameInputForm from 'components/CreditCardNicknameInputForm';
import ControlButton from 'components/ControlButton';
import useCreditCardForm from 'hooks/useCreditCardForm';
import CreditCardRegisterLayout from 'components/CreditCardRegisterLayout';
import CreditCardRegisterTitle from 'components/CreditCardRegisterTitle';
import FlexBox from 'components/FlexBox';
import Box from 'components/Box';

function CreditCardRegisterDone() {
  const { creditCardForm } = useCreditCardForm();
  return (
    <CreditCardRegisterLayout>
      <FlexBox justifyContent="center">
        <Box mt={15} mb={5}>
          <CreditCardRegisterTitle>카드 등록이 완료되었습니다.</CreditCardRegisterTitle>
        </Box>
      </FlexBox>
      <CreditCardNicknameInputForm creditCardForm={creditCardForm} />
      <ControlButton
        onClick={() => alert('ㅎㅇ')}
        label="확인"
      />
    </CreditCardRegisterLayout>
  );
}
export default CreditCardRegisterDone;
