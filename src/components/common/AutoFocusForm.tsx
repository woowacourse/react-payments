import React, { FormHTMLAttributes, useEffect, useRef } from "react";

interface AutoFocusFormProps extends FormHTMLAttributes<HTMLFormElement> {
  values: any;
  focusCondition: number[];
  children: React.ReactNode;
}

export default function AutoFocusForm({
  children,
  values,
  focusCondition,
  ...props
}: AutoFocusFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const inputsRef = useRef<NodeListOf<HTMLInputElement>>(null);

  useEffect(() => {
    inputsRef.current = formRef.current.querySelectorAll("input");
  }, []);

  useEffect(() => {
    Array.from(inputsRef.current)
      .find((input, index) => input.value.length !== focusCondition[index])
      .focus();
  }, [values, focusCondition]);

  return (
    <form ref={formRef} id="auto-focus-form" {...props}>
      {children}
    </form>
  );
}
