import React from "react";
import { useParams } from "react-router-dom";
import { BLOGS } from "../data/blogs";
import Header from "../components/Header";
import Layout from "../components/Layout";

const BlogDetail = () => {
  const { slug } = useParams();

  const blog = BLOGS.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <div className="py-32 text-center text-2xl font-bold">Blog not found</div>
    );
  }

  return (
    <Layout withBg={true}>
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <span className="inline-block mb-4 text-xs uppercase font-bold tracking-widest text-primary">
            {blog.category}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            {blog.title}
          </h1>

          <p className="text-gray-500 mb-10 font-medium">By {blog.author}</p>

          <img src={blog.image} alt={blog.title} className="w-full mb-12" />

          <article
            className="
    space-y-6 leading-relaxed
    [&_h2]:text-2xl [&_h2]:font-semibold
    [&_ul]:list-disc [&_ul]:pl-6
  "
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;
