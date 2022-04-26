import { forwardRef } from "react";
import "./index.scss";

// export const InputContents = ({ onChange, type }) => {
//   return (
//     <input className="input__contents" onChange={onChange} type={type}></input>
//   );
// };
export const InputContents = forwardRef((props, ref) => (
  <input
    ref={ref}
    onChange={props.onChange}
    type={props.type}
    maxLength={props.maxLength}
    className="input__contents"
  />
));
