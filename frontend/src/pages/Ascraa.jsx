import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Video, Users, Shield, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Ascraa = () => {
  const techStack = ['Python', 'Tensorflow', 'Keras', 'Computer Vision', 'Deep Learning', 'ML Pipeline'];

  const features = [
    {
      icon: <Video />,
      title: 'Facial Recognition',
      description: 'Advanced facial analysis for candidate evaluation',
    },
    {
      icon: <Zap />,
      title: 'Behavioral Analysis',
      description: 'Real-time behavioral pattern recognition',
    },
    {
      icon: <Shield />,
      title: 'Deepfake Detection',
      description: 'ML-based deepfake and fraud detection',
    },
    {
      icon: <Users />,
      title: 'ML Scoring',
      description: 'Intelligent candidate scoring system',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-[#04CEFB] hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="mr-2 group-hover:-translate-x-2 transition-transform" />
            <span className="font-['Press_Start_2P'] text-xs">Back to Home</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="font-['Press_Start_2P'] text-4xl sm:text-5xl lg:text-6xl mb-6"
              style={{ textShadow: '0 0 20px #04CEFB' }}
            >
              Ascraa
            </h1>
            <p className="text-[#04CEFB] text-xl mb-6">AI-Powered Video Resume Analysis Platform</p>
            <a
              href="https://ascraa.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#04CEFB] text-black px-6 py-3 rounded-md font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105"
            >
              <span className="font-['Press_Start_2P'] text-xs mr-2">{'>> View Live Project'}</span>
              <ExternalLink size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#04CEFB]/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-['Press_Start_2P'] text-2xl mb-8 text-center" style={{ textShadow: '0 0 10px #04CEFB' }}>
            Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="bg-black border-2 border-[#04CEFB] px-6 py-3 rounded-lg font-['Press_Start_2P'] text-xs text-[#04CEFB]"
              >
                {'>>'} {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h3 className="font-['Press_Start_2P'] text-2xl mb-6" style={{ textShadow: '0 0 10px #04CEFB' }}>
              Outcome
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Reduce recruiter screening time by 80% through AI-powered video resume analysis. Ensure authenticity of candidates through advanced ML-based deepfake detection and facial verification. Democratize the hiring process through an unbiased ML-scoring system. Implement intelligent job-matching algorithms that connect the right candidates with relevant opportunities.
            </p>

            <h3 className="font-['Press_Start_2P'] text-2xl mb-6 mt-12" style={{ textShadow: '0 0 10px #04CEFB' }}>
              Problem Solved
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Traditional resume screening is time-consuming, leading to delays in hiring. Increasing instances of fake profiles and deepfake videos in recruiting scenario. Manual processing don't scale with growing placements. Human bias can lead to unfair hiring leading to high turnover rates and unsatisfied placements. Manual processing of resume don't scale with growing demand, authenticity in remote hiring scenarios.
            </p>
          </div>

          {/* Right Column - Features */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-black border-2 border-[#04CEFB]/50 rounded-xl p-6 hover:border-[#04CEFB] transition-all duration-300 hover:shadow-lg hover:shadow-[#04CEFB]/30"
                >
                  <div className="text-[#04CEFB] mb-4">{feature.icon}</div>
                  <h4 className="text-white font-semibold mb-2 text-lg">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#04CEFB]/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-['Press_Start_2P'] text-3xl mb-12 text-center" style={{ textShadow: '0 0 15px #04CEFB' }}>
            Methodology
          </h2>
          <div className="bg-black/50 backdrop-blur-sm border border-[#04CEFB]/30 rounded-2xl p-8 sm:p-12">
            <h3 className="font-['Press_Start_2P'] text-xl mb-8 text-center text-[#04CEFB]">Candidate Evaluation Process</h3>
            <img
              src="/assets/ascraa.png"
              alt="Ascraa Methodology"
              className="w-full h-auto rounded-lg border-2 border-[#04CEFB]/30"
            />
          </div>
        </div>
      </section>

      {/* Usage & Building Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-['Press_Start_2P'] text-2xl mb-6" style={{ textShadow: '0 0 10px #04CEFB' }}>
              Usage
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Platform is currently in development phase. Will feature candidate registration and video resume upload functionality. Automated screening dashboard for HR. Real-time validation and scoring will be available through the automated matching system will connect candidates with relevant job opportunities.
            </p>
          </div>

          <div>
            <h3 className="font-['Press_Start_2P'] text-2xl mb-6" style={{ textShadow: '0 0 10px #04CEFB' }}>
              Building Process
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Project is currently in active development. Focus areas include: Backend ML Pipeline, Computer Vision Integration, Deepfake Detection Models, Scalable Testing phase include: Model accuracy validation, Security testing. Perfomance optimization.
            </p>
          </div>
        </div>
      </section>

      {/* UI Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#04CEFB]/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-['Press_Start_2P'] text-3xl mb-12 text-center" style={{ textShadow: '0 0 15px #04CEFB' }}>
            UI
          </h2>
          <div className="grid grid-cols-1 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-[#04CEFB]/30 rounded-2xl p-4 hover:border-[#04CEFB] transition-all duration-300"
            >
              <img
                src="/assets/icon1.png"
                alt="Ascraa UI"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ascraa;