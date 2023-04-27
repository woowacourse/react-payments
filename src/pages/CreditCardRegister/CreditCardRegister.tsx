import CreditCard from 'components/CreditCard';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// import * as Type from 'types';
import useCreditCardList from 'hooks/useCreditCardList';
import Modal from 'components/Modal';
import useModal from 'hooks/useModal';
import useCreditCardForm from 'hooks/useCreditCardForm';
import CreditCardNumberInput from './inputs/CreditCardNumberInput';
import CreditCardExpiryInput from './inputs/CreditCardExpiryInput';
import CreditCardOwnerInput from './inputs/CreditCardOwnerInput';
import CreditCardCVCInput from './inputs/CreditCardCVCInput';
import CreditCardPasswordInput from './inputs/CreditCardPasswordInput';
import * as S from './style';
import CreditCardCompanyInput from './inputs/CreditCardCompanyInput';

function CreditCardRegister() {
  const navigate = useNavigate();
  const { saveCreditCard } = useCreditCardList();
  const { modalOpen, openModal, closeModal } = useModal();

  const { creditCardForm, isCreditCardError } = useCreditCardForm();

  const handleSubmit = () => {
    if (isCreditCardError) return;

    saveCreditCard(creditCardForm);
    navigate('/');
  };

  useEffect(() => {
    openModal();
  }, []);

  return (
    <>
      <S.CreditCardRegisterLayout>
        <S.CreditCardRegisterTopSheet>
          <S.HomeButton type="button" onClick={() => navigate('/')}>{`${'<'}`}</S.HomeButton>
          <S.CreditCardRegisterHeader>카드 추가</S.CreditCardRegisterHeader>
        </S.CreditCardRegisterTopSheet>
        <S.PreviewCreditCard>
          <CreditCard
            fullFilled={false}
            creditCard={{
              companyId: creditCardForm.companyId,
              number: creditCardForm.number,
              expiry: creditCardForm.expiry,
              owner: creditCardForm.owner,
            }}
          />
        </S.PreviewCreditCard>
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
          <S.ButtonWrapper>
            <S.RegisterButton
              disabled={isCreditCardError}
              type="submit"
              onClick={() => handleSubmit()}
            >
              확인
            </S.RegisterButton>
          </S.ButtonWrapper>
        </S.CreditCardRegisterForm>
      </S.CreditCardRegisterLayout>
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
