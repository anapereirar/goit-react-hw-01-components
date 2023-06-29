import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomHexColor } from './getRandomHexaColor';


const Statistics = ({ title, stats = [] }) => {
    return (
      <section className={css["statistics"]}>
        {title && <h2 className={css["title"]}>{title.toUpperCase()}</h2>}
  
        <ul className={css["stat-list"]}>
          {stats.map((stat) => {
            return (
              <li key={stat.id} className={css["item"]}  style={{ backgroundColor:getRandomHexColor() }}>
                <span className={css["label"]}>{stat.label}</span>
                <span className={css["percentage"]}>{stat.percentage}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    );
  };
  
  export default Statistics;
  
  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
  };

// export const Statistics = ({title, stats}) => {
//   return (
//     <section className={css.statistics}>
//      {title && <h2 className={css.title}>{title}</h2>}

//       <ul className={css.statList}>
//       {stats.map((item, index) => (
//           <li
//             className="item"
//             key = {index}
//             style = {{ backgroundColor: getRandomHexColor()  }}
//           >
//             <span className="label">{item.label}</span>
//             <span className="percentage">{item.percentage}%</span>
//           </li>
//         ))}
//       </ul>
//     </section>
//   )
// };


// Statistics.propTypes = {
//     title: PropTypes.string,
//     stats: PropTypes.array,
//   };