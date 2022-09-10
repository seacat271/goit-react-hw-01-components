import css from "./TransactionHistory.module.css";

export default function TransactionHistory (props) {
  const {items} = props
    return (<table className={css.transaction__history}>
    <thead>
      <tr className={css.head}>
        <th className={css.head__title}>Type</th>
        <th className={css.head__title}>Amount</th>
        <th className={css.head__title}>Currency</th>
      </tr>
    </thead>
  
    <tbody>
      {items.map(({id, type, amount, currency}) => (
      <tr className={css.row} key = {id}>
        <td className={css.type}>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
      ))}

    </tbody>
  </table>)
}