import "./index.css";
import AxiosInstance from "./AxiosInstance.jsx";
import { useState, useEffect } from "react";
export default function ProfileData(props) {
  const { size, small_size } = props;
  const [myData, setMyData] = useState();
  const [loading, setLoading] = useState(true);

  const GetData = () => {
    AxiosInstance.get(`users/`)
      .then((res) => {
        setMyData(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    GetData();
  }, []);
  return (
    <div>
      {loading ? (
        <p> Loading data....</p>
      ) : (
        <div>
          {myData.map((item) => (
            <>
              <p style={{ fontSize: size }}>{item.username}</p>
              <p
                style={{
                  fontSize: small_size,
                  color: "grey",
                  opacity: "75%",
                }}
              >
                {item.email}
              </p>
            </>
          ))}
        </div>
      )}
    </div>
  );
}
