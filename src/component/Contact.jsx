import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/pbmqeqzb", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div
        name="Contact"
        className="text-white max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <span className="">Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/pbmqeqzb"
            //   method="POST"
            className="bg-slate-500 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4 ">
              <label className="block ">Full Name</label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Enter your Fullname "
                id="name"
                name="name"
                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="flex flex-col mb-4 ">
              <label className="block ">Email Address</label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Enter your email address "
                id="email"
                name="email"
                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="flex flex-col mb-4 ">
              <label className="block ">Message</label>
              <input
                {...register("message", { required: true })}
                type="text"
                placeholder="Enter your Query"
                id="name"
                name="message"
                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.message && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
