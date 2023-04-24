export function matchKeyWithId(id: string) {
  if (id === 'DATE0') return 'MONTH';
  else if (id === 'DATE1') return 'YEAR';
  else return id.slice(0, id.length - 1);
}

export function joinValues(cardInfo: any, keyName: string) {
  const values = [];

  for (const key in cardInfo) {
    if (key.includes(keyName)) {
      values.push(cardInfo[key]);
    }
  }

  return { [keyName]: values.join('') };
}
