import { useState } from "react";
import myimg from "../../public/priyanshu.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navItem = [
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 3, name: "Portfolio" },
    { id: 4, name: "Experience" },
    { id: 5, name: "Contact" },
  ];

  return (
    <>
      <div
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 text-white fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: "#007BFF",
          boxShadow: "0 4px 8px rgba(255, 255, 255, 0.2)",
        }}
      >
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <img
              className="h-14 w-14 rounded-full"
              src={myimg}
              alt="Priyanshu"
            />
            <h1 className="font-semibold text-xl cursor-pointer text-orange-500">
              Priyans<span className="text-green-500 text-2xl">hu</span>
              <p className="text-sm text-white">Web Developer</p>
            </h1>
          </div>
          {/* Desktop navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItem.map(({ id, name }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={name}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="md:hidden" onClick={() => setMenu(!menu)}>
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile navbar */}
      {menu && (
        <div
          className="fixed inset-0 bg-black z-40"
          onClick={() => setMenu(false)}
        >
          <ul className="flex flex-col h-screen items-center justify-center space-y-3 text-xl">
            {navItem.map(({ id, name }) => (
              <li
                className="hover:scale-105 duration-200 cursor-pointer font-semibold text-white"
                key={id}
              >
                <Link
                  onClick={() => setMenu(false)}
                  to={name}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
