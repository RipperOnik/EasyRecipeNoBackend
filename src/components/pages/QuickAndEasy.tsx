import React from "react"
import {useAppDispatch} from "../../globalState/hooks"
import {navigateToFeed, navigateTab} from "../../globalState/reducerActions"
import {useGetEasyPostsQuery} from "../../globalState/api"
import {TabItemsNames} from "../../resources/strings"
import CardGroup from "../subcomponents/cards/CardGroup"




function QuickAndEasy(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useAppDispatch()
    dispatch(navigateTab(TabItemsNames.QUICKANDEASY))

    dispatch(navigateToFeed({useQuery: () => useGetEasyPostsQuery, header: TabItemsNames.QUICKANDEASY, tag: ""}))

    return (
        <CardGroup/>
    )


}

export default QuickAndEasy