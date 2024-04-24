const useFocusNext = (refs: React.MutableRefObject<HTMLInputElement[]>) => {

  const focusedRef = refs.current.find((ref) => ref === document.activeElement);

  const focusNext = () => {
    if (!focusedRef) return;
    const nextRef = refs.current.find((_, index) => refs.current[index - 1] === focusedRef);
    if (!nextRef) {
      focusedRef.blur();
    } else {
      nextRef.focus();
    }
  }
  return { focusNext }
}

export default useFocusNext;