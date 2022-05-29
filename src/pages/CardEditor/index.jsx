import { useEffect } from 'react';

import { usePageContext } from 'contexts/PageContext';
import { useCardDataContext } from 'contexts/CardDataContext';

import useModal from 'hooks/useModal';
import useCardState from 'hooks/useCardState';

import Button from 'components/@common/Button';
import ToolTip from 'components/@common/ToolTip';

import {
  Card,
  CardNumberField,
  CardExpireDateField,
  CardUserNameField,
  CardSecurityField,
  CardPasswordField,
  CardCompanyList,
  CardNameField,
} from 'components';

import { PAGE_LIST, CARD_EDITOR_MODE } from 'constants/';
import {
  validateCardNumber,
  validateCardPassword,
  validateExpireDate,
  validateSecurityCode,
  validateUserName,
} from 'validators';

function CardEditor() {
  const { setPageTitle, setPageLocation } = usePageContext();
  const { cardList, currentEditIndex, addCardData, updateCardData } = useCardDataContext();

  useEffect(
    () => setPageTitle(CARD_EDITOR_MODE.NEW === currentEditIndex ? '카드 추가' : '카드 편집'),
    [],
  );

  const { state, onChangeCardState } = useCardState(cardList[currentEditIndex] || null);
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

  const {
    Modal: CompanyModal,
    handleModalOpen: handleCompanyModalOpen,
    handleModalClose: handleCompanyModalClose,
  } = useModal();
  const { Modal: CardNameInputModal, handleModalOpen: handleCardNameInputModalOpen } = useModal();

  const onClickPageSubmit = () => {
    try {
      validateCardNumber(cardNumber);
      validateCardPassword(cardPassword);
      validateExpireDate({ expireMonth, expireYear });
      validateSecurityCode(securityCode);
      userName && validateUserName(userName);
    } catch (error) {
      alert(error.message);
      return;
    }

    handleCardNameInputModalOpen();
  };

  const onClickCardNameSubmit = async () => {
    const newCardData = { ...state };
    delete newCardData.isComplete;

    try {
      CARD_EDITOR_MODE.NEW === currentEditIndex
        ? await addCardData(newCardData)
        : await updateCardData(currentEditIndex, newCardData);
    } catch (error) {
      alert(error.message);
      return;
    }

    setPageLocation(PAGE_LIST.CARD_UPDATED);
  };

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
          <ToolTip align="left" text="모든 입력란을 입력해주세요." isDisabled={isComplete}>
            <Button
              type="primary"
              size="large"
              isDisabled={!isComplete}
              onClick={onClickPageSubmit}
            >
              다음
            </Button>
          </ToolTip>
        </div>

        <CompanyModal>
          <CardCompanyList
            onChange={onChangeCardState}
            handleModalClose={handleCompanyModalClose}
          />
        </CompanyModal>

        <CardNameInputModal>
          <h2>카드 이름을 입력해주세요 😁</h2>
          <CardNameField cardName={cardName} onChange={onChangeCardState} />

          <Button
            type="primary"
            size="large"
            width="100%"
            isDisabled={!cardName}
            onClick={onClickCardNameSubmit}
          >
            다음
          </Button>
        </CardNameInputModal>
      </div>
    </>
  );
}

export default CardEditor;
