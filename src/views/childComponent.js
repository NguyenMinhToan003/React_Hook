import { useState, useEffect } from "react";
import axios from "axios";
import "./childComponent.scss";
const ChildComponent = (props) => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    let res = await axios.get(`https://shibe.online/api/shibes?count=100`);
    let data = res && res.data ? res.data : [];
    setData(data);
  }, []);
  return (
    <div className="listImage">
      {data.map((item, index) => (
        <img key={index} src={item} alt={`Image ${index}`} className="image" />
      ))}
    </div>
  );
};
export default ChildComponent;
