import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import FormInput from 'components/common/FormInput';
import Modal from 'components/common/Modal';
import Header from 'components/common/Header';
import Button from 'components/common/Button';
import Tooltip from 'components/common/Tooltip';
import Circle from 'components/common/Circle';
import Message from 'components/common/Message';
import CardPreview from 'components/CardPreview';

import useToggle from 'hooks/useToggle';
import { ReactComponent as PrevIcon } from 'assets/prev_icon.svg';

import CARD_API from 'api';
import { validator } from 'page/cardAddUpdate/validator';
import {
  cardNumberInputInfoList,
  expiryDateInputInfoList,
  cardOwnerNameInputInfoList,
  privacyCodeInputInfoList,
  cardPasswordInputInfoList,
  cardCompanyList,
} from 'page/cardAddUpdate/data';
import { PATH, STEP1, STEP2, INPUT_MAX_LENGTH } from 'constants/index';
import LoadingSpinner from 'components/common/LoadingSpinner';
import { CardInfoContext, CardInfoContextValue, initialCardInfo } from 'context/cardInfoProvider';

const CardAddUpdatePage = () => {
  const navigate = useNavigate();
  const { cardId } = useParams();
  const path = cardId ? PATH.MODIFY : PATH.ADD;

  const {
    cardInfo,
    isCompanyFilled,
    isCardNumberFilled,
    isExpiryDateFilled,
    isPrivacyCodeFilled,
    isPasswordFilled,
    isFullFilled,
    dispatch,
  } = useContext(CardInfoContext) as CardInfoContextValue;

  const { alias, ownerName, theme } = cardInfo;

  // 카드 추가 단계(step) - STEP1 || STEP2
  const [step, setStep] = useState(STEP1);
  const { isToggle: modalVisible, handleToggle: handleModal } = useToggle(false);

  const handleInputChange = (e: any, type: string) => {
    const { name, value } = e.target;
    if (!validator[type](value, name)) return;
    dispatch({ type, name, value });
  };

  const handleCompanyClick = (company: string, theme: string) => {
    dispatch({ type: 'company', value: company });
    dispatch({ type: 'theme', value: theme });
    handleModal();
  };

  const handleConfirmButtonClick = () => {
    if (path === PATH.ADD) {
      CARD_API.addCard(cardInfo);
    } else {
      CARD_API.updateCard(cardId as string, cardInfo);
    }

    navigate('/react-payments');
  };

  useEffect(() => {
    if (path === PATH.MODIFY) {
      CARD_API.getCard(cardId as string)
        .then((response) => dispatch({ type: 'load', value: response }))
        .catch((e) => {
          navigate('/react-payments/notFound');
        });
    }

    if (path === PATH.ADD) {
      dispatch({ type: 'reset' });
    }
  }, []);

  if (path === PATH.MODIFY && cardInfo === initialCardInfo) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      {step === STEP1 && (
        <>
          <Header title={path === PATH.ADD ? '카드 정보 입력 ✏️' : '카드 정보 수정 ✂️'}>
            <Link to="/react-payments">
              <Button>
                <PrevIcon />
              </Button>
            </Link>
          </Header>
          <CardPreview handleModal={handleModal} cardInfo={cardInfo} theme={theme} />
          <Message name="company" isFilled={isCompanyFilled} align="text-center" />

          <FormInput
            type="cardNumber"
            inputTitle="카드 번호"
            inputInfoList={cardNumberInputInfoList}
            handleChange={handleInputChange}
            maxLength={INPUT_MAX_LENGTH.CARD_NUMBER}
          />
          <Message name="cardNumber" isFilled={isCardNumberFilled} />

          <FormInput
            className="w-50"
            type="expiryDate"
            inputTitle="만료일"
            inputInfoList={expiryDateInputInfoList}
            handleChange={handleInputChange}
            maxLength={INPUT_MAX_LENGTH.EXPIRY_DATE}
          />
          <Message name="expiryDate" isFilled={isExpiryDateFilled} />

          <FormInput
            type="ownerName"
            inputTitle="카드 소유자 이름(선택)"
            inputInfoList={cardOwnerNameInputInfoList}
            handleChange={handleInputChange}
            maxLength={INPUT_MAX_LENGTH.OWNER_NAME}
          >
            <div className="owner-name-length">
              {ownerName.length} / {INPUT_MAX_LENGTH.OWNER_NAME}
            </div>
          </FormInput>

          <FormInput
            type="privacyCode"
            inputTitle="보안코드(CVC/CVV)"
            inputInfoList={privacyCodeInputInfoList}
            handleChange={handleInputChange}
            maxLength={INPUT_MAX_LENGTH.PRIVACY_CODE}
          >
            <Tooltip type="PRIVACY_CODE" />
          </FormInput>
          <Message name="privacyCode" isFilled={isPrivacyCodeFilled} />

          <FormInput
            type="password"
            inputTitle="카드 비밀번호"
            inputInfoList={cardPasswordInputInfoList}
            handleChange={handleInputChange}
            maxLength={INPUT_MAX_LENGTH.PASSWORD}
          />
          <Message name="password" isFilled={isPasswordFilled} />

          {isFullFilled && (
            <div className="flex-right right-bottom-edge">
              <Button theme={theme} handleClick={() => setStep(STEP2)}>
                다음
              </Button>
            </div>
          )}
          {modalVisible && (
            <Modal handleModal={handleModal}>
              <div className="flex-wrap">
                {cardCompanyList.map(({ id, company, theme }) => (
                  <div
                    key={id}
                    className="modal-item-container"
                    onClick={() => handleCompanyClick(company, theme)}
                  >
                    <Circle theme={theme} />
                    <span className="modal-item-name">{company}</span>
                  </div>
                ))}
              </div>
            </Modal>
          )}
        </>
      )}
      {step === STEP2 && (
        <>
          <Header title={path === PATH.ADD ? '카드 별칭 입력 ✏️' : '카드 별칭 수정 ✂️'}>
            <Button handleClick={() => setStep(STEP1)}>
              <PrevIcon />
            </Button>
          </Header>
          <div className="flex-center">
            <h2 className="content-title mt-20 mb-10">
              {path === PATH.ADD ? '카드등록이 완료되었습니다.' : '카드수정이 완료되었습니다.'}
            </h2>
          </div>
          <CardPreview cardInfo={cardInfo} theme={theme} />
          <div className="input-container flex-center w-100">
            <input
              className="input-underline w-75"
              type="text"
              onChange={(e) => handleInputChange(e, 'alias')}
              placeholder="카드의 별칭을 입력해주세요."
              value={alias}
              autoFocus
            />
          </div>
          <div className="flex-right right-bottom-edge">
            <Button className="" handleClick={handleConfirmButtonClick} theme={theme}>
              {path === PATH.ADD ? '확인' : '수정 완료'}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CardAddUpdatePage;
