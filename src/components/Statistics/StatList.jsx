import PropTypes from 'prop-types';

export default function StatList (props) {
  const {stats} = props;
    return (
      <ul class="stat-list">
      {stats.map(item => (
       <li class="item" key = {item.id}>
          <span class="label">{item.label}</span>
          <span class="percentage">{item.percentage}</span>
       </li>
   ))}
    </ul>
    
    
      )
  
}

StatList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    percentage: PropTypes.number,
  })),
};