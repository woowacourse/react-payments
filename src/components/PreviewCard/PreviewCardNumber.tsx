// import styles from "./PreviewCardNumber.module.css";

// interface PreviewCardNumberProps {
//   cardNumbers: string[];
//   cardExpirationDate: string[];
// }

// export default function PreviewCardNumber({
//   cardNumbers,
//   cardExpirationDate,
// }: PreviewCardNumberProps) {
//   const expiration =
//     cardExpirationDate[0] === ""
//       ? `${cardExpirationDate[1]}`
//       : `${cardExpirationDate[1]}/${cardExpirationDate[0]}`;

//   return (
//     <div className={styles["card-layout-number-container"]}>
//       <div className={styles["card-layout-number-wrapper"]}>
//         <div className={styles["card-layout-number"]}>{cardNumbers[0]}</div>
//         <div className={styles["card-layout-number"]}>{cardNumbers[1]}</div>
//         <div className={styles["card-layout-number"]}>
//           {"·".repeat(cardNumbers[2].length)}
//         </div>
//         <div className={styles["card-layout-number"]}>
//           {"·".repeat(cardNumbers[3].length)}
//         </div>
//       </div>
//       <div className={styles["card-layout-expiration-number"]}>
//         {expiration}
//       </div>
//     </div>
//   );
// }

import styles from "./PreviewCardNumber.module.css";
interface PreviewCardNumberProps {
  cardNumbers: string[];
  cardExpirationDate: {
    month: string;
    year: string;
  };
}

export default function PreviewCardNumber({
  cardNumbers,
  cardExpirationDate,
}: PreviewCardNumberProps) {
  const { month, year } = cardExpirationDate;

  const expiration = month === "" ? year : `${year}/${month}`;

  return (
    <div className={styles["card-layout-number-container"]}>
      <div className={styles["card-layout-number-wrapper"]}>
        <div className={styles["card-layout-number"]}>{cardNumbers[0]}</div>
        <div className={styles["card-layout-number"]}>{cardNumbers[1]}</div>
        <div className={styles["card-layout-number"]}>
          {"·".repeat(cardNumbers[2].length)}
        </div>
        <div className={styles["card-layout-number"]}>
          {"·".repeat(cardNumbers[3].length)}
        </div>
      </div>
      <div className={styles["card-layout-expiration-number"]}>
        {expiration}
      </div>
    </div>
  );
}
