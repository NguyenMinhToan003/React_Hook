import { useEffect, useState } from "react";

import ChildComponent from "./childComponent";
const Component = () => {
  const [name, setName] = useState("Toan");
  const [num, setnum] = useState(0);

  useEffect(() => {
    // setnum(num + 1);
    console.log(">>>>>> this is useEffect with name change");
  }, [name]);
  const handlerInput = (event) => {
    setName(event.target.value);
  };
  const countDown = () => {
    setnum(num + 1);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    document.title = `this is ${name}`;
  };
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => handlerInput(event)}
        />
        <button type="submit">Submit</button>
      </form>
      <hr />
      <ChildComponent countDown={countDown} number={num} />
    </div>
  );
};

export default Component;
