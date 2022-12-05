import React from "react"
import {useAppDispatch} from "../../globalState/hooks"
import {navigateToFeed, navigateTab} from "../../globalState/reducerActions"
import {useGetVegetarianPostsQuery} from "../../globalState/api"
import {TabItemsNames} from "../../resources/strings"
import CardGroup from "../subcomponents/cards/CardGroup"




function Vegetarian(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useAppDispatch()
    dispatch(navigateTab(TabItemsNames.VEGETARIAN))

    dispatch(navigateToFeed({useQuery: () => useGetVegetarianPostsQuery, header: TabItemsNames.VEGETARIAN, tag: ""}))

    return (
        <CardGroup/>
    )


}

export default Vegetarian