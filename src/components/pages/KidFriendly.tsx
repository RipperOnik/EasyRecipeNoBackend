import React from "react"
import {useAppDispatch} from "../../globalState/hooks"
import {navigateToFeed, navigateTab} from "../../globalState/reducerActions"
import {useGetKidPostsQuery} from "../../globalState/api"
import {TabItemsNames} from "../../resources/strings"
import CardGroup from "../subcomponents/cards/CardGroup"


function KidFriendly(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useAppDispatch()
    dispatch(navigateTab(TabItemsNames.KIDFRIENDLY))

    dispatch(navigateToFeed({useQuery: () => useGetKidPostsQuery, header: TabItemsNames.KIDFRIENDLY, tag: ""}))

    return (
        <CardGroup/>
    )


}

export default KidFriendly