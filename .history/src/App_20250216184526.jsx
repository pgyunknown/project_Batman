import ClockHeading from "./components/clockHeading"
import ClockSlogan from "./components/clockSlogan"
import ClockTime from "./components/clockTime"


const App = () => {
  return (
    <div className="flex flex-col justify-center ietm-center">
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <ClockTime></ClockTime>
    </div>
  )
}

export default App