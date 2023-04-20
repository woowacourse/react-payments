interface Props {
  initialRefs: Array<React.RefObject<HTMLInputElement>>;
  maxLength: number;
}

function useAutoFocus({ initialRefs, maxLength }: Props) {
  const nextInputFocus = (index = 0) => {
    if (index === initialRefs.length - 1) return;

    if (initialRefs[index].current?.value.length === maxLength) {
      initialRefs[index + 1].current?.focus();
    }
  };

  return {
    nextInputFocus,
  };
}

export default useAutoFocus;
