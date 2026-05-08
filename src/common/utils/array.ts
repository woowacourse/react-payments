// 배열을 지정한 길이로 맞춘다.
// 길이가 모자라면 > fill 값으로 채운다.
// 길이가 길면 > 잘라낸다.
export function resizeArray<T>(arr: T[], length: number, fill: T): T[] {
  return Array.from({length}, (_, i) => arr[i] ?? fill);
}
