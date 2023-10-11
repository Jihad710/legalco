"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Container from "@/Common/Container";

const DetailsPage = ({ params }) => {
   const [blog, setBlog] = useState({});
   const [loading, setLoading] = useState(true);
   const [suggestedBlogs, setSuggestedBlogs] = useState([]);

   useEffect(() => {
      async function fetchBlogData() {
         try {
            const response = await axios(`/api/blog/${params.id}`);
            if (response.data) {
               setBlog(response.data);
               setLoading(false);
            }
         } catch (error) {
            console.error("Error fetching data:", error);
         }
      }
      fetchBlogData();
      async function fetchSuggestedBlogs() {
         try {
            const response = await axios.get("/api/blog");
            if (response.data) {
               const filteredBlogs = response.data.filter(
                  (suggestedBlog) => suggestedBlog.id !== params.id
               );
               setSuggestedBlogs(filteredBlogs);
            }
         } catch (error) {
            console.error("Error fetching suggested blogs:", error);
         }
      }

      fetchSuggestedBlogs();
   }, [params]);

   return (
      <div className="min-h-screen py-2 md:py-5 -mt-[120px] mb-20">
         <div className="h-72 bg-white blog-details-bg">
         </div>
         <Container>
            <div className="flex justify-center mt-8">
               <div className="max-w-screen-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 space-y-4">
                     <div className="col-span-2">
                        <h1 className="text-xl md:text-2xl mb-3 lg:mb-5 font-semibold">
                           {blog?.title}
                        </h1>
                        <Image
                           src={blog?.image}
                           alt={blog?.title}
                           className="w-full mb-4 rounded-md"
                           width={1000}
                           height={400}
                        />
                        <p className="text-gray-400 text-center">{blog?.subtitle}</p>
                        <p className="mt-4 text-gray-800">{blog?.content}</p>
                     </div>

                     {/*============ blog suggestion section ============*/}
                     <div className="sticky top-24 h-fit">
                        <h2 className="text-2xl font-semibold mb-4">
                           Recent Posts
                        </h2>
                        {Array.isArray(suggestedBlogs) &&
                        suggestedBlogs.length > 0 ? (
                           <ul className="space-y-4">
                              {suggestedBlogs
                                 .slice(0, 5)
                                 .map((suggestedBlog) => (
                                    <li
                                       key={suggestedBlog.id}
                                       className="flex space-x-4"
                                    >
                                       <div className="flex-shrink-0 w-[100px] h-[60px]">
                                          <Image
                                             src={suggestedBlog.image}
                                             alt={suggestedBlog.title}
                                             className="rounded-lg"
                                             width={100}
                                             height={60}
                                          />
                                       </div>
                                       <div className="flex-1">
                                          <Link
                                             className="text-blue-600 hover:text-cyan-700"
                                             href={`/blogs/${suggestedBlog?._id}`}
                                          >
                                             {suggestedBlog.title
                                                .split(" ")
                                                .slice(0, 7)
                                                .join(" ")}
                                          </Link>
                                       </div>
                                    </li>
                                 ))}
                           </ul>
                        ) : (
                           <p>No suggested blogs available</p>
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default DetailsPage;
