import { useState } from "react";

type MutationStatus = "idle" | "loading" | "success" | "error";

interface MutationOptions<Response> {
  onSuccess?: (response: Response) => void;
  onError?: (error: Error) => void;
}

interface UseMutationParams<Body, Response = unknown> {
  mutationFn: (data: Body) => Promise<Response>;
}

const useMutation = <Body, Response = unknown>({
  mutationFn,
}: UseMutationParams<Body, Response>) => {
  const [status, setStatus] = useState<MutationStatus>("idle");
  const [data, setData] = useState<Response | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const mutate = async (body: Body, options?: MutationOptions<Response>) => {
    setStatus("loading");
    setError(null);

    try {
      const response = await mutationFn(body);
      setStatus("success");
      setData(response);
      options?.onSuccess?.(response);
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      setStatus("error");
      setError(error);
      options?.onError?.(error);
    }
  };

  return { mutate, status, data, error };
};

export default useMutation;
