// import { useReducer, useState } from 'react';

// type ActionType = {
//   type: number;
// };

// interface Props {
//   initialValue: string | string[];
//   maxLength: number;
//   validator: (value: string) => boolean;
// }

// export const FORM_FIELD_STATE = {
//   initial: 0,
//   pending: 1,
//   completed: 2,
//   failed: 3,
// };

// const reducer = (state: number, action: ActionType): number => {
//   switch (action.type) {
//     case FORM_FIELD_STATE.initial:
//       return FORM_FIELD_STATE.initial;
//     case FORM_FIELD_STATE.pending:
//       return FORM_FIELD_STATE.pending;
//     case FORM_FIELD_STATE.completed:
//       return FORM_FIELD_STATE.completed;
//     case FORM_FIELD_STATE.failed:
//       return FORM_FIELD_STATE.failed;
//     default:
//       return state;
//   }
// };

// const useChangeFormField = ({ initialValue, maxLength, validator }: Props) => {
//   const [value, setValue] = useState(initialValue);
//   const [state, dispatch] = useReducer(reducer, FORM_FIELD_STATE.initial);

//   const handleFormFieldChange = (value: string) => {
//     if (!validator(value)) {
//       dispatch({ type: FORM_FIELD_STATE.failed });
//       return;
//     }

//     setValue(value);

//     if (value.length === 0) {
//       dispatch({ type: FORM_FIELD_STATE.initial });
//     } else if (value.length === maxLength) {
//       dispatch({ type: FORM_FIELD_STATE.completed });
//     } else {
//       dispatch({ type: FORM_FIELD_STATE.pending });
//     }
//   };

//   return [value, state, handleFormFieldChange];
// };

// export default useChangeFormField;
