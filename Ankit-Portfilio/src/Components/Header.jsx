import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="  flex flex-col md:flex-row justify-between items-center bg-neutral-700 bg-opacity-30 p-4  shadow-xl gap-4 w-full fixed z-50 ">
      <div className="flex items-center text-xl font-bold  ">
        <div className="w-22 h-12 rounded-full flex items-center justify-center"><img className=" object-cover" src="/images/LOGO.png" alt="logo" /></div>
        <h1 className="text-gray-400 text-2xl">portfolio</h1> 
      </div>
      <nav className="flex gap-6 text-sm text-white  font-medium flex-wrap justify-center">
        <a href="#">Home</a>
        
        <a href="#about">About  
          {/* <img className="w-12" src="/images/home2.png" alt="" /> */}
          </a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contactus">Contect-Us</a>
      </nav>
      <div className="flex gap-3">
        {/* <Link
        to="/admin">
        <button className="bg-yellow-400 px-4 py-1 rounded-full text-black transition-transform duration-300 hover:scale-110">Admin</button>
        </Link> */}
       <a
       href="/resume.pdf"
       download="Ankit_Patidar_Resume.pdf"
       className="inline-block px-6  text-white rounded-lg shadow  transition"
>        <button className="bg-green-600 hover:bg-green-600 px-4 py-1 rounded-full text-black transition-transform duration-300 hover:scale-110">Get Resume  </button>
</a>
       
      </div>
    </header>
  );
}
