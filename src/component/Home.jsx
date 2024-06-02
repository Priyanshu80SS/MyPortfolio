import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import myimg from "../../public/photo.avif";

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="text-white max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 "
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl text-gray-500">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1 className=" text-gray-500">Hello, I'm </h1>
              {/* <span className="text-green-700 font-bold"> Developer</span> */}
              <ReactTyped
                className="text-green-700 font-bold"
                strings={["Developer", "Programmer", "Codder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              ></ReactTyped>
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              I help business owners and busy web developers to design & develop
              creative websites that fits their vision and attracts the visitors
              to stay for ever. Technologies and tools that I use to create such
              awesome websites.
            </p>
            <br />
            {/* social media icon */}
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 ">
              <div className="space-y-2 ">
                <h1 className="font-bold text-center text-orange-600">
                  Available on{" "}
                </h1>
                <ul className="flex space-x-4">
                  <a href="https://github.com" target="_blank">
                    {" "}
                    <li>
                      {" "}
                      <FaGithub className="text-2xl cursor-pointer" />
                    </li>
                  </a>

                  <a href="https://www.facebook.com/" target="_blank">
                    {" "}
                    <li>
                      {" "}
                      <FaSquareFacebook className="text-2xl cursor-pointer bg-blue-600 " />
                    </li>
                  </a>
                  <a href="https://desktop.telegram.org/">
                    {" "}
                    <li>
                      {" "}
                      <FaTelegram className="text-2xl cursor-pointer bg-blue-600" />
                    </li>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/bhardwaj8055"
                    target="_blank"
                  >
                    <li>
                      <FaLinkedin className="text-2xl cursor-pointer bg-blue-600" />
                    </li>
                  </a>
                </ul>
              </div>
              <div className="space-y-2  ml-5 md:ml-0">
                <h1 className="font-bold text-center text-green-600">
                  Currently Woking On{" "}
                </h1>
                <div className="flex space-x-4  ml-5 md:ml-0">
                  <SiMongodb className="text-xl md:text-3xl cursor-pointer text-green-700 bg-white hover:scale-110 duration-200 rounded-full " />
                  <SiExpress className="text-xl md:text-3xl cursor-pointer bg-gray-500 text-white hover:scale-110 duration-200 rounded-full " />
                  <FaReact className="text-xl md:text-3xl cursor-pointer text-blue-900 bg-white hover:scale-110 duration-200 rounded-full " />
                  <FaNodeJs className="text-xl md:text-3xl cursor-pointer bg-green-700 text-gray-800 hover:scale-110 duration-200 rounded-full " />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-8  md:ml-48 md:mt-12 order-1 md:order-2">
            <img
              src={myimg}
              alt=""
              className="rounded-full md:w-[450px] md:h-[450px]  "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
