// ValidatedInputGroup.tsx
import { css } from "@emotion/react";

const ValidatedInputGroup = ({
  onChange,
  onBlur,
  errorMessage,
  inputOption,
  values,
  errorIndex,
}: {
  onChange: (index: number, value: string) => void;
  onBlur: (i: number) => void;
  errorMessage: string;
  inputOption: {
    count: number;
    maxLength: number;
    placeHolder: string[];
  };
  values: string[];
  errorIndex: number;
}) => {
  return (
    <>
      <section
        css={css`
          display: flex;
          flex-direction: row;
          gap: 10px;
        `}
      >
        {Array.from({ length: inputOption.count }).map((_, i) => (
          <input
            key={i}
            maxLength={inputOption.maxLength}
            value={values[i] || ""}
            onChange={(e) => onChange(i, e.target.value)}
            onBlur={() => onBlur(i)}
            css={css`
              width: 71.25px;
              height: 32px;
              width: 71.25;
              border-radius: 2px;
              border-width: 1.01px;
              border-color: ${errorIndex === i ? "#ff3d3d" : "#ACACAC"};
            `}
            placeholder={inputOption.placeHolder[i]}
          />
        ))}
      </section>
      <span
        css={css`
          font-size: 9.5px;
          font-weight: 400;
          color: #ff3d3d;
          display: ${errorMessage ? "block" : "none"};
        `}
      >
        {errorMessage}
      </span>
    </>
  );
};

export default ValidatedInputGroup;

// const ValidatedInputGroup = ({
//   onValueHandler,
// }: {
//   onValueHandler: (cardInfo: string[], brand?: string) => void;
// }) => {
//   const [errorMessage, setErrorMessage] = useState("");
//   const [inputValues, setInputValues] = useState<string[]>([]);

//   const handleInputChange = (index: number, value: string) => {
//     const newValues = [...inputValues];
//     newValues[index] = value;
//     setInputValues(newValues);
//     setErrorMessage("");

//     onValueHandler(newValues);
//   };

//   const validate = () => {
//     if (!/^\d+$/.test(inputValues.join(""))) {
//       setErrorMessage("숫자만 입력 가능합니다");
//       return;
//     }

//     if (mode === "CARD") {
//       const firstNumber = inputValues[0];
//       const brandName = decideBrandName(firstNumber);

//       if (brandName === "") {
//         setErrorMessage("이 카드 브랜드는 지원되지 않습니다.");
//         return;
//       }
//     }

//     // 2. 숫자 01 부터 12 까지 허용해야한다.
//     if (mode === "EXP") {
//       const month = inputValues[0];
//       if (!/^(0[1-9]|1[0-2])$/.test(month)) {
//         setErrorMessage("유효하지 않은 날짜입니다.");
//       }
//     }
//   };

//   const maxlength = () => {
//     if (mode === "CARD") {
//       return 4;
//     }
//     if (mode === "EXP") {
//       return 2;
//     }
//     return 3;
//   };

//   return (
//     <>
//       <InputGroup
//         values={inputValues}
//         onChange={handleInputChange}
//         onBlur={validate}
//         count={inputFieldCount}
//         maxLength={maxlength()}
//       />
//       <span
//         css={css`
//           font-size: 9.5px;
//           font-weight: 400;
//           color: #ff3d3d;
//           display: ${errorMessage ? "block" : "none"};
//         `}
//       >
//         {errorMessage}
//       </span>
//     </>
//   );
// };
