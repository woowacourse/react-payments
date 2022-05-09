import { useState, useEffect, useContext } from "react";
import { ErrorContext } from "provider/ErrorContext";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { setError } = useContext(ErrorContext);

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
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    callApi();
  }, [url, setError]);

  return { data, loading };
}
export default useFetch;
