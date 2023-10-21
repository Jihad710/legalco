"use client";
import Image from "next/image";
import Link from "next/link";
import UseBlogs from "@/hooks/UseBlogs";
import Loading from "@/app/loading";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useEffect, useState } from "react";
import Container from "@/Common/Container";
import BlogCard from "@/Components/BlogCard";

const BlogsPage = () => {
   const [allBlogs] = UseBlogs();
   const [showAll, setShowAll] = useState(false);
   const [allBlog, setAllBlog] = useState(null);
   let firstBlog = {};
   let restBlogs = [];
   let BlogContent;

   useEffect(() => {
      if (showAll) {
         setAllBlog(allBlogs);
      } else {
         setAllBlog(allBlogs?.slice(0, 7));
      }
   }, [showAll, allBlogs]);

   const truncateContent = (text = " ") => {
      const words = text.split(" ") || [];
      if (words.length > 17) {
         return words.slice(0, 17).join(" ") + "...";
      } else {
         return text;
      }
   };

   if (Array.isArray(allBlog)) {
      [firstBlog, ...restBlogs] = allBlog;
      BlogContent = truncateContent(firstBlog?.content);
   }

   return (
      <section className="mb-20">
         {allBlog && Array.isArray(allBlog) ? (
            <>
               <div className="blog-bg lg:flex items-center justify-center space-y-3 p-4 md:px-8 pt-[150px] pb-10 -mt-[100px] text-white">
                  <div className="md:pr-8 flex flex-col items-center">
                     <Image
                        className="w-full min-w-[340px] rounded-md"
                        src={
                           firstBlog?.image
                              ? firstBlog.image
                              : "https://i.ibb.co/Ytbhzg4/blank.jpg"
                        }
                        alt="customer"
                        width={500}
                        height={500}
                     />
                  </div>
                  <div className="lg:pl-8 flex flex-col">
                     <p className="mb-4 text-sm font-thin">
                        {firstBlog?.title && firstBlog?.title}
                     </p>
                     <h1 className="mb-4 text-2xl font-bold">
                        {firstBlog?.title ? firstBlog?.title : "loading"}
                     </h1>
                     <p>{BlogContent ? BlogContent : "loading"}</p>

                     <span className="inline-block w-36 mt-3">
                        <Link
                           href={`/blogs/${firstBlog?._id}`}
                           className="group flex items-center gap-2 text-blue-600"
                        >
                           <span>Read more</span>{" "}
                           <AiOutlineArrowRight className="group-hover:translate-x-1 duration-200" />
                        </Link>
                     </span>
                  </div>
               </div>

               {/* Blogs card section  */}
               <Container>
                  <div className="md:grid-cols-2 lg:grid-cols-3 mt-14 grid grid-cols-1 gap-12">
                     {restBlogs ? (
                        restBlogs.map((blog) => (
                           <BlogCard
                              blog={blog}
                              key={blog?._id}
                              truncateContent={truncateContent}
                           ></BlogCard>
                        ))
                     ) : (
                        <Loading />
                     )}
                  </div>

                  <div
                     onClick={() => setShowAll(!showAll)}
                     className="flex justify-center m-12"
                  >
                     <button className="bg-[#225559] hover:bg-transparent border-2 border-transparent hover:border-[#225559] text-white hover:text-[#35868b] py-2 px-6 rounded-full duration-300 capitalize">
                        {showAll ? "Show less" : "Show more"}
                     </button>
                  </div>
               </Container>
            </>
         ) : (
            <Loading />
         )}
      </section>
   );
};

export default BlogsPage;
