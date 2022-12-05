import React from "react";
import NavbarItem from "./NavbarItem"
import {Dishes, NavbarItemsNames, TabItemsNames} from "../../../resources/strings"




function NavbarItems() {

  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     <NavbarItem id={NavbarItemsNames.HOME} name={NavbarItemsNames.HOME} url="/"/>
     <NavbarItem id={NavbarItemsNames.BROWSE} name={NavbarItemsNames.BROWSE} url={`/browse/${TabItemsNames.APPETIZERS.toLowerCase()}`}/>
     <NavbarItem id={NavbarItemsNames.DISHES} name={NavbarItemsNames.DISHES} url={`dishes/${Dishes.brownie.name.toLowerCase()}`}/>
    
    </ul>
  );
}

export default NavbarItems
