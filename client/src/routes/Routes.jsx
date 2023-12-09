import * as React from "react";
import { useRoutes, Navigate } from "react-router-dom";

import Home from "@/pages/home";
import Registration from "@/pages/registration";
import Search from "@/pages/search";
import Error from "@/pages/error";
import WhatWeDo from "@/pages/whatWeDo";
import ContactUs from "@/pages/contactUs";
import Login from "@/pages/login";
import Report from "@/pages/report";
import Claim from "@/pages/claim";
import Profile from "@/pages/profile";

const Pager = React.lazy(() => import("@/layouts/Global/Pager"));
const GlobalLayout = React.lazy(() => import("@/layouts/Global/GlobalLayout"));

function Routes() {
  return (
    <React.Suspense>
      {useRoutes([
        {
          path: "/",
          element: <Pager content={<GlobalLayout />} />,
          children: [
            {
              path: "*",
              element: <Pager content={<Error />} title="Page Not Found" />,
            },
            {
              path: "/",
              element: <Pager content={<Home />} title="Home" />,
            },
            {
              path: "/registration",
              element: (
                <Pager content={<Registration />} title="Registration" />
              ),
            },
            {
              path: "/login",
              element: <Pager content={<Login />} title="Login" />,
            },
            {
              path: "/search",
              element: <Pager content={<Search />} title="Search" />,
            },
            {
              path: "/what-we-do",
              element: <Pager content={<WhatWeDo />} title="What we do" />,
            },
            {
              path: "/contact-us",
              element: <Pager content={<ContactUs />} title="Contact Us" />,
            },
            {
              path: "/claim",
              element: <Pager content={<Claim />} title="Claim an Item" />,
            },
            {
              path: "/report",
              element: <Pager content={<Report />} title="Report an Item" />,
            },
            {
              path: "/profile",
              element: <Pager content={<Profile />} tile="Profile" />,
            }
          ],
        },
      ])}
    </React.Suspense>
  );
}

export { Routes as default };
