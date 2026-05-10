// import { useState } from 'react';

// interface UseFieldProps {
//   isValidFormat: (value: string) => boolean;
//   validator: (value: string) => string | undefined;
// }

// export interface UseFieldResult {
//   value: string;
//   errorMessage: string | undefined;
//   handleChange: (value: string) => boolean;
//   handleBlur: () => void;
//   isValid: boolean;
// }

// export const useField = ({ isValidFormat, validator }: UseFieldProps): UseFieldResult => {
//   const [value, setValue] = useState<string>('');
//   const [touched, setTouched] = useState<boolean>(false);

//   const error = validator(value);
//   const errorMessage = touched ? validator(value) : undefined;

//   const handleChange = (inputValue: string): boolean => {
//     if (!isValidFormat(inputValue)) return false;
//     setValue(inputValue);
//     setTouched(false);
//     return validator(inputValue) === undefined;
//   };

//   const handleBlur = () => {
//     setTouched(true);
//   };

//   return { value, errorMessage, handleChange, handleBlur, isValid: !error };
// };
