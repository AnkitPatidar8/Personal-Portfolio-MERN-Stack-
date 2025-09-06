import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="  flex flex-col md:flex-row justify-between items-center bg-neutral-700 bg-opacity-30 p-4  shadow-xl gap-4 w-full fixed z-50 ">
      <div className="flex items-center text-xl font-bold  ">
        <div className="w-22 h-12 rounded-full flex items-center justify-center"><img className=" object-cover" src="/images/LOGO.png" alt="logo" /></div>
        <h1 className="text-gray-400 text-2xl">portfolio</h1> 
      </div>
      <nav className="flex gap-6 text-sm text-white  font-medium flex-wrap justify-center">
        <a
    href="#"
    className="relative hover:text-cyan-400 transition-colors 
               after:absolute after:left-0 after:bottom-0 after:h-[2px] 
               after:w-0 after:bg-cyan-400 after:transition-all 
               after:duration-300 hover:after:w-full"
  >
    Home
  </a>

  <a
    href="#about"
    className="relative hover:text-cyan-400 transition-colors 
               after:absolute after:left-0 after:bottom-0 after:h-[2px] 
               after:w-0 after:bg-cyan-400 after:transition-all 
               after:duration-300 hover:after:w-full"
  >
    About
    {/* <img className="w-12" src="/images/home2.png" alt="" /> */}
  </a>

  <a
    href="#skills"
    className="relative hover:text-cyan-400 transition-colors 
               after:absolute after:left-0 after:bottom-0 after:h-[2px] 
               after:w-0 after:bg-cyan-400 after:transition-all 
               after:duration-300 hover:after:w-full"
  >
    Skills
  </a>

  <a
    href="#projects"
    className="relative hover:text-cyan-400 transition-colors 
               after:absolute after:left-0 after:bottom-0 after:h-[2px] 
               after:w-0 after:bg-cyan-400 after:transition-all 
               after:duration-300 hover:after:w-full"
  >
    Projects
  </a>

  <a
    href="#contactus"
    className="relative hover:text-cyan-400 transition-colors 
               after:absolute after:left-0 after:bottom-0 after:h-[2px] 
               after:w-0 after:bg-cyan-400 after:transition-all 
               after:duration-300 hover:after:w-full"
  >
    Contact Us
  </a>
      </nav>
      <div className="flex gap-3">
        {/* <Link
        to="/admin">
        <button className="bg-yellow-400 px-4 py-1 rounded-full text-black transition-transform duration-300 hover:scale-110">Admin</button>
        </Link> */}
      <a
  href="/patidarre.pdf"
  download="Ankit_Patidar_Resume.pdf"
>
  <button
  className="bg-neutral-700 border border-green-700 text-green-400 
             px-4 py-1 rounded-full font-medium
             shadow-[0_0_10px_rgba(34,197,94,0.6)] 
             hover:bg-green-400 hover:text-neutral-900 
             hover:shadow-[0_0_20px_rgba(34,197,94,0.9)]
             transition-transform duration-300 hover:scale-110"
>
  Get Resume
</button>

</a>
       
      </div>
    </header>
  );
}
