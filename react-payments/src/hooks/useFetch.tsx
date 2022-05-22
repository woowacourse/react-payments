import { useState, useEffect, useContext } from "react";
import { ErrorContext } from "provider/ErrorContext";

function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const errorContext = useContext(ErrorContext);
  if (!errorContext) {
    throw new Error("Cannot find ErrorContext");
  }
  const { setError } = errorContext;

  useEffect(() => {
    const callApi = async () => {
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: { "Content-type": "application/json" },
        });

        if (!res.ok) {
          throw new Error("서버에서 데이터를 불러오는데 실패했습니다");
        }
        const data = (await res.json()).data;
        setData(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    callApi();
  }, [url, setError]);

  return { data, loading };
}
export default useFetch;
