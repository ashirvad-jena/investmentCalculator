export default function UserInput({ inputNames, onUserInput }) {

  return (
    <div id="user-input" className="input-group">
      <div>
        <label>INITIAL INVESTMENT</label>
        <input
          name={inputNames[0]}
          onChange={onUserInput} />
        <label>ANNUAL INVESTMENT</label>
        <input
          name={inputNames[1]}
          onChange={onUserInput} />
      </div>

      <div>
        <label>EXPECTED RETURN</label>
        <input
          name={inputNames[2]}
          onChange={onUserInput} />
        <label>DURATION</label>
        <input
          name={inputNames[3]}
          onChange={onUserInput} />
      </div>
    </div>
  )
}