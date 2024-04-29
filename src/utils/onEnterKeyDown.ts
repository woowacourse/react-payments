export default function onEnterKeyDown(
  e: React.KeyboardEvent,
  callback: () => void
) {
  if (!(e.target instanceof HTMLInputElement)) {
    return;
  }
  if (!e.target.value) {
    return;
  }
  if (e.key !== "Enter") {
    return;
  }

  callback();
}
