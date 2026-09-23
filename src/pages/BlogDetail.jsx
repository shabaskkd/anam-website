import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>{blog.seoTitle || `${blog.title} | ANAM Qatar`}</title>
        <meta
          name="description"
          content={blog.metaDescription || blog.excerpt}
        />
        <meta property="og:title" content={blog.seoTitle || blog.title} />
        <meta
          property="og:description"
          content={blog.metaDescription || blog.excerpt}
        />
        <meta property="og:image" content={blog.image} />
      </Helmet>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            {blog.slug.includes("wall-panel") && (
              <>
                <span>/</span>
                <Link to="/wall-panels" className="text-primary hover:underline">Wall Panels Qatar</Link>
              </>
            )}
          </div>

          <span className="inline-block mb-4 text-xs uppercase font-bold tracking-widest text-primary">
            {blog.category}
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-900">
            {blog.title}
          </h1>

          <p className="text-gray-500 mb-8 font-medium">By {blog.author}</p>

          <div className="overflow-hidden rounded-lg mb-12 shadow-md">
            <img src={blog.image} alt={blog.title} className="w-full object-cover max-h-[500px]" />
          </div>

          <article
            className="
              prose max-w-none space-y-6 leading-relaxed text-gray-700
              [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:border-b [&_h2]:border-gray-200 [&_h2]:pb-2
              [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mt-6 [&_h3]:mb-3
              [&_p]:leading-relaxed [&_p]:text-gray-700 [&_p]:text-base
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:text-gray-700
              [&_li]:leading-relaxed
              [&_strong]:text-gray-900
            "
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <Link
              to="/wall-panels"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline text-sm uppercase tracking-wider"
            >
              ← Explore Wall Panel Solutions
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-black transition-colors"
            >
              Get a Free Quote ↗
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;
