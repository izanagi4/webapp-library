import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import MailIcon from "@material-ui/icons/Mail";
import ChatIcon from "@material-ui/icons/Chat";
import AppsIcon from "@material-ui/icons/Apps";
import SettingsIcon from "@material-ui/icons/Settings";
import LogoutIcon from "@material-ui/icons/PowerSettingsNew";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: <HomeIcon />,
    link: "/dashboard",
  },
  {
    title: "Chart",
    icon: <EqualizerIcon />,
    link: "/chart",
  },
  {
    title: "Chat",
    icon: <ChatIcon />,
    link: "/chat",
  },

  {
    title: "Message",
    icon: <MailIcon />,
    link: "/message",
  },
  {
    title: "App",
    icon: <AppsIcon />,
    link: "/apps",
  },
  {
    title: "Setting",
    icon: <SettingsIcon />,
    link: "/setting",
  },
  {
    title: "Logout",
    icon: <LogoutIcon />,
    link: "/logout",
  },
];
