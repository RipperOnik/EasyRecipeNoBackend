import React from "react";
import "../styles/styles.css";
import CardGroup from "./subcomponents/cards/CardGroup";
import Home from "./pages/Home";
import Layout from "./Layout";
import { createHashRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

import Tabs from "./subcomponents/tabs/Tabs";

import DetailedPage from "./pages/DetailedPage";
import KidFriendly from "./pages/KidFriendly";
import QuickAndEasy from "./pages/QuickAndEasy";
import MainDish from "./pages/MainDish";
import Desserts from "./pages/Desserts";
import Appetizers from "./pages/Appetizers";
import Salads from "./pages/Salads";
import Vegetarian from "./pages/Vegetarian";
import SideDish from "./pages/SideDish";
import { TabItemsNames } from "../resources/strings";
import { Dishes } from "../resources/strings";

function App() {
  const tabsBrowse: string[] = [];
  tabsBrowse.push(TabItemsNames.APPETIZERS);
  tabsBrowse.push(TabItemsNames.DESSERTS);
  tabsBrowse.push(TabItemsNames.KIDFRIENDLY);
  tabsBrowse.push(TabItemsNames.MAINDISH);
  tabsBrowse.push(TabItemsNames.QUICKANDEASY);
  tabsBrowse.push(TabItemsNames.SALADS);
  tabsBrowse.push(TabItemsNames.SIDEDISH);
  tabsBrowse.push(TabItemsNames.VEGETARIAN);

  const tabsDishes: string[] = [];
  tabsDishes.push(Dishes.brownie.name);
  tabsDishes.push(Dishes.burger.name);
  tabsDishes.push(Dishes.cake.name);
  tabsDishes.push(Dishes.cookie.name);
  tabsDishes.push(Dishes.lasagna.name);
  tabsDishes.push(Dishes.pancake.name);
  tabsDishes.push(Dishes.pie.name);
  tabsDishes.push(Dishes.pizza.name);
  tabsDishes.push(Dishes.sandwich.name);

  const router = createHashRouter(
    [
      {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: `/browse/${TabItemsNames.QUICKANDEASY.toLowerCase()}`,
            element: (
              <div>
                <Tabs tabs={tabsBrowse} path={"/browse/"} /> <QuickAndEasy />
              </div>
            ),
          },
          {
            path: `/browse/${TabItemsNames.KIDFRIENDLY.toLowerCase()}`,
            element: (
              <div>
                <Tabs tabs={tabsBrowse} path={"/browse/"} /> <KidFriendly />
              </div>
            ),
          },
          {
            path: `/browse/${TabItemsNames.MAINDISH.toLowerCase()}`,
            element: (
              <div>
                <Tabs tabs={tabsBrowse} path={"/browse/"} /> <MainDish />
              </div>
            ),
          },
          {
            path: `/browse/${TabItemsNames.SIDEDISH.toLowerCase()}`,
            element: (
              <div>
                <Tabs tabs={tabsBrowse} path={"/browse/"} />
                <SideDish />
              </div>
            ),
          },
          {
            path: `/browse/${TabItemsNames.DESSERTS.toLowerCase()}`,
            element: (
              <div>
                <Tabs tabs={tabsBrowse} path={"/browse/"} /> <Desserts />
              </div>
            ),
          },
          {
            path: `/browse/${TabItemsNames.APPETIZERS.toLowerCase()}`,
            element: (
              <div>
                <Tabs tabs={tabsBrowse} path={"/browse/"} /> <Appetizers />
              </div>
            ),
          },
          {
            path: `/browse/${TabItemsNames.SALADS.toLowerCase()}`,
            element: (
              <div>
                <Tabs tabs={tabsBrowse} path={"/browse/"} /> <Salads />
              </div>
            ),
          },
          {
            path: `/browse/${TabItemsNames.VEGETARIAN.toLowerCase()}`,
            element: (
              <div>
                <Tabs tabs={tabsBrowse} path={"/browse/"} /> <Vegetarian />
              </div>
            ),
          },

          {
            path: "/recipe/:id",
            element: <DetailedPage />,
          },
          {
            path: "/feed/:type",
            element: <CardGroup />,
          },
          {
            path: "/dishes/:dish",
            element: (
              <div>
                {" "}
                <Tabs tabs={tabsDishes} path={"/dishes/"} /> <CardGroup />{" "}
              </div>
            ),
          },
        ],
      },
    ],
    { basename: "/" }
  );

  return <RouterProvider router={router} />;
}

export default App;
