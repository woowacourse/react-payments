import useModal from 'hooks/useModal';
import useCardState from 'hooks/useCardState';

import Header from 'components/@common/Header';
import Button from 'components/@common/Button';

import {
  Card,
  CardNumberField,
  CardExpireDateField,
  CardUserNameField,
  CardSecurityField,
  CardPasswordField,
  CardCompanyList,
} from 'components';

import {
  validateCardNumber,
  validateCardPassword,
  validateExpireDate,
  validateSecurityCode,
  validateUserName,
} from 'validators';
import ToolTip from 'components/@common/ToolTip';

function CardAdd() {
  const { state, onChangeCardState } = useCardState();
  const {
    companyId,
    cardNumber,
    expireMonth,
    expireYear,
    userName,
    securityCode,
    cardPassword,
    isComplete,
  } = state;

  const {
    Modal: CompanyModal,
    handleModalOpen: handleCompanyModalOpen,
    handleModalClose: handleCompanyModalClose,
  } = useModal();

  const onClickConfirmButton = () => {
    try {
      validateCardNumber(cardNumber);
      validateCardPassword(cardPassword);
      validateExpireDate({ expireMonth, expireYear });
      validateSecurityCode(securityCode);
      userName && validateUserName(userName);

      alert(`
        리뷰어님 체크용 ✅
        카드사 아이디: ${companyId}
        카드번호: ${cardNumber.join('-')}
        만료일: ${expireMonth} / ${expireYear}
        소유자: ${userName}
        보안 코드: ${securityCode}
        비밀 번호: ${cardPassword}
      `);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form>
      <Header>카드 추가</Header>
      <ToolTip text="카드를 클릭하여 카드사를 선택할 수 있습니다." align="bottom">
        <Card
          companyId={companyId}
          cardNumber={cardNumber}
          userName={userName}
          expireMonth={expireMonth}
          expireYear={expireYear}
          isComplete={isComplete}
          onClick={handleCompanyModalOpen}
        />
      </ToolTip>
      <CardNumberField cardNumber={cardNumber} onChange={onChangeCardState} />
      <CardExpireDateField
        expireMonth={expireMonth}
        expireYear={expireYear}
        onChange={onChangeCardState}
      />
      <CardUserNameField userName={userName} onChange={onChangeCardState} />
      <CardSecurityField securityCode={securityCode} onChange={onChangeCardState} />
      <CardPasswordField cardPassword={cardPassword} onChange={onChangeCardState} />

      <div className="button-container right">
        <Button isDisabled={!isComplete} onClick={onClickConfirmButton}>
          다음
        </Button>
      </div>

      <CompanyModal>
        <CardCompanyList onChange={onChangeCardState} handleModalClose={handleCompanyModalClose} />
      </CompanyModal>
    </form>
  );
}

export default CardAdd;
