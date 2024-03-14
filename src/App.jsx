import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"

const inputNames = [
  "initialInvestment",
  "annualInvestment",
  "expectedReturn",
  "duration"
]

function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  })

  function handleUserInput(event) {
    const { name, value } = event.target
    setUserInputs(oldInputs => {
      return {
        ...oldInputs,
        [name]: value
      }
    })
  }

  return (
    <div>
      <Header />
      <UserInput inputNames={inputNames} onUserInput={handleUserInput} />
    </div>
  )
}

export default App
