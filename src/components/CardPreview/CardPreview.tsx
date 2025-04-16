import styles from "./CardPreview.module.css";

type CardPreviewProps = {
  cardNumbers: string[];
  month: string;
  year: string;
};

const CardPreview = ({ cardNumbers, month, year }: CardPreviewProps) => {
  return (
    <div className={styles.preview}>
      <img src="./magnetic.png" alt="magnetic" className={styles.magnetic} />
      <img src="./Visa.png" alt="visa" className={styles.visa} />
      <div className={styles.cardInfo}>
        <div className={styles.cardNumberContainer}>
          {cardNumbers.map((number, index) => (
            <span key={index}>
              {index === 2 || index === 3
                ? number
                  ? "•".repeat(number.length).padEnd(4, " ")
                  : "    "
                : number
                ? number.padEnd(4, " ")
                : "    "}
            </span>
          ))}
        </div>
        <div className={styles.date}>
          <p>
            {month}{month.length === 2 && '/'}{year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
