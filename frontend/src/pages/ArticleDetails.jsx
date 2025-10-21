// frontend/src/pages/ArticleDetails.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles.js';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ArticleDetails = () => {
  const { id } = useParams();
  const article = articles.find((p) => p.id === id);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="container mx-auto px-4 pt-28 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center text-[#04CEFB] hover:text-white transition-colors group/link font-semibold mb-8"
          >
            <ArrowLeft className="group-hover/link:-translate-x-2 transition-transform" size={20} />
            <span className="font-['Press_Start_2P'] text-xs ml-2">{'<< Back to Home'}</span>
          </Link>

          {/* Header */}
          <h1
            className="font-['Press_Start_2P'] text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight"
            style={{ textShadow: '0 0 20px #04CEFB' }}
          >
            {article.title}
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl mb-8">
            {article.subtitle}
          </p>

          {/* Main Image */}
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-auto max-h-[500px] object-cover rounded-2xl border-2 border-[#04CEFB]/30 shadow-2xl shadow-[#04CEFB]/30 mb-12"
          />

          {/* Description Block */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-black/50 backdrop-blur-sm border border-[#04CEFB]/30 rounded-2xl p-8 sm:p-12">
              <h2
                className="font-['Press_Start_2P'] text-2xl sm:text-3xl mb-6 text-[#04CEFB]"
                style={{ textShadow: '0 0 15px #04CEFB' }}
              >
                About This Article
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {article.description}
              </p>

              {/* Link to Medium */}
              <a
                href={article.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#04CEFB] text-black px-8 py-4 rounded-md font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <span className="font-['Press_Start_2P'] text-xs mr-2">{'>> Read on Medium'}</span>
                <ExternalLink className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleDetails;