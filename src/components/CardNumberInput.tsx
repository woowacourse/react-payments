import { ChangeEvent, useState } from "react";

const CardNumberInput = () => {
  const [state, setState] = useState({
    number1: "",
    number2: "",
    number3: "",
    number4: "",
  });

  const handleChangeState = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value = target.value.replace(/[^\d]/g, "").slice(0, 4);

    setState((prevState) => {
      return { ...prevState, [target.name]: Number(value) };
    });
  };

  return (
    <>
      <label htmlFor="card-label">카드 번호</label>
      <input
        type="number"
        name="number1"
        id="card-label"
        aria-labelledby="card-label"
        value={state.number1}
        onChange={handleChangeState}
      />
      <input
        type="number"
        name="number2"
        aria-labelledby="card-label"
        value={state.number2}
        onChange={handleChangeState}
      />
      <input
        type="password"
        name="number3"
        maxLength={4}
        aria-labelledby="card-label"
        value={state.number3}
        onChange={handleChangeState}
      />
      <input
        type="password"
        name="number4"
        maxLength={4}
        aria-labelledby="card-label"
        value={state.number4}
        onChange={handleChangeState}
      />
    </>
  );
};

export default CardNumberInput;
