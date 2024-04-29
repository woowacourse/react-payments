import { useNavigate } from 'react-router-dom';
import CardPreview from '../../components/CardPreview/CardPreview';
import CardCVCNumberInputField from '../../components/Field/CardCVCNumberInputField/CardCVCNumberInputField';
import CardCompanySelectField from '../../components/Field/CardCompanySelectField/CardCompanySelectField';
import CardExpirationDateInputField from '../../components/Field/CardExpirationDateInputField/CardExpirationDateInputField';
import CardNumbersInputField from '../../components/Field/CardNumbersInputField/CardNumbersInputField';
import CardOwnerNameInputField from '../../components/Field/CardOwnerNameInputField/CardOwnerNameInputField';
import CardPasswordInputField from '../../components/Field/CardPasswordInputField/CardPasswordInputField';
import ShelfHeader from '../../components/ShelfHeader/ShelfHeader';
import ShelfSection from '../../components/ShelfSection/ShelfSection';
import BottomButton from '../../components/common/BottomButton/BottomButton';
import Form from '../../components/common/Form/Form';
import useCardNumbers from '../../hooks/useCardNumbers';
import useExpirationDate from '../../hooks/useExpirationDate';
import useOwnerName from '../../hooks/useOwnerName';
import useNumberInput from '../../hooks/useNumberInput';
import useDropdown from '../../hooks/useDropdown';
import { CardCompany } from '../../types/cardCompany';
import useShowCase from '../../hooks/useShowCase';

const AddNewCardPage = () => {
  const cardNumbers = useCardNumbers();
  const cardCompany = useDropdown<CardCompany>();
  const expirationDate = useExpirationDate();
  const ownerName = useOwnerName();
  const CVCNumbers = useNumberInput(3);
  const password = useNumberInput(2);

  const isValidList = {
    cardNumbers: cardNumbers.isValid,
    cardCompany: cardCompany.selected !== null,
    expirationDate: expirationDate.isValid,
    ownerName: ownerName.isValid,
    CVCNumbers: CVCNumbers.isValid,
    password: password.isValid,
  };
  const showOrder = ['cardNumbers', 'cardCompany', 'expirationDate', 'ownerName', 'CVCNumbers', 'password'];
  const { showCase } = useShowCase(showOrder, isValidList);

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(`/complete-add-new-card`, {
      state: {
        firstCardNumberUnit: cardNumbers.value[0],
        cardCompany: cardCompany.selected,
      },
    });
  };

  return (
    <Form>
      <CardPreview
        cardNumbers={cardNumbers.value}
        expirationDate={expirationDate.value}
        ownerName={ownerName.value}
        cardCompany={cardCompany.selected}
        CVCNumbers={CVCNumbers.value}
      />
      {showCase.password && (
        <ShelfSection>
          <ShelfHeader title='비밀번호를 입력해 주세요' description='앞의 2자리를 입력해주세요' />
          <CardPasswordInputField
            password={password.value}
            handlePassword={password.setValue}
            errorMessage={password.errorMessage}
          />
        </ShelfSection>
      )}
      {showCase.CVCNumbers && (
        <ShelfSection>
          <ShelfHeader title='CVC 번호를 입력해 주세요' />
          <CardCVCNumberInputField
            CVCNumber={CVCNumbers.value}
            handleCVCNumber={CVCNumbers.setValue}
            errorMessage={CVCNumbers.errorMessage}
          />
        </ShelfSection>
      )}
      {showCase.ownerName && (
        <ShelfSection>
          <ShelfHeader title='카드 소유자 이름을 입력해 주세요' description='본인 명의의 카드만 결제 가능합니다' />
          <CardOwnerNameInputField
            ownerName={ownerName.value}
            handleOwnerName={ownerName.handleOwnerNameChange}
            errorMessage={ownerName.errorMessage}
          />
        </ShelfSection>
      )}
      {showCase.expirationDate && (
        <ShelfSection>
          <ShelfHeader title='카드 유효기간을 입력해 주세요' description='월/년도(MMYY)를 순서대로 입력해 주세요' />
          <CardExpirationDateInputField
            expirationDate={expirationDate.value}
            errorMessages={expirationDate.errorMessages}
            handleExpirationDateChange={expirationDate.handleExpirationDateChange}
          />
        </ShelfSection>
      )}
      {showCase.cardCompany && (
        <ShelfSection>
          <ShelfHeader title='카드사를 선택해 주세요' description='현재 국내 카드사만 가능합니다' />
          <CardCompanySelectField
            cardCompany={cardCompany.selected}
            handleSelectCardCompany={cardCompany.handleSelect}
            errorMessage={cardCompany.errorMessage}
          />
        </ShelfSection>
      )}
      {showCase.cardNumbers && (
        <ShelfSection>
          <ShelfHeader title='결제할 카드 번호를 입력해 주세요' description='본인 명의의 카드만 결제 가능합니다' />
          <CardNumbersInputField
            cardNumbers={cardNumbers.value}
            handleCardNumbers={cardNumbers.handleCardNumbersChange}
            errorMessages={cardNumbers.errorMessages}
          />
        </ShelfSection>
      )}
      <>
        {Object.values(isValidList).every((value) => value === true) && (
          <BottomButton name='확인' onClick={handleSubmit} />
        )}
      </>
    </Form>
  );
};

export default AddNewCardPage;
