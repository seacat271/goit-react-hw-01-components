import PropTypes from 'prop-types';
import css from "./Statistics.module.css";

export default function Statistics (props) {
    const {title, children} = props;
    return (<section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
    {children}
  </section>);
}; 

Statistics.propTypes = {
  title: PropTypes.string,
};

