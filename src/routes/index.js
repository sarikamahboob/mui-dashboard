import React from "react";
import { useRoutes } from "react-router-dom";
import Contacts from './../scenes/contacts/index';
import Dashboard from "./../scenes/dashboard/index";
import Team from "./../scenes/team/index";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/team",
      element: <Team />,
    },
    {
      path: "/contacts",
      element: <Contacts />,
    },

  ]);
};

export default Routes;

