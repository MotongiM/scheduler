import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";
function formatSpots(spots) {
    if (spots === 0) {
      return "no spots remaining";
    } else if (spots === 1) {
      return `${spots} spot remaining`;
    } else {
    return `${spots} spots remaining`;
    }
}
  

export default function DayListItem(props) {
  const availableDays = formatSpots(props.spots)
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": !props.spots
  });

    return (
    <li 
    className={dayClass}
    onClick={() => props.setDay(props.name)}
    selected={props.selected}
    data-testid="day"
    >
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{availableDays}</h3>
    </li>
  );
}