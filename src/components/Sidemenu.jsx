import "./index.css";
import AxiosInstance from "./AxiosInstance.jsx";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import MenuContent from "./forms/MenuContent";
import OptionsMenu from "./OptionsMenu";
import ProfileData from "./ProfileData.jsx";

const isDevelopment = import.meta.env.MODE === "development";
const baseURL = isDevelopment
  ? import.meta.env.VITE_API_BASE_URL_LOCAL
  : import.meta.env.VITE_API_BASE_URL_DEPLOY;

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
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          [`& .${drawerClasses.paper}`]: {
            backgroundColor: "background.paper",
            width: "10vw", // Optional: you can control drawer width here
          },
        }}
      >
        <Divider />

        <Box
          sx={{
            overflowY: "auto",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            height: "100%",
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
          {myData?.map((item, index) => (
            <Avatar
              key={index}
              alt="Riley Carter"
              src={`${baseURL}${item.image}`}
              sx={{ width: "3vw", height: "10vh" }}
            />
          ))}

          <Box sx={{ ml: 1, mr: "auto" }}>
            <ProfileData small_size="0.8vw" />
          </Box>

          <OptionsMenu />
        </Stack>
      </Drawer>
    </div>
  );
}
