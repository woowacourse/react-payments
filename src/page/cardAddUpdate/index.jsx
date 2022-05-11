import { useEffect, useReducer, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import FormInput from 'components/common/FormInput';
import Modal from 'components/common/Modal';
import Header from 'components/common/Header';
import Button from 'components/common/Button';
import Tooltip from 'components/common/Tooltip';
import Circle from 'components/common/Circle';
import Message from 'components/common/Message';
import CardPreview from 'components/CardPreview';

import useIsFilled from 'hooks/useIsFilled';
import useToggle from 'hooks/useToggle';
import { ReactComponent as PrevIcon } from 'assets/prev_icon.svg';

import reducer from 'page/cardAddUpdate/reducer';
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
import {
  PATH,
  STEP1,
  STEP2,
  CARD_NUMBER,
  COMPANY,
  CRYPTO_STRING,
  EXPIRY_DATE,
  INPUT_MAX_LENGTH,
  PASSWORD,
  PRIVACY_CODE,
} from 'constants';
import LoadingSpinner from 'components/common/LoadingSpinner';

const initialCardInfo = {
  alias: '',
  theme: '',
  company: '',
  cardNumber: {
    first: '',
    second: '',
    third: '',
    fourth: '',
  },
  expiryDate: {
    month: '',
    year: '',
  },
  ownerName: '',
  privacyCode: '',
  password: {
    first: '',
    second: '',
    third: CRYPTO_STRING,
    fourth: CRYPTO_STRING,
  },
};

const CardAddUpdatePage = () => {
  const navigate = useNavigate();
  const { cardId } = useParams();
  const path = cardId ? PATH.MODIFY : PATH.ADD;

  // 카드 추가 단계(step) - STEP1 || STEP2
  const [step, setStep] = useState(STEP1);

  const [cardInfo, dispatch] = useReducer(reducer, initialCardInfo);
  const { alias, cardNumber, ownerName, expiryDate, company, theme, password, privacyCode } =
    cardInfo;

  const [modalVisible, handleModal] = useToggle(false);
  const [isCardFront, handleCardPosition] = useToggle(true);

  const [isCompanyFilled] = useIsFilled(COMPANY, company, false);
  const [isCardNumberFilled] = useIsFilled(CARD_NUMBER, cardNumber, false);
  const [isExpiryDateFilled] = useIsFilled(EXPIRY_DATE, expiryDate, false);
  const [isPrivacyCodeFilled] = useIsFilled(PRIVACY_CODE, privacyCode, false);
  const [isPasswordFilled] = useIsFilled(PASSWORD, password, false);
  const isFullFilled =
    isCompanyFilled &&
    isCardNumberFilled &&
    isExpiryDateFilled &&
    isPrivacyCodeFilled &&
    isPasswordFilled;

  const handleInputChange = ({ target: { name, value } }, type) => {
    if (!validator[type](value, name)) return;
    dispatch({ type, name, value });
  };

  const handleCompanyClick = (company, theme) => {
    dispatch({ type: 'company', value: company });
    dispatch({ type: 'theme', value: theme });
    handleModal();
  };

  const handleConfirmButtonClick = async () => {
    if (path === PATH.ADD) {
      await CARD_API.addCard(cardInfo);
    } else {
      await CARD_API.updateCard(cardId, cardInfo);
    }

    navigate('/react-payments');
  };

  useEffect(() => {
    if (path === PATH.MODIFY) {
      CARD_API.getCard(cardId)
        .then((response) => dispatch({ type: 'load', value: response }))
        .catch((e) => {
          navigate('/react-payments/notFound');
        });
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
          <CardPreview
            cardInfo={cardInfo}
            isCardFront={isCardFront}
            handleModal={handleModal}
            handleCardPosition={handleCardPosition}
          />
          <Message name="company" isFilled={isCompanyFilled} align="text-center" />

          <FormInput
            type="cardNumber"
            inputTitle="카드 번호"
            inputInfoList={cardNumberInputInfoList}
            inputValue={cardNumber}
            handleChange={handleInputChange}
            theme={theme}
            maxLength={INPUT_MAX_LENGTH.CARD_NUMBER}
          />
          <Message name="cardNumber" isFilled={isCardNumberFilled} />

          <FormInput
            className="w-50"
            type="expiryDate"
            inputTitle="만료일"
            inputInfoList={expiryDateInputInfoList}
            inputValue={expiryDate}
            handleChange={handleInputChange}
            theme={theme}
            maxLength={INPUT_MAX_LENGTH.EXPIRY_DATE}
          />
          <Message name="expiryDate" isFilled={isExpiryDateFilled} />

          <FormInput
            type="ownerName"
            inputTitle="카드 소유자 이름(선택)"
            inputInfoList={cardOwnerNameInputInfoList}
            inputValue={ownerName}
            handleChange={handleInputChange}
            theme={theme}
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
            inputValue={privacyCode}
            theme={theme}
            maxLength={INPUT_MAX_LENGTH.PRIVACY_CODE}
          >
            <Tooltip type="PRIVACY_CODE" />
          </FormInput>
          <Message name="privacyCode" isFilled={isPrivacyCodeFilled} />

          <FormInput
            type="password"
            inputTitle="카드 비밀번호"
            inputInfoList={cardPasswordInputInfoList}
            inputValue={password}
            handleChange={handleInputChange}
            theme={theme}
            maxLength={INPUT_MAX_LENGTH.PASSWORD}
          />
          <Message name="password" isFilled={isPasswordFilled} />

          {/* go step2 button */}
          {isFullFilled && (
            <div className="flex-right right-bottom-edge">
              <Button theme={theme} handleClick={() => setStep(STEP2)}>
                다음
              </Button>
            </div>
          )}

          {/* modal */}
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
          <CardPreview
            cardInfo={cardInfo}
            isCardFront={isCardFront}
            handleCardPosition={handleCardPosition}
          />
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
            <Button theme={theme} className="" handleClick={handleConfirmButtonClick}>
              {path === PATH.ADD ? '확인' : '수정 완료'}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CardAddUpdatePage;
