import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./subcomponents/navbar/Navbar";

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from "../globalState/hooks";
import { navigateNavbar, navigateToFeed } from "../globalState/reducerActions";
import { NavbarItemsNames, TabItemsNames } from "../resources/strings";
import { Dishes } from "../resources/strings";
import { useGetCertainDishPostsQuery } from "../globalState/api";
import { navigateTab } from "../globalState/reducerActions";
import api from "../globalState/api";



const Layout = () => {

  const { pathname } = useLocation();
  const dispatch = useAppDispatch()

  useEffect(() => {
    // window.scrollTo(0, 0);
    window.scrollTo({
      top: 0,
      left: 0
    });
  }, [pathname]);

  useEffect(() => {
    if(pathname.slice(1,7) === "browse"){
      dispatch(navigateNavbar(NavbarItemsNames.BROWSE))
    }
    else if(pathname === "/"){
      dispatch(navigateNavbar(NavbarItemsNames.HOME))
    }
    else if(pathname.slice(1,7) === "dishes"){
      dispatch(navigateNavbar(NavbarItemsNames.DISHES))
    }
  })
  useEffect(() => {

    if (pathname === "/dishes/brownie") {
      dispatch(navigateToFeed({useQuery: () => useGetCertainDishPostsQuery, header: Dishes.brownie.name, tag: Dishes.brownie.tag}))
      dispatch(navigateTab(Dishes.brownie.name))
    }
    else if (pathname === "/dishes/burger") {
      dispatch(navigateToFeed({useQuery: () => useGetCertainDishPostsQuery, header: Dishes.burger.name, tag: Dishes.burger.tag}))
      dispatch(navigateTab(Dishes.burger.name))
    }
    else if (pathname === "/dishes/cake") {
      dispatch(navigateToFeed({useQuery: () => useGetCertainDishPostsQuery, header: Dishes.cake.name, tag: Dishes.cake.tag}))
      dispatch(navigateTab(Dishes.cake.name))
    }
    else if (pathname === "/dishes/cookie") {
      dispatch(navigateToFeed({useQuery: () => useGetCertainDishPostsQuery, header: Dishes.cookie.name, tag: Dishes.cookie.tag}))
      dispatch(navigateTab(Dishes.cookie.name))
    }
    else if (pathname === "/dishes/lasagna") {
      dispatch(navigateToFeed({useQuery: () => useGetCertainDishPostsQuery, header: Dishes.lasagna.name, tag: Dishes.lasagna.tag}))
      dispatch(navigateTab(Dishes.lasagna.name))
    }
    else if (pathname === "/dishes/pancake") {
      dispatch(navigateToFeed({useQuery: () => useGetCertainDishPostsQuery, header: Dishes.pancake.name, tag: Dishes.pancake.tag}))
      dispatch(navigateTab(Dishes.pancake.name))
    }
    else if (pathname === "/dishes/pie") {
      dispatch(navigateToFeed({useQuery: () => useGetCertainDishPostsQuery, header: Dishes.pie.name, tag: Dishes.pie.tag}))
      dispatch(navigateTab(Dishes.pie.name))

    }
    else if (pathname === "/dishes/pizza") {
      dispatch(navigateToFeed({useQuery: () => useGetCertainDishPostsQuery, header: Dishes.pizza.name, tag: Dishes.pizza.tag}))
      dispatch(navigateTab(Dishes.pizza.name))
    }
    else if (pathname === "/dishes/sandwich") {
      dispatch(navigateToFeed({useQuery: () => useGetCertainDishPostsQuery, header: Dishes.sandwich.name, tag: Dishes.sandwich.tag}))
      dispatch(navigateTab(Dishes.sandwich.name))
    }



    // else if (pathname === "/browse/appetizers") {
    //   dispatch(navigateToFeed({useQuery: () => api.useGetAppetizersPostsQuery, header: TabItemsNames.APPETIZERS, tag: ""}))
    //   dispatch(navigateTab(TabItemsNames.APPETIZERS))
    // }
    // else if (pathname === "/browse/desserts") {
    //   dispatch(navigateToFeed({useQuery: () => api.useGetDessertsPostsQuery, header: TabItemsNames.DESSERTS, tag: ""}))
    //   dispatch(navigateTab(TabItemsNames.DESSERTS))
    // }
    // else if (pathname === `/browse/${TabItemsNames.KIDFRIENDLY.toLowerCase()}`) {
    //   dispatch(navigateToFeed({useQuery: () => api.useGetKidPostsQuery, header: TabItemsNames.KIDFRIENDLY, tag: ""}))
    //   dispatch(navigateTab(TabItemsNames.KIDFRIENDLY))
    // }
    // else if (pathname === `/browse/${TabItemsNames.MAINDISH.toLowerCase()}`) {
    //   dispatch(navigateToFeed({useQuery: () => api.useGetMainDishPostsQuery, header: TabItemsNames.MAINDISH, tag: ""}))
    //   dispatch(navigateTab(TabItemsNames.MAINDISH))
    // }
    // else if (pathname === `/browse/${TabItemsNames.QUICKANDEASY.toLowerCase()}`) {
    //   dispatch(navigateToFeed({useQuery: () => api.useGetEasyPostsQuery, header: TabItemsNames.QUICKANDEASY, tag: ""}))
    //   dispatch(navigateTab(TabItemsNames.QUICKANDEASY))
    // }
    // else if (pathname === `/browse/${TabItemsNames.SALADS.toLowerCase()}`) {
    //   dispatch(navigateToFeed({useQuery: () => api.useGetSaladsPostsQuery, header: TabItemsNames.SALADS, tag: ""}))
    //   dispatch(navigateTab(TabItemsNames.SALADS))
    // }
    // else if (pathname === `/browse/${TabItemsNames.SIDEDISH.toLowerCase()}`) {
    //   dispatch(navigateToFeed({useQuery: () => api.useGetSideDishPostsQuery, header: TabItemsNames.SIDEDISH, tag: ""}))
    //   dispatch(navigateTab(TabItemsNames.SIDEDISH))
    // }
    // else if (pathname === `/browse/${TabItemsNames.VEGETARIAN.toLowerCase()}`) {
    //   dispatch(navigateToFeed({useQuery: () => api.useGetVegetarianPostsQuery, header: TabItemsNames.VEGETARIAN, tag: ""}))
    //   dispatch(navigateTab(TabItemsNames.VEGETARIAN))
    // }


    

  })


  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;