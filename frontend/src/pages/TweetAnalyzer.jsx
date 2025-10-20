import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Code2, Database, Activity, Map } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TweetAnalyzer = () => {
  const techStack = ['Python', 'FastAPI', 'Docker', 'MySQL', 'Firebase', 'React', 'Next.JS'];

  const features = [
    {
      icon: <Activity />,
      title: 'Advanced AI Analysis',
      description: 'Leveraging real-time insights into public opinion, trending topics',
    },
    {
      icon: <Map />,
      title: 'Geolocation Heatmaps',
      description: 'Accurately measure the campaign performance',
    },
    {
      icon: <Activity />,
      title: 'Real-time Feed',
      description: 'Monitor brand sentiment and quickly respond to public feedback',
    },
    {
      icon: <Database />,
      title: 'Campaign Tracking',
      description: 'Track key metrics and visualizing engagement heatmaps',
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
              Tweet Analyzer
            </h1>
            <p className="text-[#04CEFB] text-xl mb-6">Real-time Social Media Analytics Platform</p>
            <a
              href="https://sentinelx-codez.vercel.app/"
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
              It streamlines the process of collecting, processing and analyzing millions of tweets, transforming raw data into actionable intelligence. Traditional analytics can have a metric lag, allowing for immediate reaction to trends and events. It provides coverage from location to sentiment, engagement, reach location to solve the challenge of quantifying the success of a social media campaign.
            </p>

            <h3 className="font-['Press_Start_2P'] text-2xl mb-6 mt-12" style={{ textShadow: '0 0 10px #04CEFB' }}>
              Problem Solved
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              It automates the process of collecting, processing and analyzing millions of tweets, transforming raw data into actionable intelligence. Traditional analytics can have a metric lag, allowing for immediate reaction to trends and events. It provides coverage from location to sentiment, engagement, reach location to solve the challenge of quantifying the success of a social media campaign.
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
            <img
              src="/assets/tweet-analyzer.png"
              alt="Tweet Analyzer Methodology"
              className="w-full h-auto rounded-lg mb-8 border-2 border-[#04CEFB]/30"
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
              Access the platform through the website, built for a user-friendly interface. Use the REST API for programmatic access to integrate platform data into other applications. Create and monitor campaigns through the dashboard. Generate reports and time graphs of trending keywords and analyze tweet locations on a world map.
            </p>
          </div>

          <div>
            <h3 className="font-['Press_Start_2P'] text-2xl mb-6" style={{ textShadow: '0 0 10px #04CEFB' }}>
              Building Process
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Built the Backend API using Python/FastAPI in venv/virtualEnvironment; Python -m venv venv && source venv/bin/activate. Install Dependencies: pip install -r requirements.txt. Configure Environment: Create a .env file with database credentials and API secrets. Run the server: uvicorn main:app --reload. The API will be available at http://127.0.0.18000 with interactive documentation at /docs
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
                src="/assets/tweet-analyzer.png"
                alt="Tweet Analyzer UI"
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

export default TweetAnalyzer;