

const clockTime = () => {
  let time = new Date();

  return (<p>Current time {time.toLocaleTimeString} & Date: {time.toLocaleDateString}</p>);
}

export default clockTime