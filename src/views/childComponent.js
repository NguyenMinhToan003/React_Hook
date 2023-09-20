import { useState, useEffect } from "react";
import axios from "axios";
import useFetch from "../custom/fetch";
import "./childComponent.scss";
const ChildComponent = (props) => {
  let { data, loading } = useFetch("https://shibe.online/api/shibes?count=100");

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
