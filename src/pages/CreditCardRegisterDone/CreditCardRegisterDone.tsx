import CreditCardNicknameInputForm from 'components/CreditCardNicknameInputForm';
import ControlButton from 'components/ControlButton';
import useCreditCardForm from 'hooks/useCreditCardForm';
import CreditCardRegisterLayout from 'components/CreditCardRegisterLayout';
import CreditCardRegisterTitle from 'components/CreditCardRegisterTitle';
import FlexBox from 'components/FlexBox';

function CreditCardRegisterDone() {
  const { creditCardForm } = useCreditCardForm();
  return (
    <CreditCardRegisterLayout>
      <FlexBox justifyContent="center">
        <CreditCardRegisterTitle>카드 등록이 완료되었습니다.</CreditCardRegisterTitle>
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
