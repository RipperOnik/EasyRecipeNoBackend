import React from "react";
import ScrollableItem from "./ScrollableItem";
import {Cuisines} from "../../../resources/strings"




function Scrollable() {
  return (
    <div className="container-fluid scrollable" style={{marginBottom: '50px'}}>
      {Cuisines.map((el, index) => {
        return <ScrollableItem key={el.tag} displayName={el.displayName} iconImage={el.iconImage} tag={el.tag} />
      })}
    </div>
  );
}

export default Scrollable;
