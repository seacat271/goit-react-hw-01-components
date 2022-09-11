import PropTypes from 'prop-types';
import getRandomHexColor from "../../utils/RandomColor";
import css from "./StatList.module.css";

export default function StatList (props) {
  const {stats} = props;
    return (
      <ul className={css.item__list}>
      {stats.map(item => (
       <li style={{backgroundColor: `${getRandomHexColor()}`}} className={css.item} key={item.id}>
          <span className={css.label} >{item.label}</span>
          <span className={css.percentage}>{item.percentage}</span>
       </li>
   ))}
    </ul>
      )
}

StatList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })),
};