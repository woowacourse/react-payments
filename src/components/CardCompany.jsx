import PropTypes from 'prop-types';
import styles from 'css/module/CardCompany.module.css';

const CardCompany = ({ company, onClickCompany, theme }) => {
  return (
    <div className={styles.container} onClick={() => onClickCompany(company, theme)}>
      <div className={`${styles.dot} bg-${theme}`}></div>
      <span className={styles.name}>{company}</span>
    </div>
  );
};

CardCompany.propTypes = {
  /**
   * card company name
   */
  company: PropTypes.string.isRequired,
  /**
   * handle clicking card company component
   */
  onClickCompany: PropTypes.func.isRequired,
  /**
   * theme of CardCompany
   */
  theme: PropTypes.string.isRequired,
};

export default CardCompany;
