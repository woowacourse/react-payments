import checkCardType from "../../utils/checkCardType";
import MASTERCARD_IMAGE from "../../assets/image/Mastercard.png";
import VISA_IMAGE from "../../assets/image/Visa.png";
import styles from "./CardPreview.module.css";

export default function CardLogo({
  firstFourCardNumbers,
}: {
  firstFourCardNumbers: string;
}) {
  return checkCardType(firstFourCardNumbers) === "Mastercard" ? (
    <img src={MASTERCARD_IMAGE} className={styles.logo} />
  ) : checkCardType(firstFourCardNumbers) === "Visa" ? (
    <img src={VISA_IMAGE} className={styles.logo} />
  ) : null;
}
