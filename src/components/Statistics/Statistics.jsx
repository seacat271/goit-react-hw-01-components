import PropTypes from 'prop-types';

export default function Statistics (props) {
    const {title, children} = props;
    return (<section class="statistics">
    {title && <h2 class="title">{title}</h2>}
    {children}
  </section>);
}; 

Statistics.propTypes = {
  title: PropTypes.string,
};

