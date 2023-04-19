export type Props = { text: string };

export function Label({ text }: Props) {
  return (
    <>
      <span>{text}</span>
    </>
  );
}
