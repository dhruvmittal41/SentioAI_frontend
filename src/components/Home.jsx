import "./index.css";

import { styled } from "@mui/material/styles";

import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";

import Sidemenu from "./Sidemenu.jsx";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: "border-box",
  },
});

export default function Home() {
  return (
    <>
      <Sidemenu />
    </>
  );
}

//
