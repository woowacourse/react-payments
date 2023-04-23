import InputListBox from './InputListBox';

interface NamedInputListBoxProps {
  inputListInformation: React.ComponentPropsWithoutRef<typeof InputListBox>;
  name?: string;
  id?: string;
}

export type { NamedInputListBoxProps };

function NamedInputListBox({ inputListInformation, name, id }: NamedInputListBoxProps) {
  return (
    <>
      {name && <label htmlFor={id}>{name}</label>}
      <InputListBox {...inputListInformation} />
    </>
  );
}

export default NamedInputListBox;
