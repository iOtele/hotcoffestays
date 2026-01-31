import React from "react";

import Image from "next/image";

const Team: React.FC = () => {
  const team = [
    {
      name: "Adewale Johnson",
      role: "Founder & CEO",
      image: "/image1.jpg",
    },
    {
      name: "Chioma Okafor",
      role: "Head of Operations",
      image: "/image2.jpg",
    },
    {
      name: "Ibrahim Musa",
      role: "Fleet Manager",
      image: "/image3.jpg",
    },
    {
      name: "Ngozi Eze",
      role: "Customer Experience",
      image: "/image4.jpg",
    },
  ];

  return (
    <section className="py-24 px-6 bg-background/5">
      <div className="container mx-auto">
        <div className="text-center mb-16 text-foreground ">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl opacity-70">
            The people behind your exceptional experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-foreground ">
          {team.map((member, id) => (
            <div key={id} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <Image
                  width={300}
                  height={300}
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Team;
