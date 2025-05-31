import { Link } from "react-router-dom" 
const Footer = () => {
  return(
    <footer className="p-4 rounded-lg shadow md:px-6 md:py-8 bg-low-navy">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link to="#" className="flex items-center mb-4 sm:mb-0">
          <img src="/img/logo.png" className="mr-3 h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">ApSkylint</span>
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0 text-gray-400">
          
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-400 sm:text-center ">© 2023 <a href="https://flowbite.com/"
        className="hover:underline">Apskylint™</a>. All Rights Reserved.
      </span>
    </footer>
  )
}

export default Footer;