import React from "react"
import {useAppDispatch} from "../../globalState/hooks"
import {navigateToFeed, navigateTab} from "../../globalState/reducerActions"
import {useGetDessertsPostsQuery} from "../../globalState/api"
import {TabItemsNames} from "../../resources/strings"
import CardGroup from "../subcomponents/cards/CardGroup"


function Desserts(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useAppDispatch()
    dispatch(navigateTab(TabItemsNames.DESSERTS))

    dispatch(navigateToFeed({useQuery: () => useGetDessertsPostsQuery, header: TabItemsNames.DESSERTS, tag: ""}))

    return (
        <CardGroup/>
    )


}

export default Desserts