import React from "react"
import {useAppDispatch} from "../../globalState/hooks"
import {navigateToFeed, navigateTab} from "../../globalState/reducerActions"
import {useGetSaladsPostsQuery} from "../../globalState/api"
import {TabItemsNames} from "../../resources/strings"
import CardGroup from "../subcomponents/cards/CardGroup"




function Salads(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useAppDispatch()
    dispatch(navigateTab(TabItemsNames.SALADS))

    dispatch(navigateToFeed({useQuery: () => useGetSaladsPostsQuery, header: TabItemsNames.SALADS, tag: ""}))

    return (
        <CardGroup/>
    )


}

export default Salads