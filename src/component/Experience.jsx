import html from "../../public/html.png";
import css from "../../public/css.jpg";
import js from "../../public/javascript.png";
import react from "../../public/react.jpeg";
import mongo from "../../public/mongodb.jpg";
import sql from "../../public/sql.jpeg";

const Experience = () => {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: js,
      name: "JAVASCRIPT",
    },
    {
      id: 4,
      logo: react,
      name: "REACT",
    },
    {
      id: 5,
      logo: mongo,
      name: "MONGODB",
    },
    {
      id: 6,
      logo: sql,
      name: "SQL",
    },
  ];
  return (
    <>
      <div
        name="Experience"
        className="text-white max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 "
      >
        <div>
          <h1 className="text-3xl font-bold mb-5 ">Experience</h1>
          <p className="text-gray-500 ">
            I've more than 1 years of experiance in below technologies.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-7 my-3">
            {cardItem.map(({ id, logo, name }) => (
              <div
                key={id}
                className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-200 bg-slate-800"
              >
                <img className="w-[150px] rounded-full  " src={logo} alt="" />
                <div>
                  <div className="  text-green-400">{name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
