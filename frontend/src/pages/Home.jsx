import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Palette, Brain, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { articles } from "../data/articles.js"; // <-- ADD THIS
import ArticleCard from "../components/ArticleCard.jsx"; // <-- ADD THIS

const Home = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  const projects = [
    {
      title: 'Tweet Analyzer',
      subtitle: 'Real-time Social Media Analytics Platform',
      description: 'Advanced Twitter analytics platform leveraging real-time insights',
      image: '/assets/tweet-analyzer.png',
      link: '/TweetAnalyzer',
      color: '#04CEFB',
    },
    {
      title: 'RAG ChatBot',
      subtitle: 'Intelligent Document Analysis System',
      description: 'Transform PDFs into interactive chat experience',
      image: '/assets/rag-chatbot.png',
      link: '/RAGChatBot',
      color: '#04CEFB',
    },
    {
      title: 'Ascraa',
      subtitle: 'AI-Powered Video Resume Analysis Platform',
      description: 'Reduce recruiter screening time by 80% through AI',
      image: '/assets/ascraa.png',
      link: '/Ascraa',
      color: '#04CEFB',
    },
    {
      title: 'BrokerVerse',
      subtitle: 'SEBI Complaint Redressal System',
      description: 'Streamlined and accessible digital platform for complaints',
      image: '/assets/brokerverse.png',
      link: '/BrokerVerse',
      color: '#04CEFB',
    },
  ];

  const skills = [
    { icon: <Code2 />, title: 'Coding', subtitle: 'Python, JavaScript' },
    { icon: <Brain />, title: 'ML/AI', subtitle: 'Deep Learning' },
    { icon: <Palette />, title: 'Design', subtitle: 'UI/UX Design' },
    { icon: <Sparkles />, title: 'Problem Solving', subtitle: 'Complex Solutions' },
  ];

  return (
    <div className="min-h-screen bg-black text-white smooth-scroll">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#04CEFB]/5 to-transparent"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[#04CEFB] font-['Press_Start_2P'] text-xs sm:text-sm mb-4"
            >
              >> Hi, my name is
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="font-['Press_Start_2P'] text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight"
              style={{ textShadow: '0 0 20px #04CEFB' }}
            >
              Hardik Pandey
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-400 text-lg mb-4"
            >
              3rd year student
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl sm:text-2xl mb-8 text-white leading-relaxed"
            >
              AI & ML Engineering student passionate about building end to end solutions that solve real world problems.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#projects"
                className="group bg-[#04CEFB] text-black px-8 py-4 rounded-md font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <span className="font-['Press_Start_2P'] text-xs mr-2">{'>> view my work'}</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </a>
              <a
                href="#about"
                className="border-2 border-[#04CEFB] text-[#04CEFB] px-8 py-4 rounded-md font-semibold hover:bg-[#04CEFB] hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <span className="font-['Press_Start_2P'] text-xs">{'>> More about me'}</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-[#04CEFB]/20 blur-3xl rounded-full"></div>
              <img
                src="/assets/profile2.gif"
                alt="Hardik Pandey"
                className="relative z-10 w-full h-auto rounded-2xl border-4 border-[#04CEFB] shadow-2xl shadow-[#04CEFB]/50"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#04CEFB]/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-['Press_Start_2P'] text-3xl sm:text-4xl mb-12 text-center"
              style={{ textShadow: '0 0 15px #04CEFB' }}
            >
              About Me
            </h2>
            <div className="bg-black/50 backdrop-blur-sm border border-[#04CEFB]/30 rounded-2xl p-8 sm:p-12">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
                As a penultimate year AI and Machine Learning student at{' '}
                <span className="text-[#04CEFB] font-semibold">VIT Bhopal University, located in Bhopal</span>, India's{' '}
                <span className="text-[#04CEFB] font-semibold">City of Lakes</span>. While I maintain a high academic standing with a{' '}
                <span className="text-[#04CEFB] font-semibold font-['Press_Start_2P'] text-base"> 9.08/10.0 CGPA</span>, I'm truly passionate about applying this knowledge to build tangible, solutions that solve real problem.
              </p>
              <h3 className="font-['Press_Start_2P'] text-[#04CEFB] text-xl mb-6 mt-8">Area of Interest</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-black border-2 border-[#04CEFB]/50 rounded-xl p-6 hover:border-[#04CEFB] transition-all duration-300 hover:shadow-lg hover:shadow-[#04CEFB]/30"
                  >
                    <div className="text-[#04CEFB] mb-4">{skill.icon}</div>
                    <h4 className="text-white font-semibold mb-2 text-lg">{skill.title}</h4>
                    <p className="text-gray-400 text-sm">{skill.subtitle}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-['Press_Start_2P'] text-3xl sm:text-4xl mb-4 text-center"
              style={{ textShadow: '0 0 15px #04CEFB' }}
            >
              Somethings I have built
            </h2>
            <p className="text-[#04CEFB] font-['Press_Start_2P'] text-sm text-center mb-12">Featured Project</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -10 }}
                  className="group relative bg-black border-2 border-[#04CEFB]/30 rounded-2xl overflow-hidden hover:border-[#04CEFB] transition-all duration-500 hover:shadow-2xl hover:shadow-[#04CEFB]/30"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <p className="text-[#04CEFB] font-['Press_Start_2P'] text-xs mb-3">Featured Project</p>
                    <h3 className="font-['Press_Start_2P'] text-xl sm:text-2xl mb-2" style={{ textShadow: '0 0 10px #04CEFB' }}>
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{project.subtitle}</p>
                    <p className="text-gray-300 mb-6">{project.description}</p>
                    <Link
                      to={project.link}
                      className="inline-flex items-center text-[#04CEFB] hover:text-white transition-colors group/link font-semibold"
                    >
                      <span className="font-['Press_Start_2P'] text-xs mr-2">{'>> View Live Project'}</span>
                      <ArrowRight className="group-hover/link:translate-x-2 transition-transform" size={20} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-['Press_Start_2P'] text-3xl sm:text-4xl mb-4 text-center"
              style={{ textShadow: '0 0 15px #04CEFB' }}
            >
              My Articles
            </h2>
            <p className="text-[#04CEFB] font-['Press_Start_2P'] text-sm text-center mb-12">Featured Article</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#04CEFB]/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-['Press_Start_2P'] text-3xl sm:text-4xl mb-8"
              style={{ textShadow: '0 0 15px #04CEFB' }}
            >
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:hardikpandey0903@gmail.com"
                className="bg-[#04CEFB] text-black px-8 py-4 rounded-md font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105"
              >
                <span className="font-['Press_Start_2P'] text-xs">Say Hello</span>
              </a>
              <div className="flex gap-4">
                <span className="font-['Press_Start_2P'] text-[#04CEFB] text-xs">+91 9321646172</span>
                <span className="font-['Press_Start_2P'] text-[#04CEFB] text-xs">+91 9167180793</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;