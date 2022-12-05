import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NavbarItemsNames, TabItemsNames } from '../resources/strings';
import {RootState} from "./store"
import DetailedPage from "../components/interfaces/DetailedPage"
import api from "../globalState/api"

const currentNavbarItem = createSlice({
    name:'currentNavbarItem',
    initialState: {id: NavbarItemsNames.HOME},
    reducers: {
        navigateNavbar(state,action: PayloadAction<string>){
            state.id = action.payload
        }
    }
})

const currentTabItem = createSlice({
    name: 'currentTabItem',
    initialState: {id: TabItemsNames.QUICKANDEASY},
    reducers: {
        navigateTab(state, action: PayloadAction<string>){
            state.id = action.payload
        }
    }
})

let initialState: DetailedPage = {id: "", urlImage: "", title: "", author: "", averageRating: 0, totalReviewCount: 0, preparationTimeSeconds: 0, ingridients: [""], steps: [""], calories: 0 }



const currentDetailedPage = createSlice({
    name: 'currentDetailedPage',
    initialState,
    reducers: {
        navigateToDetailedPage(state, action: PayloadAction<DetailedPage>){
            state.id = action.payload.id
            state.urlImage = action.payload.urlImage
            state.title = action.payload.title
            state.author = action.payload.author
            state.averageRating = action.payload.averageRating
            state.totalReviewCount = action.payload.totalReviewCount
            state.preparationTimeSeconds = action.payload.preparationTimeSeconds
            state.ingridients = action.payload.ingridients
            state.steps = action.payload.steps
            state.calories = action.payload.calories
        }
    }
})


const currentFeed = createSlice({
    name: "currentFeed",
    initialState: {useQuery: () => api.useGetPopularPostsQuery, header: "", tag: ""},
    reducers:{
        navigateToFeed(state, action){
            state.useQuery = action.payload.useQuery
            state.header = action.payload.header
            state.tag = action.payload.tag
        }
    }
})


export const {navigateToFeed} = currentFeed.actions
export const {navigateToDetailedPage} = currentDetailedPage.actions
export const {navigateNavbar} = currentNavbarItem.actions
export const {navigateTab} = currentTabItem.actions


export const currentFeedReducer = currentFeed.reducer
export const currentNavbarItemReducer =  currentNavbarItem.reducer
export const currentTabItemReducer = currentTabItem.reducer
export const currentDetailedPageReducer = currentDetailedPage.reducer

export const currentNavbarID = (state: RootState) => state.currentNavbarItem.id