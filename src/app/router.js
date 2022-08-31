import React from "react";
import { BrowserRouter, Navigate, useRoutes } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

import Main from "../pages/main/Main";
import AboutMe from "../pages/main/AboutMe";
import EduPage from "../pages/main/EduPage";
import WorkPage from "../pages/main/WorkPage";
import Introduce from "../pages/main/Introduce";

const Routes = () => {
  const mainRoutes: RouteObject = {
    path: "/seojoo",
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "intro",
        element: <Introduce />,
      },
    ],
  };

  const introRoutes: RouteObject = {
    path: "/seojoo/about",
    element: <AboutMe />,
    children: [
      {
        path: "edu",
        element: <EduPage />,
      },
      {
        path: "work",
        element: <WorkPage />,
      },
      {
        path: "lang",
        element: <WorkPage />,
      },
      {
        path: "certi",
        element: <WorkPage />,
      },
    ],
  };

  const noMatchRoutes: RouteObject = {
    path: "*",
    element: <Navigate to="/seojoo" />,
  };

  const routes: RouteObject[] = [mainRoutes, noMatchRoutes, introRoutes];

  return useRoutes(routes);
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default React.memo(Router);
