const autoFocusToNext = (e: React.ChangeEvent<HTMLInputElement>, maxLength: number) => {
  const input = e.target;
  if (input.value.length >= maxLength) {
    const form = input.form;
    if (!form) return;

    const elements = Array.from(form.elements) as HTMLElement[];
    const index = elements.indexOf(input);
    if (index > -1 && elements[index + 1]) {
      const nextElement = elements[index + 1];
      if (nextElement instanceof HTMLInputElement) {
        nextElement.focus();
      }
    }
  }
};

export default autoFocusToNext;
