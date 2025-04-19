import styles from './CardPreview.module.css';

export type CardInformationType = {
  cardNumbers: string[];
  expirationDate: string[];
};

function CardPreview({ cardNumbers, expirationDate }: CardInformationType) {
  let isBrand = false;
  let brandName = 'Mastercard';
  const displayCardNumbers = cardNumbers.map((number, index) => {
    if (index === 0) checkBrand(number);
    if (index <= 1) {
      return number;
    }

    return '•'.repeat(number.length);
  });

  function checkBrand(inputCardNumber: string) {
    if (inputCardNumber[0] === '4') {
      isBrand = true;
      brandName = 'Visa';
      return;
    }

    if (
      inputCardNumber[0] === '5' &&
      Number(inputCardNumber[1]) >= 1 &&
      Number(inputCardNumber[1]) <= 5
    ) {
      isBrand = true;
      brandName = 'Mastercard';
      return;
    }

    isBrand = false;
  }

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.goldBox}></div>
        {isBrand && (
          <img src={`./${brandName}.png`} className={styles.logoBrand} />
        )}
      </div>
      <div className={`${styles.cardNumberBox} tx-md`}>
        {displayCardNumbers.map((number) => {
          return <p className={styles.pCardNumber}>{number}</p>;
        })}
      </div>
      <p className={`${styles.pCardNumber} tx-md`}>
        {expirationDate.join('/')}
      </p>
    </div>
  );
}

export default CardPreview;
