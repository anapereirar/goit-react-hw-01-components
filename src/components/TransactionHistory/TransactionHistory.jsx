import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css["transaction-history"]}>
          <thead className={css["head"]}>
            <tr className={css['head-table']}>
              <th className={css["title-table"]}>TYPE</th>
              <th className={css["title-table"]}>AMOUNT</th>
              <th className={css["title-table"]}>CURRENCY</th>
            </tr>
          </thead>
    
          <tbody>
            {items.map(({id, type, amount, currency}) => {
              return (
                <tr key={id} className={css["arrow-table"]}>
                  <td>{type}</td>
                  <td>{amount}</td>
                  <td>{currency}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    };

export default TransactionHistory;


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ).isRequired,
  };