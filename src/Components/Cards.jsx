import React, { useState } from "react";

const userData = [
  {
    id: 1,
    name: "Mukesh Saxena",
    email: "john@example.com",
    contact: "1234567890",
    skills: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    name: "Yash Singh",
    email: "jane@example.com",
    contact: "9876543210",
    skills: ["Angular", "TypeScript", "CSS"]
  },
  {
    id: 3,
    name: "Anand Mittal",
    email: "alice@example.com",
    contact: "4561237890",
    skills: ["Python", "Django", "PostgreSQL"]
  },
  {
    id: 4,
    name: "Krishna Goyal",
    email: "bob@example.com",
    contact: "7894561230",
    skills: ["Java", "Spring Boot", "MySQL"]
  },
  {
    id: 5,
    name: "Akash Gurjar",
    email: "emily@example.com",
    contact: "7418529630",
    skills: ["PHP", "Laravel", "Vue.js"]
  },
  {
    id: 6,
    name: "Prajwal Jha",
    email: "daniel@example.com",
    contact: "8529637410",
    skills: ["Flutter", "Dart", "Firebase"]
  },
  {
    id: 7,
    name: "Mayank Tyagi",
    email: "sophia@example.com",
    contact: "9638527410",
    skills: ["Swift", "iOS", "Xcode"]
  },
  {
    id: 8,
    name: "Saket Rastogi",
    email: "james@example.com",
    contact: "3216549870",
    skills: ["C#", ".NET", "Azure"]
  },
  {
    id: 9,
    name: "Divyanshu Yaduvanshi",
    email: "grace@example.com",
    contact: "1237894560",
    skills: ["Ruby", "Rails", "GraphQL"]
  },
  {
    id: 10,
    name: "Reetesh Pandey",
    email: "henry@example.com",
    contact: "1593574860",
    skills: ["Kotlin", "Android", "Jetpack Compose"]
  },
  {
    id: 11,
    name: "Kamal Sharma",
    email: "mia@example.com",
    contact: "9517538520",
    skills: ["Go", "Docker", "Kubernetes"]
  },
  {
    id: 12,
    name: "Vinay Kumar",
    email: "liam@example.com",
    contact: "7531598520",
    skills: ["Rust", "WebAssembly", "WASM"]
  }
];

const CardSlider = () => {
  const [index, setIndex] = useState(0);
  const user = userData[index];

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? userData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === userData.length - 1 ? 0 : prev + 1));
  };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-yellow-100">
//         <h1 className="text-3xl font-bold mb-4">User Profile</h1>
//       <div className="bg-white shadow-sm rounded-2xl p-6 w-96 h-60 text-center transition-all duration-300 ease-in-out">
//         <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
//         <p className="text-gray-600 mb-1">Email: {user.email}</p>
//         <p className="text-gray-600 mb-1">Contact: {user.contact}</p>
//         <div className="mt-3">
//           <p className="font-semibold">Skills:</p>
//           <ul className="flex flex-wrap justify-center gap-5 mt-2">
//             {user.skills.map((skill, idx) => (
//               <li
//                 key={idx}
//                 className="bg-green-100 text-green-700 px-3 py-1 rounded-10 text-sm"
//               >
//                 {skill}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       <div className="flex justify-between mt-6 w-60">
//         <button
//           onClick={handlePrev}
//           className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
//         >
//           Previous
//         </button>
//         <button
//           onClick={handleNext}
//           className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );

return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black-50 p-6">
     
      
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full max-w-md p-6 mb-8 border border-gray-100">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-xs font-medium text-gray-500">ID: {user.id}</span>
            <h2 className="text-2xl font-medium text-gray-800 mt-1">{user.name}</h2>
          </div>
          <span className="bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
            ACTIVE
          </span>
        </div>

        <div className="space-y-3 text-sm mb-4">
          <div className="flex">
            <span className="text-gray-500 w-16">Email:</span>
            <span className="text-gray-800">{user.email}</span>
          </div>
          <div className="flex">
            <span className="text-gray-500 w-16">Contact:</span>
            <span className="text-gray-800">{user.contact}</span>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <h3 className="text-sm font-medium text-gray-700 mb-3">SKILLS</h3>
          <div className="flex flex-wrap gap-2">
            {user.skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4 w-full max-w-md">
        <button

          onClick={handlePrev}

          className="px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Previous
        </button>
        <button

          onClick={handleNext}
          
          className="px-6 py-2 bg-blue-600 rounded-md text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Next
        </button>
      </div>

    </div>
  );

};

export default CardSlider;
