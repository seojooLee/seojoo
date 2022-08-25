import React from 'react';
import { BrowserRouter, Navigate, useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

import Main from '../pages/main/Main';
import AboutMe from '../pages/main/AboutMe';
import EduPage from '../pages/main/EduPage';

const Routes = () => {
    const mainRoutes: RouteObject = {
        path: '/seojoo',
        element: <Main />,
    };

    const introRoutes: RouteObject = {
        path: '/seojoo/about',
        element: <AboutMe />,
        children: [
            {
                path: 'edu',
                element: <EduPage />,
            },
            {
                path: 'work',
                element: <EduPage />,
            },
        ],
    };

    const noMatchRoutes: RouteObject = {
        path: '*',
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
