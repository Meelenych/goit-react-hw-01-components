import styles from "../Statistics/Statistics.module.css";
import PropTypes from "prop-types";

function Statistics({ title, stats }) {
  // console.log(prop);
  return (
    <>
      <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles.statList}>
          {stats.map(({ id, label, percentage }) => (
            <li className={styles.item} key={id}>
              <p className={styles.label}>{label}</p>
              <p className={styles.percentage}>{percentage}%</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;
