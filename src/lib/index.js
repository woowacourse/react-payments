import { isEmpty } from '../utils';

const findEmptyInput = (inputs) => inputs.find(({ current }) => isEmpty(current.value));

const sliceFront = (inputs, index) => inputs.slice(0, index).reverse();

const sliceBack = (inputs, index) => inputs.slice(index + 1)

const focusEmptyInput = (inputs, index) => {
  const input = findEmptyInput(sliceFront(inputs, index)) || findEmptyInput(sliceBack(inputs, index));

  input && input.current.focus();
};

export default focusEmptyInput;
