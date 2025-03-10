

let ClockTime = () => {
  let time = new Date();

  return (<p>Current time & DAte {time.toLocaleTimeString()} & {time.toLocaleDateString()}</p>);
}

export default ClockTime;