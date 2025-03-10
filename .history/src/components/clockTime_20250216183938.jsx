

let ClockTime = () => {
  let time = new Date();

  return (<p>Current time & Date {time.toLocaleTimeString()} & {time.toLocaleDateString()}</p>);
}

export default ClockTime;