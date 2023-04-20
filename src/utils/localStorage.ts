export function updateData(data: unknown, id: "cards") {
  const origin = localStorage.getItem(id);
  if (origin === null) {
    localStorage.setItem(id, JSON.stringify([data]));
    return;
  }
  const updatedList = JSON.parse(origin).push(data);
  localStorage.setItem(id, JSON.stringify(updatedList));
}

export function getData(id: "cards") {
  const data = localStorage.getItem(id);
  if (data === null) return [];
  return [JSON.parse(data)];
}
