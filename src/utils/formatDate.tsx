export const formatDate = (date: string) => {
  if (date.length === 1) {
    return `0${date}`;
  }
  return date;
};
