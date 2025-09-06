const Hero = () => {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center py-8 sm:py-10">
      {/* WhatsApp Floating Button */}
      <a
  href="https://wa.me/918435967133?text=Hello%20I%20want%20to%20chat"
  target="_blank"
  rel="noopener noreferrer"
  className="z-20 fixed bottom-4 left-4 
             bg-neutral-900 border border-green-400 text-green-400 
             flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full 
             shadow-[0_0_10px_rgba(34,197,94,0.6)] 
             hover:bg-green-400 hover:text-neutral-900 
             hover:shadow-[0_0_20px_rgba(34,197,94,0.9)] 
             transition-all duration-300 text-sm sm:text-base"
>
  {/* <FaWhatsapp size={20} /> */}
  <span className="font-medium">Chat on WhatsApp</span>
</a>


      {/* Container */}
      <div className="w-[92%] sm:w-[90%] bg-neutral-800 max-w-6xl mx-auto rounded-xl shadow-lg p-4 sm:p-6 md:p-8 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:h-auto">
        
        {/* Left side - Text */}
        <div className="w-full md:w-3/5 px-2 sm:px-4 text-center md:text-left">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-200  text-transparent bg-clip-text leading-snug">
            Hi, I’m Ankit Patidar
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg md:text-xl font-medium bg-gradient-to-r from-slate-500 to-slate-200 text-transparent bg-clip-text">
            A passionate and detail-oriented{" "}
            <span className="text-orange-600">Software Engineer</span> with
            experience in developing scalable web applications and software
            solutions. Seeking to leverage my skills in front-end and back-end
            technologies to contribute to a growth-oriented organization.
          </p>
        </div>

        {/* Right side - Image */}
        {/* <div className="w-full md:w-2/5 flex justify-center">
          <img
            className="h-32 w-32 sm:h-44 sm:w-44 md:h-60 md:w-60 rounded-[25px] object-cover shadow-xl"
            src="/images/nn.jpg"
            alt="Profile"
          />
        </div> */}
        <div className="w-full md:w-2/5 flex justify-center">
  <img
    className="h-32 w-32  sm:h-44 sm:w-44 md:h-60 md:w-60 rounded-[50%] object-cover shadow-2xl transform transition duration-500 hover:scale-105 hover:rotate-1"
    src="/images/nn.jpg"
    alt="Profile"
  />
</div>

      </div>
    </div>
  );
};

export default Hero;
