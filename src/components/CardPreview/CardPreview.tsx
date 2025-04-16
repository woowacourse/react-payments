import styles from './CardPreview.module.css'

type CardPreviewProps = {
  cardNumbers: string[];
  month: string;
  year: string;
}

const CardPreview = ({cardNumbers, month, year}: CardPreviewProps) => {
      return (
      <div>
        <div className={styles.preview} >
          <img src="./magnetic.png" alt="magnetic" className={styles.magnetic}/>
          <img src="./Visa.png" alt="visa" className={styles.visa}/>
          <div>
            <p>{cardNumbers}</p>
            <div>
              <p>{month}</p>
              <p>{year}</p>
            </div>
          </div>
        </div>
      </div>
      );
};

export default CardPreview;