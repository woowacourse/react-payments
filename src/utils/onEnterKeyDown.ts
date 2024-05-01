export default function onEnterKeyDown(
  e: React.KeyboardEvent,
  callback: () => void,
  allowedBlank: boolean = false
) {
  if (!allowedBlank) {
    if (!(e.target instanceof HTMLInputElement)) {
      return;
    }
    if (!e.target.value) {
      return;
    }
  }

  if (e.key !== "Enter") {
    return;
  }

  callback();
}
