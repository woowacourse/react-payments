interface CheckButtonProps {
  className: string;
  onSubmit: () => void;
  text: string;
}

export default function CheckButton({
  className,
  onSubmit,
  text,
}: CheckButtonProps) {
  return (
    <button className={className} onClick={onSubmit}>
      {text}
    </button>
  );
}
