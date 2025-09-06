




// import React, { useState } from "react";
// import Swal from "sweetalert2";
// import axios from "axios";

// const Contactus = () => {
//   const [form, setform] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     mobile: "",
//     message: "",
//   });

//   // 🔹 Loader track karne ke liye state add ki
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const input = e.target;
//     const value = input.value;
//     const key = input.name;
//     setform({
//       ...form,
//       [key]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // 🔹 API call start hone se pehle loader true karna
//     setLoading(true);

//     try {
//       await axios.post(`https://personal-portfolio-mern-stack.vercel.app/api/contacts`, form);

//       Swal.fire({
//         title: "Success 🎉",
//         text: "Your message has been sent successfully!",
//         icon: "success",
//         confirmButtonColor: "#ca9c27ff",
//         background: "#1e1e1e",
//         color: "#fff",
//       });

//       // 🔹 Success ke baad form clear karna
//       setform({
//         name: "",
//         email: "",
//         subject: "",
//         mobile: "",
//         message: "",
//       });

//     } catch (err) {
//       alert(err);
//     } finally {
//       // 🔹 API complete hone ke baad loader false karna (success ya error dono case me)
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       id="contactus"
//       className="bg-neutral-900 min-h-screen flex items-center py-10 flex-col px-4 sm:px-6 "
//     >
//       <h2 className="mt-20 text-neutral-500 text-3xl md:text-5xl font-bold mb-6 border-b border-teal-500 inline-block pb-2 text-center">
//         Connect Us 📞
//       </h2>
//       <p className="text-base sm:text-lg md:text-xl text-gray-400 text-center  mb-8">
//         Let's build something great together! Feel free to reach out for
//         collaborations, freelance work, or just to say hello.
//       </p>

//       <div className="w-full max-w-6xl mx-auto rounded-xl p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-10">
//         {/* Left side - Form */}
//         <div className="w-full md:w-6/12 rounded-xl flex items-center justify-center">
//           <form
//             onSubmit={handleSubmit}
//             className="shadow-md bg-neutral-800 rounded-2xl px-6 pt-6 pb-8 w-full grid grid-cols-1 sm:grid-cols-2 gap-4"
//           >
//             <div className="mb-2">
//               <label className="block text-neutral-500 text-sm font-medium mb-2">
//                 Name
//               </label>
//               <input
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-400 focus:outline-none focus:ring-1 focus:ring-cyan-500"
//                 type="text"
//                 required
//               />
//             </div>

//             <div className="mb-2">
//               <label className="block text-neutral-500 text-sm font-medium mb-2">
//                 Email
//               </label>
//               <input
//                 name="email"
//                 type="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-400 focus:outline-none focus:ring-1 focus:ring-cyan-500"
//                 required
//               />
//             </div>

//             <div className="mb-2">
//               <label className="block text-neutral-500 text-sm font-medium mb-2">
//                 Subject
//               </label>
//               <input
//                 name="subject"
//                 type="text"
//                 value={form.subject}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-400 focus:outline-none focus:ring-1 focus:ring-cyan-500"
//                 required
//               />
//             </div>

//             <div className="mb-2">
//               <label className="block text-neutral-500 text-sm font-medium mb-2">
//                 Mobile (optional)
//               </label>
//               <input
//                 name="mobile"
//                 type="text"
//                 value={form.mobile}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-400 focus:outline-none focus:ring-1 focus:ring-cyan-500"
//               />
//             </div>

//             <div className="mb-4 col-span-1 sm:col-span-2">
//               <label className="block text-neutral-500 text-sm font-medium mb-2">
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 rows="4"
//                 value={form.message}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
//                 required
//               />
//             </div>

//             {/* 🔹 Loader show karna ya normal button */}
//             <button
//               type="submit"
//               disabled={loading} // 🔹 Jab API chal rahi hai to disable button
//               className={`col-span-1 sm:col-span-2 bg-gradient-to-r from-yellow-500 to-amber-200 text-gray-700 font-bold py-2 px-4 rounded w-full transition duration-300 ${loading && "opacity-50 cursor-not-allowed"}`}
//             >
//               {loading ? "Sending..." : "Send Message"}
//             </button>
//           </form>
//         </div>

//         {/* Right side - Image + Socials */}
//         <div className="w-full md:w-5/12 flex flex-col items-center gap-6">
//           <img
//             className="w-60 sm:w-72 md:w-80 mx-auto hidden md:block"
//             src="/images/contectusfinel.png"
//             alt="contact"
//           />

//           <ul className="flex flex-wrap justify-center gap-4">
//             <a href="https://github.com/AnkitPatidar8/">
//             <li>
//               <img className="w-10 sm:w-12 rounded-2xl" src="/images/git2.png" alt="github" />
//             </li>
//             </a>
//             <a href="">
//               <li>
//                 <img className="w-12 sm:w-14" src="/images/instagram.png" alt="instagram" />
//               </li>
//             </a>
//             <li>
//               <img className="w-12 sm:w-14" src="/images/twitter.png" alt="twitter" />
//             </li>
//             <a href="https://wa.me/918435967133?text=Hello%20I%20want%20to%20know%20more">
//               <li>
//                 <img className="w-12 sm:w-14" src="/images/whatsapp.png" alt="whatsapp" />
//               </li>
//             </a>
//             <li>
//               <a href="mailto:ankitpatidar7133.com">
//               <img className="w-12 sm:w-14" src="/images/gmail.png" alt="gmail" /></a>
//             </li>
//             <a href="https://www.facebook.com/share/1AeFqcC2M5/?mibextid=wwXIfr">
//               <li>
//                 <img className="w-12 sm:w-14" src="/images/facebook.png" alt="facebook" />
//               </li>
//             </a>
//             <a href="www.linkedin.com/in/ankit-patidar-a84b672a5">
//               <li>
//                 <img className="w-12 sm:w-14" src="/images/linkdin.png" alt="linkedin" />
//               </li>
//             </a>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contactus;

import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const Contactus = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    mobile: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        "https://personal-portfolio-mern-stack.vercel.app/api/contacts",
        form
      );

      Swal.fire({
        title: "Success 🎉",
        text: "Your message has been sent successfully!",
        icon: "success",
        confirmButtonColor: "#ca9c27ff",
        background: "#1e1e1e",
        color: "#fff",
      });

      setForm({ name: "", email: "", subject: "", mobile: "", message: "" });
    } catch (err) {
      Swal.fire("Error", err.response?.data?.message || "Something went wrong", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contactus" className="bg-neutral-900 min-h-screen flex items-center py-10 flex-col px-4 sm:px-6">
      <h2 className="mt-20 text-neutral-500 text-3xl md:text-5xl font-bold mb-6 border-b border-teal-500 inline-block pb-2">
        Connect Us 📞
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-800 rounded-2xl px-6 pt-6 pb-8 w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="p-2 rounded bg-neutral-700 text-white" />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required className="p-2 rounded bg-neutral-700 text-white" />
        <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" required className="p-2 rounded bg-neutral-700 text-white sm:col-span-2" />
        <input name="mobile" value={form.mobile} onChange={handleChange} placeholder="Mobile (optional)" className="p-2 rounded bg-neutral-700 text-white sm:col-span-2" />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required className="p-2 rounded bg-neutral-700 text-white sm:col-span-2" />
        <button type="submit" disabled={loading} className={`col-span-2 py-2 rounded bg-gradient-to-r from-yellow-500 to-amber-200 text-gray-800 font-bold ${loading && "opacity-50 cursor-not-allowed"}`}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contactus;
