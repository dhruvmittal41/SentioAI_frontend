import SideMenu from "./Home";
import Avatar from "@mui/material/Avatar";
import ProfileData from "./ProfileData";
import AxiosInstance from "./AxiosInstance.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [myData, setMyData] = useState();
  const [postimage, setPostImage] = useState(null);

  const handleChange = (e) => {
    if ([e.target.name] == "image") {
      setPostImage({
        image: e.target.files,
      });
      console.log(e.target.files);
    }
  };
  const handleSubmit = () => {
    console.log("THIS IS THE DATA:");
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    let formdata = new FormData();
    console.log("postimage", postimage);
    formdata.append("image", postimage.image[0]);
    formdata.append("email", myData[0].email);
    formdata.append("password", myData[0].password);
    AxiosInstance.put("/admin-upload/34/", formdata, config)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const GetData = () => {
    AxiosInstance.get(`users/`)
      .then((res) => {
        setMyData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        console.log(myData);
      });
  };

  useEffect(() => {
    GetData();
  }, []);
  return (
    <div className="flex">
      <SideMenu />
      <div className="flex w-[100%]">
        <div className="flex  gap-8 w-[100%]">
          <div className="p-5 self-center relative">
            {myData?.map((item) => (
              <div>
                <Avatar
                  alt="Riley Carter"
                  src={"http://localhost:8000" + item.image}
                  sx={{ width: "15vw", height: "30vh" }}
                />
              </div>
            ))}
            <button
              onClick={handleSubmit}
              className=" z-10  absolute left-[12vw] bottom-6 flex rounded-[100%] bg-green-400 w-10 h-10 items-center justify-center text-white text-[30px]"
            >
              +
            </button>
            <br />
            <input
              accept="image/*"
              type="file"
              className="absolute"
              onChange={handleChange}
              name="image"
            />
          </div>
          <div className="flex-col ml-[150px]  w-[100%] self-center">
            <ProfileData size="5vw" small_size="1vw" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
