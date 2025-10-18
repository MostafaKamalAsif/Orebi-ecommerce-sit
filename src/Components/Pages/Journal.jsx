import React from "react";
import Container from "../Container";
import Headding from "../Headding";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import Flex from "../Flex";

const Journal = () => {
  const posts = [
    {
      id: 1,
      title: "Top 5 Trends in Modern E-Commerce",
      date: "October 10, 2025",
      desc: "Discover how minimal design, AI integration, and micro-interactions are reshaping online shopping .",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Building Brand Trust Through Design",
      date: "September 28, 2025",
      desc: "Learn how thoughtful design and consistent UX build stronger customer relationships in e-commerce.",
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "UI Tips for Better Product Pages",
      date: "August 14, 2025",
      desc: "Practical layout tips and user-focused design strategies to boost engagement and conversions.",
      // ✅ Replaced broken image with a reliable Unsplash one
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <>
    <Container className={"pt-[128px]"}>
       <Headding as={"h1"} text={"About"} className={"font-bold text-[#262626] text-3xl"}/>
               <Flex className={"flex items-center gap-x-1.5 pt-3 text-menuText "}>
                    <Link to={"/"}>
                      <Headding as={"h4"} text={"Home"} />
                    </Link>
                    <Headding
                      as={"h4"}
                      text={"> Journal"}
                      className={"cursor-pointer"}
                    />
                  </Flex>
                  <p className="max-w-[600px]  text-menuText mt-4 text-[16px]">
          Read the latest insights, updates, and design stories from the Orebi
          team.
        </p>
    </Container>
      

      {/* Blog Grid */}
      <Container className={"py-[80px]"}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[220px] object-cover"
              />
              <div className="p-6 text-left">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="font-bold text-xl text-[#262626] mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-5 text-[15px] leading-relaxed">
                  {post.desc}
                </p>
                <Button className={"py-2 px-6"}>Read More</Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Journal;
