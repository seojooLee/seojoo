import React from "react";
import { BrowserRouter, Navigate, useRoutes } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

import Main from "../pages/main/Main";
import AboutMe from "../pages/main/AboutMe";

const Routes = () => {
  const mainRoutes: RouteObject = {
    path: "/",
    element: <Main />,
  };

  const introRoutes: RouteObject = {
    path: "/about",
    element: <AboutMe />,
  };

  const noMatchRoutes: RouteObject = {
    path: "*",
    element: <Navigate to="/" />,
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
