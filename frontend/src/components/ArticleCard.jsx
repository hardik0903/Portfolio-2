// frontend/src/components/ArticleCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ArticleCard = ({ article, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -10 }}
      className="group relative bg-black border-2 border-[#04CEFB]/30 rounded-2xl overflow-hidden hover:border-[#04CEFB] transition-all duration-500 hover:shadow-2xl hover:shadow-[#04CEFB]/30"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>
      <div className="p-6">
        <p className="text-[#04CEFB] font-['Press_Start_2P'] text-xs mb-3">Featured Article</p>
        <h3 className="font-['Press_Start_2P'] text-xl sm:text-2xl mb-2" style={{ textShadow: '0 0 10px #04CEFB' }}>
          {article.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4">{article.subtitle}</p>
        {/* We use the description from articles.js here */}
        <p className="text-gray-300 mb-6">{article.description}</p>
        <Link
          to={`/article/${article.id}`}
          className="inline-flex items-center text-[#04CEFB] hover:text-white transition-colors group/link font-semibold"
        >
          <span className="font-['Press_Start_2P'] text-xs mr-2">{'>> Read Article'}</span>
          <ArrowRight className="group-hover/link:translate-x-2 transition-transform" size={20} />
        </Link>
      </div>
    </motion.div>
  );
};

export default ArticleCard;