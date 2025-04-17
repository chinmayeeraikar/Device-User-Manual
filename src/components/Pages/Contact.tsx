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
      ln: "https://www.linkedin.com/in/rewa-shete-60a933286/",
    },
    {
      name: "Chinmayee Raikar",
      description: "Second year engineering student.",
      imageUrl: "/api/placeholder/400/400",
      initials: "CR",
      role: "Team Member",
      ln: "https://www.linkedin.com/in/chinmayee-raikar-832700289/",
    },
    {
      name: "Tanvi Yeola",
      description: "Second year engineering student.",
      imageUrl: "/api/placeholder/400/400",
      initials: "TY",
      role: "Team Member",
      ln: "",
    },
    {
      name: "Sanika Surange",
      description: "Second year engineering student.",
      imageUrl: "/api/placeholder/400/400",
      initials: "SS",
      role: "Team Member",
      ln: "https://www.linkedin.com/in/sanika-surange-272252345/",
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
                  href={member.ln}
                  className="rounded-full p-2 hover:bg-yellow-300 transition-colors"
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
                    // className="text-yellow-800"
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
