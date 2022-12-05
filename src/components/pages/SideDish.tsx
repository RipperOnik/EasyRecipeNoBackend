import React from "react"
import {useAppDispatch} from "../../globalState/hooks"
import {navigateToFeed, navigateTab} from "../../globalState/reducerActions"
import {useGetSideDishPostsQuery} from "../../globalState/api"
import {TabItemsNames} from "../../resources/strings"
import CardGroup from "../subcomponents/cards/CardGroup"




function SideDish(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useAppDispatch()
    dispatch(navigateTab(TabItemsNames.SIDEDISH))

    dispatch(navigateToFeed({useQuery: () => useGetSideDishPostsQuery, header: TabItemsNames.SIDEDISH, tag: ""}))

    return (
        <CardGroup/>
    )


}

export default SideDish