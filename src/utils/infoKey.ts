export function matchKeyWithId(id: string) {
  if (id === 'DATE0') return 'MONTH';
  else if (id === 'DATE1') return 'YEAR';
  else return id.slice(0, id.length - 1);
}
