import useModal from 'hooks/useModal';
import useCardState from 'hooks/useCardState';

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
import CardNameField from 'components/CardNameField';

function CardEditor() {
  const { state, onChangeCardState } = useCardState();
  const {
    cardName,
    companyId,
    cardNumber,
    expireMonth,
    expireYear,
    userName,
    securityCode,
    cardPassword,
    isComplete,
  } = state;

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

  const {
    Modal: CompanyModal,
    handleModalOpen: handleCompanyModalOpen,
    handleModalClose: handleCompanyModalClose,
  } = useModal();

  const { Modal: CardNameModal, handleModalOpen: handleCardNameModalOpen } = useModal();

  return (
    <>
      <div className="layout-side-container">
        <ToolTip text="카드를 클릭하여 카드사를 선택할 수 있습니다." align="bottom">
          <Card
            companyId={companyId}
            cardNumber={cardNumber}
            userName={userName}
            expireMonth={expireMonth}
            expireYear={expireYear}
            onClick={handleCompanyModalOpen}
          />
        </ToolTip>
      </div>

      <div className="layout-main-container">
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
          <Button type="primary" isDisabled={!isComplete} onClick={handleCardNameModalOpen}>
            다음
          </Button>
        </div>

        <CompanyModal>
          <CardCompanyList
            onChange={onChangeCardState}
            handleModalClose={handleCompanyModalClose}
          />
        </CompanyModal>

        <CardNameModal>
          <h2>카드 이름을 입력해주세요 😁</h2>
          <CardNameField cardName={cardName} onChange={onChangeCardState} />

          <Button
            type="primary"
            size="large"
            width="100%"
            isDisabled={!cardName}
            onClick={onClickConfirmButton}
          >
            다음
          </Button>
        </CardNameModal>
      </div>
    </>
  );
}

export default CardEditor;
