import { useState, useEffect } from "react";
 
const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const abortCtrl = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCtrl.signal })
        .then((result) => {
          console.log(result);
          if (!result.ok) {
            throw Error("Could not fetch data for resources!");
          }
          return result.json();
        })
        .then((dataJson) => {
          setData(dataJson);
          setIsLoading(false);
          setError(null);
        })
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log("Fetch is aborted");
          } else {
            setIsLoading(false);
            setError(error.message);
          }
        })
        .finally(() => {
          console.log("Finally is called!");
        });
    }, 2000);
    return () => abortCtrl.abort();
  }, [url]);
 
  return { data, isLoading, error };
};
 
export default UseFetch;