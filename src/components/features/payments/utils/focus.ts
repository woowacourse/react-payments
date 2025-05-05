export const focusNextInput = <T extends string>(
  currentKey: T,
  refs: Record<T, React.RefObject<HTMLInputElement | null>>
) => {
  const keyArray = Object.keys(refs) as T[];
  const currentIndex = keyArray.indexOf(currentKey);
  const nextKey = keyArray[currentIndex + 1];
  if (nextKey && refs[nextKey]?.current) {
    refs[nextKey].current!.focus();
  }
};
