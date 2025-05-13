import "./index.css";
import { default as img1 } from "./images/Proposal.png";
import { default as img2 } from "./images/human.png";
import { default as img3 } from "./images/funny.png";
import { default as img4 } from "./images/Comforting.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="bg-night w-screen">
        <div className="p-5">
          <div className="relative flex flex-col md:flex-row h-auto md:h-16 items-center justify-between">
            <div className="flex items-center justify-between w-full md:w-auto">
              <h1 className="font-dancing text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] text-yellow-600">
                Sentio
              </h1>
              <div className="md:hidden flex space-x-2">
                <button
                  onClick={() => navigate("/login")}
                  className="text-white hover:text-blue-500"
                >
                  Log in
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="text-white bg-black px-4 py-2 rounded-md hover:opacity-55"
                >
                  Sign Up
                </button>
              </div>
            </div>
            <div className="hidden md:flex absolute right-28 top-5 md:static space-x-5">
              <button
                onClick={() => navigate("/login")}
                className="text-white hover:text-blue-500"
              >
                Log in
              </button>
              <button
                onClick={() => navigate("/register")}
                className="text-white bg-black px-4 py-2 rounded-[2vw] hover:opacity-55"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-gradient-to-b from-night via-night2 to-night3 w-screen px-9">
        {[
          {
            title: "Are You Really Human?",
            lines: [
              "We dont think So",
              "Check out how you perform for different situations!",
            ],
            img: img2,
            reverse: false,
          },
          {
            title: "Are You Really Funny?",
            lines: ["We bet you cant crack us up", "Try it yourself!"],
            img: img3,
            reverse: true,
          },
          {
            title: "Wanna Propose?",
            lines: [
              "But not sure how it might turn out",
              "Dont Worry! hit us with your best lines!",
            ],
            img: img1,
            reverse: false,
          },
          {
            title: "Can you comfort someone?",
            lines: [
              "Try your best on us!",
              "We will let you know how much of comforting you are!",
            ],
            img: img4,
            reverse: true,
          },
        ].map(({ title, lines, img, reverse }, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center justify-between py-5 gap-5`}
          >
            <img
              src={img}
              alt=""
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] h-auto"
            />
            <div className="flex flex-col text-center text-white font-curvy max-w-3xl">
              <h1 className="font-bold text-3xl sm:text-5xl md:text-[60px]">
                {title}
              </h1>
              {lines.map((line, i) => (
                <p key={i} className="text-lg sm:text-2xl md:text-[28px] mt-2">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;
