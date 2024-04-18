/** @jsxImportSource @emotion/react */
import "./App.css";

import CardForm from "./components/CardForm";
import CardPreview from "./components/CardPreview";
import { createContext } from "react";
import { css } from "@emotion/react";
import useCardInfo from "./hooks/useCardInfo";

interface ContextProps {
  cardInfo: {
    cardNumbers: [string, string, string, string];
    cardIssuer: "" | "Visa" | "MasterCard";
    cardExpiredDate: [string, string];
    cardHolder: string;
  };
  setCardNumbers?: React.Dispatch<
    React.SetStateAction<[string, string, string, string]>
  >;
  setCardIssuer?: React.Dispatch<
    React.SetStateAction<"" | "Visa" | "MasterCard">
  >;
  setCardExpiredDate?: React.Dispatch<React.SetStateAction<[string, string]>>;
  setCardHolder?: React.Dispatch<React.SetStateAction<string>>;
}

export const CardInfoContext = createContext<ContextProps>({
  cardInfo: {
    cardNumbers: ["", "", "", ""],
    cardIssuer: "",
    cardExpiredDate: ["", ""],
    cardHolder: "",
  },
});

const styledCardInfoContainer = css`
  width: 315px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  margin: auto;
  margin-top: 50px;
`;

function App() {
  const {
    cardInfo,
    setCardNumbers,
    setCardIssuer,
    setCardExpiredDate,
    setCardHolder,
  } = useCardInfo();

  return (
    <div css={styledCardInfoContainer}>
      <CardInfoContext.Provider
        value={{
          cardInfo,
          setCardNumbers,
          setCardIssuer,
          setCardExpiredDate,
          setCardHolder,
        }}
      >
        <CardPreview />
        <CardForm />
      </CardInfoContext.Provider>
    </div>
  );
}

export default App;
