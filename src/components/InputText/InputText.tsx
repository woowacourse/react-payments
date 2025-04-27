import styles from "./InputText.module.css";

interface Props {
  inputValue: string;
  variant: "title" | "subtitle" | "description";
  useSuffix?: boolean;
}

export default function InputText({ inputValue, variant }: Props) {
  const className = styles[`input-${variant}`];

  return (
    <div className={className}>
      <p>{inputValue}</p>
    </div>
  );
}
