

// import React, { useEffect, useState } from "react";
// import Layout from "./Layout";

// const Contactuspart = () => {
//   const [contactData, setContactData] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/contacts")
//       .then((res) => res.json())
//       .then((data) => setContactData(data))
//       .catch((err) => console.error("Error fetching data:", err));
//   }, []);

//   return (
//     <Layout>
//       <div className="md:ml-65 mt-15">
//         <div className="min-h-screen bg-neutral-950 text-white p-6">
//           <h1 className="text-3xl font-bold mb-6 text-center text-teal-400">
//             Admin Panel - Contact Us Data
//           </h1>

//           {/* Responsive wrapper */}
//           <div className="overflow-x-auto w-full bg-neutral-800 p-4 rounded-xl shadow-lg">
//             <table className="w-full text-sm border border-neutral-700 rounded-lg overflow-hidden min-w-[800px]">
//               <thead className="bg-neutral-700 text-teal-400">
//                 <tr>
//                   <th className="py-3 px-4 border border-neutral-600">S.No</th>
//                   <th className="py-3 px-4 border border-neutral-600">Name</th>
//                   <th className="py-3 px-4 border border-neutral-600">Email</th>
//                   <th className="py-3 px-4 border border-neutral-600">Subject</th>
//                   <th className="py-3 px-4 border border-neutral-600">Mobile</th>
//                   <th className="py-3 px-4 border border-neutral-600">Message</th>
//                   <th className="py-3 px-4 border border-neutral-600">Date</th>
//                   <th className="py-3 px-4 border border-neutral-600">Time</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {contactData.map((contact, index) => {
//                   const createdAt = new Date(contact.createdAt);
//                   const date = createdAt.toLocaleDateString();
//                   const time = createdAt.toLocaleTimeString();
//                   return (
//                     <tr
//                       key={index}
//                       className="text-center hover:bg-neutral-700 transition"
//                     >
//                       <td className="py-2 px-4 border border-neutral-600">{index + 1}</td>
//                       <td className="py-2 px-4 border border-neutral-600">{contact.name}</td>
//                       <td className="py-2 px-4 border border-neutral-600">{contact.email}</td>
//                       <td className="py-2 px-4 border border-neutral-600">{contact.subject}</td>
//                       <td className="py-2 px-4 border border-neutral-600">{contact.mobile}</td>
//                       <td className="py-2 px-4 border border-neutral-600">{contact.message}</td>
//                       <td className="py-2 px-4 border border-neutral-600">{date}</td>
//                       <td className="py-2 px-4 border border-neutral-600">{time}</td>
//                     </tr>
//                   );
//                 })}
//                 {contactData.length === 0 && (
//                   <tr>
//                     <td
//                       colSpan="8"
//                       className="text-center py-4 text-gray-400"
//                     >
//                       No Contact Data Found
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Contactuspart;



import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Swal from "sweetalert2";

const CONTACT_API =  `https://personal-portfolio-mern-stack.vercel.app`;

const Contactuspart = () => {
  const [contactData, setContactData] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  // Fetch contacts
  useEffect(() => {
    fetch(CONTACT_API)
      .then((res) => res.json())
      .then((data) => setContactData(data.reverse())) // latest first
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // Delete a message
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Delete Contact?",
      text: "This message will be permanently removed.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!confirm.isConfirmed) return;

    try {
      await fetch(`${CONTACT_API}${id}`, { method: "DELETE" });
      setContactData((prev) => prev.filter((c) => c._id !== id));
      Swal.fire("Deleted!", "Message has been removed.", "success");
    } catch (err) {
      Swal.fire("Error", err.message || "Something went wrong", "error");
    }
  };

  // Filtered data
  const filteredContacts = contactData.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <div className="lg:ml-64 pt-20 px-4 sm:px-6 min-h-screen bg-neutral-950 text-white transition-all duration-300">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-teal-400">
          Admin Panel - Contact Us Data
        </h1>

        {/* Search */}
        <div className="mb-4 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search by name, email, or subject..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 rounded-lg bg-neutral-800 text-white w-full sm:w-1/2"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto w-full bg-neutral-800 p-4 rounded-xl shadow-lg">
          <table className="w-full text-sm border border-neutral-700 rounded-lg overflow-hidden min-w-[900px]">
            <thead className="bg-neutral-700 text-teal-400">
              <tr>
                <th className="py-3 px-4 border border-neutral-600">#</th>
                <th className="py-3 px-4 border border-neutral-600">Name</th>
                <th className="py-3 px-4 border border-neutral-600">Email</th>
                <th className="py-3 px-4 border border-neutral-600">Subject</th>
                <th className="py-3 px-4 border border-neutral-600">Mobile</th>
                <th className="py-3 px-4 border border-neutral-600">Date</th>
                <th className="py-3 px-4 border border-neutral-600">Time</th>
                <th className="py-3 px-4 border border-neutral-600 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredContacts.length > 0 ? (
                filteredContacts.map((contact, index) => {
                  const createdAt = new Date(contact.createdAt);
                  const date = createdAt.toLocaleDateString();
                  const time = createdAt.toLocaleTimeString();

                  return (
                    <tr
                      key={contact._id}
                      className="text-center hover:bg-neutral-700 transition"
                    >
                      <td className="py-2 px-4 border border-neutral-600">{index + 1}</td>
                      <td className="py-2 px-4 border border-neutral-600">{contact.name}</td>
                      <td className="py-2 px-4 border border-neutral-600">{contact.email}</td>
                      <td className="py-2 px-4 border border-neutral-600">{contact.subject}</td>
                      <td className="py-2 px-4 border border-neutral-600">{contact.mobile}</td>
                      <td className="py-2 px-4 border border-neutral-600">{date}</td>
                      <td className="py-2 px-4 border border-neutral-600">{time}</td>
                      <td className="py-2 px-4 border border-neutral-600 flex justify-center gap-2">
                        <button
                          onClick={() => setSelected(contact)}
                          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-md"
                        >
                          👁 View
                        </button>
                        <button
                          onClick={() => handleDelete(contact._id)}
                          className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded-md"
                        >
                          🗑 Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="8" className="text-center py-4 text-gray-400">
                    No Contact Data Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Modal for Message View */}
        {selected && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
            <div className="bg-neutral-800 p-6 rounded-xl max-w-lg w-full">
              <h2 className="text-xl font-bold mb-2 text-teal-400">Message from {selected.name}</h2>
              <p className="mb-4 text-gray-300">{selected.message}</p>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setSelected(null)}
                  className="px-4 py-2 bg-gray-600 rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Contactuspart;
