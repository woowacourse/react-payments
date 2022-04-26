import PropTypes from 'prop-types';
import "./card.css";

function Card({company, firstNumber, secondNumber, thirdNumber, fourthNumber, owner, dueMonth, dueDate}) {
  return (
    <div className={["card-box", `${company && `card-company-${company}`}`].join(' ')}>
      <div className="small-card">
        <div className="card-top">
          <span className="card-text">{company}카드</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{firstNumber} {secondNumber} {thirdNumber} {fourthNumber}</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{owner}</span>
            <span className="card-text">{dueMonth} / {dueDate}</span>
          </div>
        </div>
      </div>
    </div>
  )
} 

Card.propTypes = {
  /**
   * 카드사
   */
  company: PropTypes.string.isRequired,
  /**
   * 카드번호(첫번째)
   */
  firstNumber: PropTypes.string,
  /**
   * 카드번호(두번째)
   */
  secondNumber: PropTypes.string,
  /**
   * 카드번호(세번째)
   */
  thirdNumber: PropTypes.string,
  /**
   * 카드번호(네번째)
   */
   fourthNumber: PropTypes.string,
  /**
   * 소유자
   */
  owner: PropTypes.string,
  /**
   * 만료일(월)
   */
  dueMonth: PropTypes.string,
  /**
   * 만료일(일)
   */
  dueDate: PropTypes.string
}
 

export default Card