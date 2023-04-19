export type Props = { text: string };

function Label({ text }: Props) {
  return (
    <>
      <span>{text}</span>
    </>
  );
}

export default Label;
