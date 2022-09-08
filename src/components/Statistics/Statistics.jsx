import PropTypes from 'prop-types';
import StatItems from "./Stat-items"

export default function Statistics (props) {
    const {title, stats} = props;
    return (<section class="statistics">
    <h2 class="title">{title}</h2>
    <StatItems/>
  
    {/* <ul class="stat-list">
      <li class="item">
        <span class="label">.docx</span>
        <span class="percentage">4%</span>
      </li>
      <li class="item">
        <span class="label">.mp3: </span>
        <span class="percentage">14%</span>
      </li>
      <li class="item">
        <span class="label">.pdf</span>
        <span class="percentage">41%</span>
      </li>
      <li class="item">
        <span class="label">.mp4</span>
        <span class="percentage">12%</span>
      </li>
    </ul> */}
  </section>);
}; 

Statistics.propTypes = {
  title: PropTypes.string,
};

