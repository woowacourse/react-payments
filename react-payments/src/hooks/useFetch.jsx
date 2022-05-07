import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const callApi = async () => {
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: { "Content-type": "application/json" },
        });
        const data = (await res.json()).data;
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    callApi();
  }, [url]);

  return { data, loading, error };
}
export default useFetch;
