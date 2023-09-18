import { useState, useEffect } from "react";
import axios from "axios";
import "./childComponent.scss";
const ChildComponent = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    setTimeout(async () => {
      let res = await axios.get(`https://shibe.online/api/shibes?count=100`);
      let data = res && res.data ? res.data : [];
      setLoading(false);
      setData(data);
    }, 2000);
  }, []);
  return (
    <div className="listImage">
      {loading === false && data && data.length > 0 ? (
        data.map((item, index) => (
          <img
            key={index}
            src={item}
            alt={`Image ${index}`}
            className="image"
          />
        ))
      ) : (
        <div class="spinner-border loading" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
};
export default ChildComponent;
