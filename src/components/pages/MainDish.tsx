import React from "react"
import {useAppDispatch, useAppSelector} from "../../globalState/hooks"
import {navigateToFeed, navigateTab} from "../../globalState/reducerActions"
import {useGetMainDishPostsQuery} from "../../globalState/api"
import {TabItemsNames} from "../../resources/strings"
import CardGroup from "../subcomponents/cards/CardGroup"




function MainDish(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useAppDispatch()
    dispatch(navigateTab(TabItemsNames.MAINDISH))

    dispatch(navigateToFeed({useQuery: () => useGetMainDishPostsQuery, header: TabItemsNames.MAINDISH, tag: ""}))

    return (
        <CardGroup/>
    )


}

export default MainDish