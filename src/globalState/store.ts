import { configureStore } from '@reduxjs/toolkit'
import {currentNavbarItemReducer, currentTabItemReducer, currentDetailedPageReducer, currentFeedReducer} from "./reducerActions"
import { apiSlice } from './api'

export const store = configureStore({
  reducer: {
    currentNavbarItem: currentNavbarItemReducer,
    currentTabItem: currentTabItemReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    currentDetailedPage: currentDetailedPageReducer,
    currentFeed: currentFeedReducer


},
middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch