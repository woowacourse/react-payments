import "./index.css";
import styles from "./App.module.css";
import CardNumberInput from "./components/CardNumberInput/CardNumberInput";
import ExpirationDateInput from "./components/ExpirationDateInput/ExpirationDateInput";
import OwnerNameInput from "./components/OwnerNameInput/OwnerNameInput";
import CardPreview from "./components/CardPreview/CardPreview";
import { ChangeEvent, FocusEvent, useState } from "react";
import { ERRORS } from "./constants/messages";
import {
  CARD_NUMBER_KEYS,
  CARD_EXPIRATION_DATE_KEYS,
  CARD_OWNERNAME_KEY,
} from "./constants/cardInfo";
import { hasFourDigit, isEnglishCharacter, isValidDate, isValidMonth } from "./utils/validators";

function App() {
  const [cardNumbers, setCardNumbers] = useState({
    data: {
      first: { value: "", isError: false },
      second: { value: "", isError: false },
      third: { value: "", isError: false },
      fourth: { value: "", isError: false },
    },
    status: {
      isError: false,
      errorMessage: "",
    },
  });

  const [expirationDate, setExpirationDate] = useState({
    data: {
      month: { value: "", isError: false },
      year: { value: "", isError: false },
    },
    status: {
      isError: false,
      errorMessage: "",
    },
  });

  const [ownerName, setOwnerName] = useState({
    data: {
      ownerName: { value: "", isError: false },
    },
    status: {
      isError: false,
      errorMessage: "",
    },
  });

  const [cardPreview, setCardPreview] = useState({
    cardNumbers: { first: "", second: "", third: "", fourth: "" },
    expirationDate: { month: "", year: "" },
    ownerName: { ownerName: "" },
  });

  const changeCardNumbers = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as {
      name: (typeof CARD_NUMBER_KEYS)[number];
      value: string;
    };
    if (!CARD_NUMBER_KEYS.includes(name)) return;

    if (!Number.isInteger(Number(value))) {
      setCardNumbers({
        ...cardNumbers,
        data: {
          ...cardNumbers.data,
          [name]: { value: cardNumbers.data[name].value, isError: true },
        },
        status: {
          isError: true,
          errorMessage: ERRORS.isNotInteger,
        },
      });
      return;
    }
    setCardNumbers({
      ...cardNumbers,
      data: {
        ...cardNumbers.data,
        [name]: { value, isError: false },
      },
      status: {
        isError: false,
        errorMessage: "",
      },
    });
  };

  const blurCardNumbers = (event: FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target as {
      name: (typeof CARD_NUMBER_KEYS)[number];
      value: string;
    };
    if (!CARD_NUMBER_KEYS.includes(name)) return;
    if (!hasFourDigit(value)) {
      setCardNumbers({
        ...cardNumbers,
        data: {
          ...cardNumbers.data,
          [name]: { value: cardNumbers.data[name].value, isError: true },
        },
        status: {
          isError: true,
          errorMessage: ERRORS.isNotFourDigit,
        },
      });
      return;
    }

    setCardPreview({ ...cardPreview, cardNumbers: { ...cardPreview.cardNumbers, [name]: value } });
  };

  const changeExpirationDate = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as {
      name: (typeof CARD_EXPIRATION_DATE_KEYS)[number];
      value: string;
    };
    if (!CARD_EXPIRATION_DATE_KEYS.includes(name)) return;

    if (!Number.isInteger(Number(value))) {
      setExpirationDate({
        ...expirationDate,
        data: {
          ...expirationDate.data,
          [name]: { value: expirationDate.data[name].value, isError: true },
        },
        status: {
          isError: true,
          errorMessage: ERRORS.isNotInteger,
        },
      });
      return;
    }
    setExpirationDate({
      ...expirationDate,
      data: { ...expirationDate.data, [name]: { value, isError: false } },
      status: {
        isError: false,
        errorMessage: "",
      },
    });
  };

  const blurExpirationDate = (event: FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target as {
      name: (typeof CARD_EXPIRATION_DATE_KEYS)[number];
      value: string;
    };
    if (!CARD_EXPIRATION_DATE_KEYS.includes(name)) return;

    if (name === "month") {
      if (!isValidMonth(value)) {
        setExpirationDate({
          ...expirationDate,
          data: {
            ...expirationDate.data,
            month: { value: expirationDate.data[name].value, isError: true },
          },
          status: {
            isError: true,
            errorMessage: ERRORS.isNotValidMonth,
          },
        });
      }
    } else if (name === "year") {
      if (
        !isValidDate({
          year: expirationDate.data.year.value,
          month: expirationDate.data.month.value,
        })
      ) {
        setExpirationDate({
          ...expirationDate,
          data: {
            month: { value: expirationDate.data.month.value, isError: true },
            year: { value: expirationDate.data.year.value, isError: true },
          },
          status: {
            isError: true,
            errorMessage: ERRORS.deprecatedCard,
          },
        });
        return;
      }
    }
    setCardPreview({
      ...cardPreview,
      expirationDate: { ...cardPreview.expirationDate, [name]: value },
    });
  };

  const changeOwnerName = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as {
      name: (typeof CARD_OWNERNAME_KEY)[number];
      value: string;
    };
    if (!CARD_OWNERNAME_KEY.includes(name)) return;

    if (!isEnglishCharacter(value)) {
      setOwnerName({
        data: { ownerName: { value: ownerName.data.ownerName.value, isError: true } },
        status: {
          isError: true,
          errorMessage: ERRORS.isNotAlphabet,
        },
      });
      return;
    }

    setOwnerName({
      data: { ownerName: { value, isError: false } },
      status: {
        isError: false,
        errorMessage: "",
      },
    });
  };

  const blurOwnerName = (event: FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target as {
      name: (typeof CARD_OWNERNAME_KEY)[number];
      value: string;
    };
    if (!CARD_OWNERNAME_KEY.includes(name)) return;

    setOwnerName({
      data: { ownerName: { value: value.trim(), isError: false } },
      status: {
        isError: false,
        errorMessage: "",
      },
    });
    setCardPreview({
      ...cardPreview,
      ownerName: { ...cardPreview.ownerName, [name]: value },
    });
  };

  return (
    <div className={styles.app}>
      <CardPreview
        cardNumbers={cardPreview.cardNumbers}
        expirationDate={cardPreview.expirationDate}
        ownerName={cardPreview.ownerName}
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
