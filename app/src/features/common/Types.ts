export type AsyncStatus = "idle" | "loading" | "success" | "error";

export type APIErrorMessages = Record<
  string,
  { code: string; message: string } | null | undefined
>;
