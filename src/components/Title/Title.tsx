export type Props = { text: string };

function Title({ text }: Props) {
  return (
    <>
      <span>{text}</span>
    </>
  );
}

export default Title;
