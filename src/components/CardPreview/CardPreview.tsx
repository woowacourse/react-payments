import styles from './CardPreview.module.css'

const CardPreview = () => {
      return (
      <div>
        <div className={styles.preview} >
          <img src="./magnetic.png" alt="magnetic" className={styles.magnetic}/>
          <img src="./Visa.png" alt="visa" className={styles.visa}/>
        </div>
      </div>
      );
};

export default CardPreview;