import React, { useEffect, useState } from "react";
class Countdown extends React.Component {
  state = {
    number: 10,
  };

  componentDidMount = () => {
    this.timer = setInterval(() => {
      this.setState({
        number: this.state.number - 1,
      });
      console.log(">>>>>> this is time out ", this.state.number);
    }, 1000);
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.number !== this.state.number && this.state.number === 0)
      clearInterval(this.timer);
  };
  render() {
    return <div>{this.state.number}</div>;
  }
}
const CountDownHook = () => {
  const [num, setNum] = useState(60);
  useEffect(() => {
    if (num === 0) return;
    let timer = setInterval(() => {
      setNum(num - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [num]);
  return <div>this is hook react : {num} </div>;
};
export { Countdown, CountDownHook };
