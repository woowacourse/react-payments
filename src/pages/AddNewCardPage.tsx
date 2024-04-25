import CardPreview from '../components/CardPreview/CardPreview';
import CardCVCNumberInputField from '../components/Field/CardCVCNumberInputField/CardCVCNumberInputField';
import CardCompanySelectField from '../components/Field/CardCompanySelectField/CardCompanySelectField';
import CardExpirationDateInputField from '../components/Field/CardExpirationDateInputField/CardExpirationDateInputField';
import CardNumbersInputField from '../components/Field/CardNumbersInputField/CardNumbersInputField';
import CardOwnerNameInputField from '../components/Field/CardOwnerNameInputField/CardOwnerNameInputField';
import CardPasswordInputField from '../components/Field/CardPasswordInputField/CardPasswordInputField';
import ShelfHeader from '../components/ShelfHeader/ShelfHeader';
import ShelfSection from '../components/ShelfSection/ShelfSection';
import useAddNewCardForm from '../hooks/useAddNewCardForm';

const AddNewCardPage = () => {
  const { values, errorMessage, handlers, showCase, completeList } = useAddNewCardForm();
  /**
   * 이러면 모든 유효성 검사(옳지 않더라도)에서 showcase가실행되게 된다.
   *
   * 그럼 어떻게 아는가?
   *
   * errorMessage가 다 비어있다면 showCase를 실행해야한다.
   */
  return (
    <div>
      <CardPreview
        cardNumbers={values.cardNumbers}
        expirationDate={values.expirationDate}
        ownerName={values.ownerName}
        cardCompany={values.cardCompany}
        CVCNumbers={values.CVCNumbers}
      />
      {showCase.password && (
        <ShelfSection>
          <ShelfHeader title='비밀번호를 입력해 주세요' description='앞의 2자리를 입력해주세요' />
          <CardPasswordInputField
            password={values.password}
            handlePassword={handlers.password}
            errorMessage={errorMessage.password}
          />
        </ShelfSection>
      )}
      {showCase.CVCNumbers && (
        <ShelfSection>
          <ShelfHeader title='CVC 번호를 입력해 주세요' />
          <CardCVCNumberInputField
            CVCNumber={values.CVCNumbers}
            handleCVCNumber={handlers.CVCNumbers}
            errorMessage={errorMessage.CVCNumbers}
          />
        </ShelfSection>
      )}
      {showCase.ownerName && (
        <ShelfSection>
          <ShelfHeader title='카드 소유자 이름을 입력해 주세요' description='본인 명의의 카드만 결제 가능합니다' />
          <CardOwnerNameInputField
            ownerName={values.ownerName}
            handleOwnerName={handlers.ownerName}
            errorMessage={errorMessage.ownerName}
          />
        </ShelfSection>
      )}
      {showCase.expirationDate && (
        <ShelfSection>
          <ShelfHeader title='카드 유효기간을 입력해 주세요' description='월/년도(MMYY)를 순서대로 입력해 주세요' />
          <CardExpirationDateInputField
            expirationDate={values.expirationDate}
            errorMessages={errorMessage.expirationDate}
            handleExpirationDateChange={handlers.expirationDate}
          />
        </ShelfSection>
      )}
      {showCase.cardCompany && (
        <ShelfSection>
          <ShelfHeader title='카드사를 선택해 주세요' description='현재 국내 카드사만 가능합니다' />
          <CardCompanySelectField
            cardCompany={values.cardCompany}
            handleSelectCardCompany={handlers.cardCompany}
            errorMessage={errorMessage.cardCompany}
          />
        </ShelfSection>
      )}
      {showCase.cardNumbers && (
        <ShelfSection>
          <ShelfHeader title='결제할 카드 번호를 입력해 주세요' description='본인 명의의 카드만 결제 가능합니다' />
          <CardNumbersInputField
            cardNumbers={values.cardNumbers}
            handleCardNumbers={handlers.cardNumbers}
            errorMessages={errorMessage.cardNumbers}
          />
        </ShelfSection>
      )}
    </div>
  );
};

export default AddNewCardPage;
