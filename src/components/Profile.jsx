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
      <div className="flex w-full">
        <div className="flex gap-8 w-full p-5">
          {/* Avatar Upload Section */}
          <div className="relative flex flex-col items-center">
            {myData?.map((item, index) => (
              <Avatar
                key={index}
                alt="Riley Carter"
                src={`http://localhost:8000${item.image}`}
                sx={{ width: "15vw", height: "30vh" }}
              />
            ))}

            {/* Upload Button */}
            <button
              onClick={handleSubmit}
              className="absolute left-[12vw] bottom-6 z-10 flex rounded-full bg-green-500 w-10 h-10 items-center justify-center text-white text-2xl shadow-lg hover:bg-green-600 transition"
            >
              +
            </button>

            {/* File Input (Hidden visually but accessible via button) */}
            <input
              type="file"
              accept="image/*"
              className="absolute opacity-0 cursor-pointer w-full h-full top-0 left-0"
              onChange={handleChange}
              name="image"
            />
          </div>

          {/* Profile Data Section */}
          <div className="flex flex-col justify-center w-full ml-[150px]">
            <ProfileData size="5vw" small_size="1vw" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
