export function CardNumberInput() {
  return (
    <>
      <fieldset>
        <input type="number" minLength={1} maxLength={4}></input>
        <input type="number" minLength={1} maxLength={4}></input>
        <input type="number" minLength={1} maxLength={4}></input>
        <input type="number" minLength={1} maxLength={4}></input>
      </fieldset>
    </>
  );
}
