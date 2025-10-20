import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, FileCheck, Users, Shield, TrendingUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BrokerVerse = () => {
  const techStack = ['Python', 'FastAPI', 'Docker', 'MySQL', 'Firebase', 'React', 'Next.JS'];

  const features = [
    {
      icon: <FileCheck />,
      title: 'Next.js Frontend',
      description: 'React Components and Tailwind CSS',
    },
    {
      icon: <Shield />,
      title: 'Backend',
      description: 'Next.js API Routes and Serverless Functions',
    },
    {
      icon: <Users />,
      title: 'Database',
      description: 'Mongoose ODM and MongoDB',
    },
    {
      icon: <TrendingUp />,
      title: 'Authentication',
      description: 'bcryptjs Encryption and JWT Authentication',
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
              BrokerVerse
            </h1>
            <p className="text-[#04CEFB] text-xl mb-6">SEBI Complaint Redressal System</p>
            <a
              href="https://mock-repo-neon.vercel.app/"
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
              Investors get a streamlined and accessible digital platform to file one track their complaints, enhancing transparency and efficiency. User can focus on tracking, view full handling practices. The intuitive dashboard, with clear status indicators for each grievance. User data and complaint details are securely stored.
            </p>

            <h3 className="font-['Press_Start_2P'] text-2xl mb-6 mt-12" style={{ textShadow: '0 0 10px #04CEFB' }}>
              Problem Solved
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Eliminates the need for investors to navigate multiple channels by providing a single, unified portal for all securities-market-related complaints. The platform provides a marketplace-related complaints. The platform provides a unified digital space for their lodged complaints, solving the problem of opaque and slow-moving manual processes. Replaces manual paperwork and physical visits with a structured digital form.
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
            <h3 className="font-['Press_Start_2P'] text-xl mb-8 text-center text-[#04CEFB]">Application Architecture Overview</h3>
            <img
              src="/assets/brokerverse.png"
              alt="BrokerVerse Methodology"
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
              New users first create an account by providing their name, email, and a secure password. Once registered, users can log in to the system, will be able to post their complaint system and their related complaint details. Users can even navigate to the 'Lodge Complaint' page.
            </p>
          </div>

          <div>
            <h3 className="font-['Press_Start_2P'] text-2xl mb-6" style={{ textShadow: '0 0 10px #04CEFB' }}>
              Building Process
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Clone the Repository: git clone https://github.com/orrete2004/Ed-SEBI-WEB. Navigate to Directory: cd SEBI-WEB. Configure Environment: Create a .env.local file with MONGODB_URI and JWT_SECRET. Run the Development server: npm run dev. The application will be available at http://localhost:3000
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
                src="/assets/brokerverse.png"
                alt="BrokerVerse UI"
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

export default BrokerVerse;