import "./index.css";
import AxiosInstance from "./AxiosInstance.jsx";
import { useState, useEffect } from "react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MenuContent from "./forms/MenuContent";
import OptionsMenu from "./OptionsMenu";
import ProfileData from "./ProfileData.jsx";

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

export default function Sidemenu() {
  const [myData, setMyData] = useState();

  const GetData = () => {
    AxiosInstance.get(`users/`)
      .then((res) => {
        setMyData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    GetData();
  }, []);
  return (
    <div className="flex">
      <div>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            [`& .${drawerClasses.paper}`]: {
              backgroundColor: "background.paper",
            },
          }}
        >
          <Divider />
          <Box
            sx={{
              overflow: "auto",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <MenuContent />
          </Box>
          <Stack
            direction="row"
            sx={{
              p: 2,
              gap: 1,
              alignItems: "center",
              borderTop: "1px solid",
              borderColor: "divider",
            }}
          >
            {myData?.map((item) => (
              <div>
                <Avatar
                  alt="Riley Carter"
                  src={"http://localhost:8000" + item.image}
                  sx={{ width: "3vw", height: "10vh" }}
                />
              </div>
            ))}
            <Box sx={{ mr: "auto" }}>
              <ProfileData small_size="0.8vw" />
            </Box>
            <OptionsMenu />
          </Stack>
        </Drawer>
      </div>
    </div>
  );
}
