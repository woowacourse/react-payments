import CreditCard from 'components/CreditCard';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Modal from 'components/Modal';
import useModal from 'hooks/useModal';
import useCreditCardForm from 'hooks/useCreditCardForm';
import ControlButton from 'components/ControlButton';
import CreditCardRegisterLayout from 'components/CreditCardRegisterLayout';
import CreditCardRegisterTopSheet from 'components/CreditCardRegisterTopSheet';
import FlexBox from 'components/FlexBox';
import { creditCardListStore } from 'stores/creditCardListStore';
import CreditCardNumberInput from './inputs/CreditCardNumberInput';
import CreditCardExpiryInput from './inputs/CreditCardExpiryInput';
import CreditCardOwnerInput from './inputs/CreditCardOwnerInput';
import CreditCardCVCInput from './inputs/CreditCardCVCInput';
import CreditCardPasswordInput from './inputs/CreditCardPasswordInput';
import * as S from './style';
import CreditCardCompanyInput from './inputs/CreditCardCompanyInput';

function CreditCardRegister() {
  const navigate = useNavigate();
  const { modalOpen, openModal, closeModal } = useModal();
  const { creditCardForm, initCreditCardForm, isCreditCardError } = useCreditCardForm();

  const handleSubmit = () => {
    if (isCreditCardError) return;

    creditCardListStore.addCreditCard(creditCardForm);

    navigate('/register-done');
  };

  useEffect(() => {
    initCreditCardForm();
    openModal();
  }, []);

  return (
    <>
      <CreditCardRegisterLayout>
        <CreditCardRegisterTopSheet>
          <S.HomeButton type="button" onClick={() => navigate('/')}>{`${'<'}`}</S.HomeButton>
          <S.CreditCardRegisterHeader>카드 추가</S.CreditCardRegisterHeader>
        </CreditCardRegisterTopSheet>
        <FlexBox justifyContent="center">
          <CreditCard
            fullFilled={false}
            creditCard={{
              companyId: creditCardForm.companyId,
              number: creditCardForm.number,
              expiry: creditCardForm.expiry,
              owner: creditCardForm.owner,
            }}
          />
        </FlexBox>
        <S.CreditCardRegisterForm>
          <CreditCardNumberInput
            name="number"
          />
          <CreditCardExpiryInput
            name="expiry"
          />
          <CreditCardOwnerInput
            name="owner"
          />
          <CreditCardCVCInput
            name="cvc"
          />
          <CreditCardPasswordInput
            name="password"
          />
          <ControlButton
            disabled={isCreditCardError}
            type="submit"
            onClick={handleSubmit}
          >
            다음
          </ControlButton>
        </S.CreditCardRegisterForm>
      </CreditCardRegisterLayout>
      <Modal modalOpen={modalOpen}>
        <CreditCardCompanyInput
          closeModal={closeModal}
          name="companyId"
        />
      </Modal>

    </>
  );
}
export default CreditCardRegister;
