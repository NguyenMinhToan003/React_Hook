import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        let res = await axios.get(url);
        let dataFetch = res && res.data ? res.data : [];
        setLoading(false);
        setData(dataFetch);
      } catch (err) {
        console.log(">>>>>>> check error: ", err);
      }
    }
    fetchData();
    console.log(">>>> check data ", data);
  }, [url]);
  return {
    data,
    loading,
  };
};
export default useFetch;
