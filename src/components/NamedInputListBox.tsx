import InputListBox from './InputListBox';

interface InputLabelBoxProps {
  inputListInformation: React.ComponentPropsWithoutRef<typeof InputListBox>;
  name?: string;
  id?: string;
}

function NamedInputListBox({ inputListInformation, name, id }: InputLabelBoxProps) {
  const { inputInformation, bridgeLetter, autoFocus } = inputListInformation;

  return (
    <>
      {name && <label htmlFor={id}>{name}</label>}
      <InputListBox inputInformation={inputInformation} bridgeLetter={bridgeLetter} autoFocus={autoFocus} />
    </>
  );
}

export default NamedInputListBox;
