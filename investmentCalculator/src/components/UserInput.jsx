export default function UserInput({ userInputs, onUserInput }) {

  return (
    <section id="user-input">
      <div className="input-group" >
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            required
            type="number"
            name="initialInvestment"
            value={userInputs.initialInvestment}
            onChange={(event) => onUserInput('initialInvestment', event.target.value)} />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            required
            type="number"
            name="annualInvestment"
            value={userInputs.annualInvestment}
            onChange={(event) => onUserInput("annualInvestment", event.target.value)} />
        </p>
        <p>
          <label>EXPECTED RETURN</label>
          <input
            required
            type="number"
            name="expectedReturn"
            value={userInputs.expectedReturn}
            onChange={(event) => onUserInput("expectedReturn", event.target.value)} />
        </p>
        <p>
          <label>DURATION</label>
          <input
            required
            type="number"
            name="duration"
            value={userInputs.duration}
            onChange={(event) => onUserInput("duration", event.target.value)} />
        </p>
      </div>
    </section>
  )
}