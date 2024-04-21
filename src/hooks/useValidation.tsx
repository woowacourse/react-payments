// import { ERROR_MESSAGE } from "@/constants/errorMessage";
// import { makeStringArray } from "@/utils/arrayHelper";
// import { useState } from "react";

// interface Props {
//   inputs: string[];
//   inputLength?: number;
//   validate?: (inputs: string[]) => string;
//   validLength?: number;
//   onChange: (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//     index: number
//   ) => void;
// }

// const useInputsValidation = ({
//   onChange,
//   inputLength,
//   validate,
//   validLength,
// }: Props) => {
//   const [errorMessages, setErrorMessages] = useState(
//     makeStringArray(inputLength || 1)
//   );

//   const updateErrorMessagesByIndex = (errorMessage: string, index: number) => {
//     setErrorMessages((prev) => {
//       const newErrorMessages = [...prev];
//       newErrorMessages[index] = errorMessage;
//       return newErrorMessages;
//     });
//   };

//   const validateInputs = (index: number) => {
//     const errorMessage = validate ? validate(value) : "";

//     if (validate) {
//       const errorMessage = validate(inputs);
//       if (errorMessage) {
//         updateErrorMessagesByIndex(errorMessage, index);
//       }
//     }
//   };

//   const checkIsValidLength = (value: string, index: number) => {
//     if (value.length > 0 && value.length !== validLength) {
//       updateErrorMessagesByIndex(ERROR_MESSAGE.INVALID_LENGTH, index);
//     } else {
//       updateErrorMessagesByIndex("", index);
//     }
//   };

//   return { errorMessages, validateInputs };
// };

// export default useInputsValidation;
