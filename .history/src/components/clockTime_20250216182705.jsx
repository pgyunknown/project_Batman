

const ClockTime = () => {
  let time = new Date();

  <>
    <p>Current time:{time.toLocaleTimeString }</p>
    <p>Current Date:{time.toLocaleDateString }</p>
  </>
};

export default ClockTime