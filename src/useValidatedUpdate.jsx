export default function useValidatedUpdate(validation, setter) {
  return (event, order) => {
    const {
      target: { value },
    } = event;

    if (!validation(value, order)) return;

    if (order !== undefined) {
      setter(value, order);
      return;
    }

    setter(value);
  };
}
