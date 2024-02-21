import React from "react";
import { BrowserRouter, Navigate, useRoutes } from "react-router-dom";

import Main from "../pages/main/Main";
import AboutMe from "../pages/main/AboutMe";
import EduPage from "../pages/main/EduPage";
import WorkPage from "../pages/main/WorkPage";
import Introduce from "../pages/main/Introduce";
import Language from "../pages/main/Language";
import ProjectPage from "../pages/main/Project";

//renew
import MainPage from "../pages/renew/Main";
import Layout from "../pages/renew/common/Layout";
import About from "../pages/renew/About";
import Portfolio from "../pages/renew/Portfolio";
import Blog from "../pages/renew/Blog";
import Contact from "../pages/renew/Contact";
const Routes = () => {
  const mainRoutes = {
    path: "/seojoo",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <MainPage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "project",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  };

  // const introRoutes = {
  //   path: "/seojoo/about",
  //   element: <AboutMe />,
  //   children: [
  //     {
  //       path: "edu",
  //       element: <EduPage />,
  //     },
  //     {
  //       path: "work",
  //       element: <WorkPage />,
  //     },
  //     {
  //       path: "lang",
  //       element: <Language />,
  //     },
  //     {
  //       path: "project",
  //       element: <ProjectPage />,
  //     },
  //   ],
  // };

  const noMatchRoutes = {
    path: "*",
    element: <Navigate to="/seojoo/home" />,
  };

  const routes = [mainRoutes, noMatchRoutes];

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
