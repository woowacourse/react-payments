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
  const mutate = async (data: Body, options?: MutationOptions<Response>) => {
    try {
      const response = await mutationFn(data);
      if (options?.onSuccess) {
        options.onSuccess(response);
      }
    } catch (error) {
      if (options?.onError) {
        options.onError(
          error instanceof Error ? error : new Error(String(error)),
        );
      }
    }
  };

  return { mutate };
};

export default useMutation;
