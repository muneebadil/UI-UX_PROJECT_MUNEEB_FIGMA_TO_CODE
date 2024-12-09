import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface TeamMember {
  name: string;
  profession: string;
  social: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  image: string;
}

const MeetTeam: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "John Doe",
      profession: "Designer",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
      image: "/team-member3.png",
    },
    {
      name: "Jane Smith",
      profession: "Developer",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
      image: "/team-member4.png",
    },
    {
      name: "Sam Wilson",
      profession: "Project Manager",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
      image: "/team-member1.png",
    },
  ];

  return (
    <section className="py-20 bg-white">
      {/* Section Title */}
      <h2 className="text-[#252B42] text-center text-[42px] font-semibold mb-16">
        Meet Our Talented Team
      </h2>

      {/* Team Member Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            {/* Team Member Image */}
            <Image
              src={member.image}
              alt={member.name}
              width={320}
              height={240}
              className="mx-auto rounded-full object-cover"
            />
            {/* Team Member Name */}
            <h3 className="mt-6 text-[18px] font-semibold text-[#252B42]">{member.name}</h3>
            {/* Team Member Profession */}
            <p className="text-[#737373] text-[16px] mt-2">{member.profession}</p>

            {/* Social Media Icons */}
            <div className="flex justify-center mt-4 space-x-5">
              <Link href={member.social.facebook} passHref>
                <FaFacebookF size={24} className="text-[#23A6F0]" />
              </Link>
              <Link href={member.social.instagram} passHref>
                <FaInstagram size={24} className="text-[#23A6F0]" />
              </Link>
              <Link href={member.social.twitter} passHref>
                <FaTwitter size={24} className="text-[#23A6F0]" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTeam;
