import Link from "next/link";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Contact Information */}
        <div className="mb-4 md:mb-0">
          <p className="text-sm">Contact: johndoe@example.com</p>
          <p className="text-sm">Phone: (555) 123-4567</p>
        </div>

        {/* Tagline or Motto */}
        <div className="text-center">
          <p className="text-sm font-semibold">Empowering Careers, Transforming Lives</p>
        </div>

        {/* Links */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Terms of Service</a>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="text-center mt-4 text-gray-500 text-xs">
        John Doe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
