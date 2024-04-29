import { createContext, useRef } from "react";

export const CardNumberInputsContext = createContext<React.MutableRefObject<null | HTMLInputElement>[] | null>(null);
export const CardPeriodInputsContext = createContext<React.MutableRefObject<null | HTMLInputElement>[] | null>(null);
export const CardOwnerInputContext = createContext<React.MutableRefObject<null | HTMLInputElement>[] | null>(null);
export const CardIssuerInputContext = createContext<React.MutableRefObject<null | HTMLInputElement>[] | null>(null);
export const CardCVCInputContext = createContext<React.MutableRefObject<null | HTMLInputElement>[] | null>(null);
export const CardPasswordInputContext = createContext<React.MutableRefObject<null | HTMLInputElement>[] | null>(null);

const FormRefContextProvider = ({ children }: { children: React.ReactNode }) => {
  const cardNumberInputs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const cardPeriodInputs = [useRef(null), useRef(null)];
  const cardOwnerInfoInput = [useRef(null)];
  const cardIssuerInput = [useRef(null)];
  const cardCVCInput = [useRef(null)];
  const cardPasswordInput = [useRef(null)];

  return (
    <CardNumberInputsContext.Provider value={cardNumberInputs}>
      <CardPeriodInputsContext.Provider value={cardPeriodInputs}>
        <CardOwnerInputContext.Provider value={cardOwnerInfoInput}>
          <CardIssuerInputContext.Provider value={cardIssuerInput}>
            <CardCVCInputContext.Provider value={cardCVCInput}>
              <CardPasswordInputContext.Provider value={cardPasswordInput}>
                {children}
              </CardPasswordInputContext.Provider>
            </CardCVCInputContext.Provider>
          </CardIssuerInputContext.Provider>
        </CardOwnerInputContext.Provider>
      </CardPeriodInputsContext.Provider>
    </CardNumberInputsContext.Provider>
  );
};

export default FormRefContextProvider;
