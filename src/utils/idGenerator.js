export const idGenerator = () => {
  const now = new Date();

  const YYYY = now.getFullYear().toString();
  const MM = now.getMonth().toString().padStart(2, '0');
  const DD = now.getDate().toString().padStart(2, '0');
  const hh = now.getHours().toString().padStart(2, '0');
  const mm = now.getMinutes().toString().padStart(2, '0');
  const ss = now.getSeconds().toString().padStart(2, '0');

  return `${YYYY}${MM}${DD}${hh}${mm}${ss}`;
};
