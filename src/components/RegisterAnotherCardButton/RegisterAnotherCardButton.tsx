import { forwardRef } from "react";
import Button from "../Button/Button";

const RegisterAnotherCardButton = forwardRef<HTMLButtonElement>((props, ref) => {

  return (
    <Button name="another" ref={ref} {...props}/>
  );
});

export default RegisterAnotherCardButton;
