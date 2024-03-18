import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"
import { calculateInvestmentResults } from "./util/investment"

const inputNames = [
  "initialInvestment",
  "annualInvestment",
  "expectedReturn",
  "duration"
]

function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })
  const results = calculateInvestmentResults(userInputs)

  function handleUserInput(identifier, value) {
    setUserInputs(oldInputs => {
      const newInputs = {
        ...oldInputs,
        [identifier]: parseInt(value)
      }
      console.log(newInputs)
      return newInputs
    })
  }

  return (
    <>
      <Header />
      <UserInput userInputs={userInputs} onUserInput={handleUserInput} />
      <Results data={results} />
    </>
  )
}

export default App
