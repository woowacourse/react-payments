interface Props {
  refs: Array<React.RefObject<HTMLInputElement>>;
  maxLength: number;
}

const useAutoFocus = ({ refs, maxLength }: Props) => {
  const focusNext = (index = 0) => {
    if (index === refs.length - 1) return;

    if (refs[index].current?.value.length === maxLength) {
      refs[index + 1].current?.focus();
    }
  };

  return { focusNext };
};

export default useAutoFocus;
