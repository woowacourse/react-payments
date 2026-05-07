export function maskCardNumberTail (array : string[]){
  if (array[2] !== "") {
    array[2] = "*".repeat(array[2].length);
  }

  if (array[3] !== "") {
    array[3] = "*".repeat(array[3].length);
  }
  return array
}