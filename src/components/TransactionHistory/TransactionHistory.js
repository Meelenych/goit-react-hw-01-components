import styles from "./Transactions.module.css";
import PropTypes from "prop-types";

function TransactionHistory({ items }) {
  // console.log(prop);
  return (
    <>
      <table className={styles.transactionHistory}>
        {}
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

// eslint-disable-next-line react/no-typos
TransactionHistory.PropTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionHistory;
