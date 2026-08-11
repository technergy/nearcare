import React from 'react';
import { Link } from 'react-router-dom';

export const BlogPreview = () => {
  const posts = [
    {
      title: "10 Tips for Healthy Aging",
      date: "Oct 12, 2023",
      category: "Senior Health",
      image: "https://images.pexels.com/photos/33768885/pexels-photo-33768885.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      excerpt: "Discover the best practices and daily habits you can adopt to ensure your loved ones stay healthy and active."
    },
    {
      title: "Understanding Memory Care",
      date: "Nov 05, 2023",
      category: "Wellness",
      image: "https://images.pexels.com/photos/8415703/pexels-photo-8415703.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      excerpt: "Learn how to identify signs of cognitive decline and take proactive steps to support cognitive function."
    }
  ];

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <span className="text-purple-600 font-semibold uppercase tracking-wider bg-purple-50 px-4 py-1 rounded-full">News & Insights</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4">Latest From Our Blog</h2>
        </div>
        <Link 
          to="/blog"
          className="inline-block bg-teal-50 text-teal-600 hover:bg-teal-100 font-semibold px-6 py-3 rounded-full transition-colors flex-shrink-0"
        >
          See All Articles
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row">
            <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-teal-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                {post.category}
              </div>
            </div>
            <div className="p-6 sm:w-3/5 flex flex-col justify-center">
              <div className="text-sm text-gray-500 mb-2">{post.date}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
              <Link to={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`} className="text-purple-600 font-semibold hover:text-purple-800 transition-colors inline-flex items-center gap-2">
                Read More <span className="text-lg">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
