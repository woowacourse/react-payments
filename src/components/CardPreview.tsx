import Button from 'components/common/Button';
import useToggle from 'hooks/useToggle';
import { CARD_BACK_MESSAGE, CRYPTO_STRING, DEFAULT_CARD_INFO } from 'constants/index';
import { CardInfo } from 'types';

interface CardPreviewProps {
  info: CardInfo;
  isVisibleButton?: string;
  theme: string;
  handleModal?: () => void;
}

const CardPreview = ({ info, isVisibleButton, theme, handleModal }: CardPreviewProps) => {
  const { isToggle: isFrontView, handleToggle: handlePosition } = useToggle(true);

  const { cardNumber, ownerName, expiryDate, company, privacyCode } = info;
  const { first, second, third, fourth } = cardNumber;

  const upperCaseOwnerName = ownerName.toUpperCase() || DEFAULT_CARD_INFO.OWNER_NAME;
  const month = expiryDate.month || DEFAULT_CARD_INFO.EXPIRY_MONTH;
  const year = expiryDate.year || DEFAULT_CARD_INFO.EXPIRY_YEAR;

  return (
    <div className="card-box">
      <div className={`empty-card bg-${theme}`} onClick={handleModal}>
        {isFrontView ? (
          <>
            <div className="card-top">
              <span className="card-text">{company}</span>
            </div>
            <div className="card-middle">
              <div className="small-card__chip"></div>
            </div>
            <div className="card-bottom">
              <div className="card-bottom__number">
                <span className="card-text card-text__default">{first}</span>
                <span className="card-text card-text__default">{second}</span>
                <span className="card-text card-text__default card-text__privacy">
                  {CRYPTO_STRING.repeat(third.length)}
                </span>
                <span className="card-text card-text__default card-text__privacy">
                  {CRYPTO_STRING.repeat(fourth.length)}
                </span>
              </div>
              <div className="card-bottom__info">
                <span className="card-text card-text__control">{upperCaseOwnerName}</span>
                <span className="card-text">
                  {month} / {year}
                </span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="card-black-line"></div>
            <div className="card-white-line">{privacyCode}</div>
            <div className="card-back">
              <div className="small-card__chip"></div>
              <div className="card-back__info">{CARD_BACK_MESSAGE}</div>
            </div>
          </>
        )}
        {!company && <Button className="card-add-button">+</Button>}
      </div>
      <Button className={'card-change-button ' + `${isVisibleButton}`} handleClick={handlePosition}>
        {isFrontView ? 'Back' : 'Front'}
      </Button>
    </div>
  );
};

CardPreview.defaultProps = {
  isFrontView: true,
};

export default CardPreview;
