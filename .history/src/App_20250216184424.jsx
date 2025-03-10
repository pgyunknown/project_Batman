import ClockHeading from "./components/clockHeading"
import ClockSlogan from "./components/clockSlogan"
import ClockTime from "./components/clockTime"


const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <ClockTime></ClockTime>
    </div>
  )
}

export default App