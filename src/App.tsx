import "./index.css";
import styles from "./App.module.css";
import CardNumberInput from "@/components/CardNumberInput/CardNumberInput";
import ExpirationDateInput from "@/components/ExpirationDateInput/ExpirationDateInput";
import OwnerNameInput from "@/components/OwnerNameInput/OwnerNameInput";
import CardPreview from "@/components/CardPreview/CardPreview";
import useCardNumbers from "@/hooks/useCardNumbers";
import useExpirationDate from "@/hooks/useExpirationDate";
import useOwnerName from "@/hooks/useOwnerName";

function App() {
  const { cardNumbers, changeCardNumbers, blurCardNumbers } = useCardNumbers();
  const { expirationDate, changeExpirationDate, blurExpirationDate } =
    useExpirationDate();
  const { ownerName, changeOwnerName, blurOwnerName } = useOwnerName();

  return (
    <div className={styles.app}>
      <CardPreview
        cardNumbers={{
          first: cardNumbers.data.first.isDone
            ? cardNumbers.data.first.value
            : "",
          second: cardNumbers.data.second.isDone
            ? cardNumbers.data.second.value
            : "",
          third: cardNumbers.data.third.isDone
            ? cardNumbers.data.third.value
            : "",
          fourth: cardNumbers.data.fourth.isDone
            ? cardNumbers.data.fourth.value
            : "",
        }}
        expirationDate={{
          month: expirationDate.data.month.isDone
            ? expirationDate.data.month.value
            : "",
          year: expirationDate.data.year.isDone
            ? expirationDate.data.year.value
            : "",
        }}
        ownerName={{
          ownerName: ownerName.data.ownerName.isDone
            ? ownerName.data.ownerName.value
            : "",
        }}
      />

      <form>
        <CardNumberInput
          cardNumbers={cardNumbers}
          changeCardNumbers={changeCardNumbers}
          blurCardNumbers={blurCardNumbers}
        />
        <ExpirationDateInput
          expirationDate={expirationDate}
          changeExpirationDate={changeExpirationDate}
          blurExpirationDate={blurExpirationDate}
        />
        <OwnerNameInput
          ownerName={ownerName}
          changeOwnerName={changeOwnerName}
          blurOwnerName={blurOwnerName}
        />
      </form>
    </div>
  );
}

export default App;
