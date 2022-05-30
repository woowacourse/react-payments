import PropTypes from 'prop-types';
import Button from 'components/common/Button';
import { CARD_BACK_MESSAGE, CRYPTO_STRING, DEFAULT_CARD_INFO } from 'constants/index';
import useToggle from 'hooks/useToggle';
import { CardInfo } from 'types';

interface CardPreviewProps {
  cardInfo: CardInfo;
  isVisibleButton?: string;
  theme: string;
  handleModal?: () => void;
}

const CardPreview = ({ cardInfo, isVisibleButton, theme, handleModal }: CardPreviewProps) => {
  const { isToggle: isCardFront, handleToggle: handleCardPosition } = useToggle(true);

  const { cardNumber, ownerName, expiryDate, company, privacyCode } = cardInfo;
  const { first, second, third, fourth } = cardNumber;

  const upperCaseOwnerName = ownerName.toUpperCase() || DEFAULT_CARD_INFO.OWNER_NAME;
  const month = expiryDate.month || DEFAULT_CARD_INFO.EXPIRY_MONTH;
  const year = expiryDate.year || DEFAULT_CARD_INFO.EXPIRY_YEAR;

  return (
    <div className="card-box">
      <div className={`empty-card bg-${theme}`} onClick={handleModal}>
        {isCardFront ? (
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
      <Button
        className={'card-change-button ' + `${isVisibleButton}`}
        handleClick={handleCardPosition}
      >
        {isCardFront ? 'Back' : 'Front'}
      </Button>
    </div>
  );
};

CardPreview.defaultProps = {
  isCardFront: true,
};

CardPreview.propTypes = {
  cardInfo: PropTypes.shape({
    company: PropTypes.string,
    cardNumber: PropTypes.shape({
      first: PropTypes.string,
      second: PropTypes.string,
      third: PropTypes.string,
      fourth: PropTypes.string,
    }),
    expiryDate: PropTypes.shape({
      month: PropTypes.string,
      year: PropTypes.string,
    }),
    ownerName: PropTypes.string,
    privacyCode: PropTypes.string,
    password: PropTypes.shape({
      first: PropTypes.string,
      second: PropTypes.string,
      third: PropTypes.string,
      fourth: PropTypes.string,
    }),
    theme: PropTypes.string,
  }),
  handleModal: PropTypes.func,
  isVisibleButton: PropTypes.string,
};

export default CardPreview;
