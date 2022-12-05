import React from "react"
import {useAppDispatch} from "../../globalState/hooks"
import {navigateToFeed, navigateTab} from "../../globalState/reducerActions"
import {useGetAppetizersPostsQuery} from "../../globalState/api"
import {TabItemsNames} from "../../resources/strings"
import CardGroup from "../subcomponents/cards/CardGroup"




function Appetizers(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useAppDispatch()
    dispatch(navigateTab(TabItemsNames.APPETIZERS))

    dispatch(navigateToFeed({useQuery: () => useGetAppetizersPostsQuery, header: TabItemsNames.APPETIZERS, tag: ""}))

    return (
        <CardGroup/>
    )

}

export default Appetizers