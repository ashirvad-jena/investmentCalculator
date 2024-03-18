import { formatter } from "../util/investment"

export default function Results({ data }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.year}>
            <td>{row.year}</td>
            <td>{formatter.format(row.valueEndOfYear)}</td>
            <td>{formatter.format(row.interest)}</td>
            <td>{formatter.format(row.annualInvestment)}</td>
            <td>{formatter.format(row.valueEndOfYear - row.annualInvestment * row.year)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}