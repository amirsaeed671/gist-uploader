import { useState, useEffect } from "react";
import fetchGists from "observables/fetch-gists";

function useFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const observer = {
      next: (gists) => {
        setData(gists);
        setLoading(false);
      },
      error: (err) => {
        setLoading(false);
        setError(err);
      },
      complete: () => {
        setLoading(false);
      },
    };
    fetchGists().subscribe(observer);
  }, []);

  return [data, loading, error];
}

export default useFetch;
