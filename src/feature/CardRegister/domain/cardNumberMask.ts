export const MASK_FROM_INDEX = 2;

export const maskCardNumbers = (chunks: string[]) =>
  chunks.map((chunk, i) => (i >= MASK_FROM_INDEX ? '·'.repeat(chunk.length) : chunk));
