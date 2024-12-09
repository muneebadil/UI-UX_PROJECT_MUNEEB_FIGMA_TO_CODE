import Image from "next/image";
import { FaClock, FaComment, FaChevronRight } from "react-icons/fa";
import React from "react";

const Features_Posts_Full = () => {
  // Post data (can be fetched or dynamically updated)
  const posts = [
    {
      image: "blog1.png",
      categories: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1",
      subtitle: "(L’intégral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
    {
      image: "blog2.png",
      categories: ["Facebook", "News", "Latest"],
      title: "Loudest à la Madison #2",
      subtitle: "(L’intégral)",
      description:
        "Explore new dimensions with advanced analytics. The future is here!",
      date: "15 May 2021",
      comments: 5,
    },
    {
      image: "blog3.png",
      categories: ["Twitter", "Updates", "Hot"],
      title: "Loudest à la Madison #3",
      subtitle: "(L’intégral)",
      description: "Innovative solutions for everyday tasks. Discover now!",
      date: "10 June 2021",
      comments: 8,
    },
  ];

  return (
    <div className="mt-32">
      {/* Section Header */}
      <div className="text-center mb-20">
        <h3 id="blog" className="text-[#23A6F0] text-[14px] font-bold">
          Practice Advice
        </h3>
        <h2 className="text-[#252B42] text-[40px] font-bold">Featured Posts</h2>
        <p className="text-[#737373] text-[14px]">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Post Container */}
      <div className="flex flex-wrap justify-center items-center gap-8">
        {posts.map((post, index) => (
          <div
            key={index}
            className="max-w-xs sm:max-w-sm bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 flex flex-col items-center"
          >
            {/* Post Image */}
            <div className="relative group">
              <div className="absolute top-4 left-4 bg-[#E74040] text-white py-1 px-2 text-[14px] font-bold h-[24px] w-[58px] flex items-center justify-center">
                NEW
              </div>
              <Image
                src={`/${post.image}`}
                alt="blog post"
                width={348}
                height={300}
                className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Post Content */}
            <div className="p-4 text-center">
              <div className="flex justify-center space-x-3 mb-3">
                {post.categories.map((category, idx) => (
                  <span
                    key={idx}
                    className="text-[#737373] py-1 px-3 rounded-full text-[12px] bg-gray-100"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <h3 className="text-[20px] text-[#252B42] mt-4">
                {post.title} <br />
                <span className="text-[#252B42] text-[20px]">{post.subtitle}</span>
              </h3>
              <p className="text-[#737373] text-[14px] mt-2">{post.description}</p>
              <div className="flex justify-between items-center mt-4 text-[12px] text-[#737373]">
                <div className="flex items-center space-x-2">
                  <FaClock className="w-4 h-4 text-[#23A6F0]" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaComment className="w-4 h-4 text-[#23856D]" />
                  <span>{post.comments} Comments</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-start">
                <button className="text-[#737373] text-sm font-bold py-2 px-4 rounded-md bg-transparent hover:bg-[#2DC071] hover:text-white transition-all duration-300 flex items-center space-x-2">
                  <span>Learn More</span>
                  <FaChevronRight className="inline-block text-[#737373]" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features_Posts_Full;
