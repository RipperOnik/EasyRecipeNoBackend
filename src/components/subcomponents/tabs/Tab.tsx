import { Link } from "react-router-dom";
import React from "react";
import {useAppDispatch, useAppSelector} from "../../../globalState/hooks"
import {navigateTab} from "../../../globalState/reducerActions"
import "../../../styles/tabs.css"

interface TabProps{
    name: string;
     url: string
    }

function Tab(props: TabProps) {
    let currentTabID = useAppSelector(state => state.currentTabItem.id)
    let dispatch = useAppDispatch()
    if(currentTabID === props.name){
        return (
            <li className="nav-item">
              <Link className="nav-link active custom-tab active-custom" aria-current="page" to={props.url}>
                {props.name}
              </Link>
            </li>
          );
    }
    else{
        return (
            <li className="nav-item">
              <Link className="nav-link custom-tab" to={props.url}>
                {props.name}
              </Link>
            </li>
          );
    }

}

export default Tab;
