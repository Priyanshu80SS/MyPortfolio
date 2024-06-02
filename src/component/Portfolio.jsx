import bookstore from "../../public/bookstorepic.jpg";
import chatapp from "../../public/chatapp.jpg";

const Portfolio = () => {
  const cardItem = [
    {
      id: 1,
      logo: chatapp,
      name: "Vibrant ChatApp",
      live: "https://vibrant-chat-app.onrender.com",
      source: "https://github.com/Priyanshu80SS/Mern-Chat-App.git",
    },
    {
      id: 2,
      logo: bookstore,
      name: "BookStore-App",
      live: "https://bookstoreappclient.vercel.app/",
      source: "https://github.com/Priyanshu80SS/bookStoreApp.git",
    },
  ];
  return (
    <>
      <div
        name="Portfolio"
        className="text-white max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 "
      >
        <div>
          <h1 className="text-3xl font-bold mb-5 ">Portfolio</h1>
          <span className="underline font-semibold text-gray-600">
            Featured Projects
          </span>
          <div className="flex flex-col md:flex-row md:justify-center md:space-x-5 gap-7 mt-8">
            {cardItem.map(({ id, logo, name, live, source }) => (
              <div
                key={id}
                className="md:w-[400px] md:h-[400px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-200 bg-slate-800"
              >
                <img className="w-[400px] h-[250px] p-7" src={logo} alt="" />
                <div>
                  <div className=" px-2 font-bold mb-2 text-xl text-green-400">
                    {name}
                  </div>
                  <p className="px-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
                    ab mollitia explicab
                  </p>
                </div>
                <div className="flex justify-around px-6 py-4">
                  <a href={source} target="_blank">
                    {" "}
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                      Source Code
                    </button>
                  </a>
                  <a href={live} target="_blank">
                    {" "}
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
