import { createBrowserRouter } from "react-router";
import HomePage from "../pages/homePage/HomePage";
import Timeline from './../pages/timeline/Timeline';
import RootLayout from "../layout/RootLayout";
import Stats from './../pages/stats/Stats';
import FriendDetails from "../pages/homePage/FriendDetails";
import ErrorElement from "../pages/Error Page/ErrorElement";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage
      },
      {
        path: "/timeline",
        Component: Timeline
      },
      {
        path: "/friend/:id",
        Component: FriendDetails
      },
      {
        path: "/stats",
        Component: Stats
      },
    ],
    errorElement: <ErrorElement></ErrorElement>
  },
  
]);