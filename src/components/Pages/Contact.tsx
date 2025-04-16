// import React from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// export const Contact = () => {
//   const teamMembers = [
//     {
//       name: "Rewa Shete",
//       role:"Little bit of everything",
//       description: "Second year engineering student.",
//       imageUrl: "/api/placeholder/400/400",
//       initials: "RS",
//     },
//     {
//       name: "Chinmayee Raikar",
//       role:"Team Leader, ThreeJs expert",
//       description: "Second year engineering student.",
//       imageUrl: "/api/placeholder/400/400",
//       initials: "CR",
//     },
//     {
//       name: "Tanvi Yeola",
//       role : "Designer",
//       description: "Second year engineering student.",
//       imageUrl: "/api/placeholder/400/400",
//       initials: "TY",
//     },
//     {
//       name: "Sanika Surange",
//       role: "Frontend Developer",
//       description: "Second year engineering student.",
//       imageUrl: "/api/placeholder/400/400",
//       initials: "SS",
//     },
//   ];

//   return (
//     <div className="py-12 bg-transparent relative top-20 left-40 w-300">
//       <h2 className="text-3xl font-bold text-center ">Our Team</h2>

//       <div className="max-w-7xl relative top-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
//         {teamMembers.map((member, index) => (
//           <Card
//             key={index}
//             className="flex flex-col h-full shadow-md hover:shadow-xl transition-shadow bg-yellow-100 top-5 duration-300 p-6"
//           >
//             <div className="flex justify-center pb-4">
//               <Avatar className="h-32 w-32 top-3">
//                 <AvatarImage src={member.imageUrl} alt={member.name} />
//                 <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
//                   {member.initials}
//                 </AvatarFallback>
//               </Avatar>
//             </div>
//             <CardHeader className="pb-2 text-center">
//               <CardTitle>{member.name}</CardTitle>
//               <CardDescription className="text-primary font-medium">
//                 {member.role}
//               </CardDescription>
//             </CardHeader>

//             <CardContent className="text-center flex-grow px-4">
//               <p className="text-gray-600">{member.description}</p>
//             </CardContent>

//             <CardFooter className="flex justify-center  gap-4 pt-4 pb-6">
//               <button className="rounded-full p-2 bg-transparent hover:bg-gray-200 transition-colors">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
//                   <rect x="2" y="9" width="4" height="12"></rect>
//                   <circle cx="4" cy="4" r="2"></circle>
//                 </svg>
//               </button>
//               {/* <button className="rounded-full p-2 bg-transparent hover:bg-gray-200 transition-colors">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
//                 </svg>
//               </button>
//               <button className="rounded-full p-2 bg-transparent hover:bg-gray-200 transition-colors">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
//                   <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
//                   <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
//                 </svg>
//               </button> */}
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Contact = () => {
  const teamMembers = [
    {
      name: "Rewa Shete",
      description: "Second year engineering student.",
      imageUrl: "/api/placeholder/400/400",
      initials: "RS",
      role: "Team Member",
    },
    {
      name: "Chinmayee Raikar",
      description: "Second year engineering student.",
      imageUrl: "/api/placeholder/400/400",
      initials: "CR",
      role: "Team Member",
    },
    {
      name: "Tanvi Yeola",
      description: "Second year engineering student.",
      imageUrl: "/api/placeholder/400/400",
      initials: "TY",
      role: "Team Member",
    },
    {
      name: "Sanika Surange",
      description: "Second year engineering student.",
      imageUrl: "/api/placeholder/400/400",
      initials: "SS",
      role: "Team Member",
    },
  ];

  return (
    <div className="p-8 md:p-12 lg:p-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-yellow-700">
          Our Team
        </h2>

        {/* Added line spacing here */}
        <div className="border-b-2 border-yellow-300 w-24 mx-auto mt-4 mb-2"></div>
        <div className="border-b-2 border-yellow-200 w-16 mx-auto mb-12"></div>

        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="flex flex-col w-full sm:w-64 md:w-72 bg-yellow-100/90 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mt-8">
                <Avatar className="h-24 w-24 border-2 border-yellow-200">
                  <AvatarImage src={member.imageUrl} alt={member.name} />
                  <AvatarFallback className="text-xl bg-yellow-300 text-yellow-800">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
              </div>

              <CardHeader className="text-center pt-3 pb-0 px-4">
                <CardTitle className="text-lg font-bold text-yellow-900">
                  {member.name}
                </CardTitle>
                <CardDescription className="text-yellow-700 font-medium">
                  {member.role}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center px-4 py-2">
                <p className="text-yellow-800">{member.description}</p>
              </CardContent>

              <CardFooter className="flex justify-center gap-3 pb-6">
                <a
                  href="#"
                  className="rounded-full p-2 bg-yellow-200 hover:bg-yellow-300 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-yellow-800"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
