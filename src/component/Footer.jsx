import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="py-12">
        <div className="text-white max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
          <div className="flex flex-col item-center justify-center ">
            <div className="flex space-x-4 item-center justify-center">
              <FaFacebook size={24} className="bg-blue-600" />
              <FaTwitter size={24} className="bg-blue-600" />
              <FaInstagram size={24} className="bg-pink-600" />
              <FaLinkedinIn size={24} className="bg-blue-600" />
            </div>
            <div className="mt-8 border-t border-gray-600 pt-8 flex flex-col items-center ">
              <p className="text-sm">
                &copy; 2024 Your Company. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
