export default function useArraySetState(setter) {
  return (value, order) =>
    setter((prevValue) => {
      const newValue = [...prevValue];
      newValue[order] = value;

      return newValue;
    });
}
