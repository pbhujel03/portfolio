import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Facebook, Instagram, Mail, Phone, Download, Moon, Sun, ExternalLink, Menu, X, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'learning', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "Resume Analyzer",
      description: "RAG-based intelligent resume analysis system that provides detailed insights and recommendations using vector embeddings and semantic search.",
      tech: ["Python", "RAG", "FAISS", "NLP", "Streamlit"],
      github: "https://github.com/pbhujel03",
      highlights: ["Vector Database Integration", "Semantic Search", "Real-time Analysis"]
    },
    {
      title: "AI Chatbot",
      description: "Context-aware conversational AI powered by advanced language models, featuring multi-turn dialogue and intent recognition.",
      tech: ["Python", "NLP", "GenAI", "Streamlit"],
      github: "https://github.com/pbhujel03",
      highlights: ["Multi-turn Conversations", "Context Retention", "Intent Classification"]
    },
    {
      title: "Personal AI Assistant",
      description: "Custom AI assistant utilizing local LLMs via Ollama, designed for privacy-focused intelligent task automation.",
      tech: ["Python", "Ollama", "LangChain", "RAG"],
      github: "https://github.com/pbhujel03",
      highlights: ["Local LLM Integration", "Privacy-First Design", "Task Automation"]
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "JavaScript", "Java", "C#"],
    "AI/ML": ["Machine Learning", "Deep Learning", "Natural Language Processing", "Retrieval-Augmented Generation", "Generative AI"],
    "Tools & Frameworks": ["Git/GitHub", "FAISS", "Streamlit", "Ollama", "TensorFlow", "PyTorch", "LangChain"],
    "Development": ["RESTful APIs", "Version Control", "Problem Solving", "Algorithm Design"]
  };

  const learningPath = [
    {
      title: "Self-Directed AI/ML Learning",
      description: "Intensive self-study in machine learning fundamentals, deep learning architectures, and modern AI frameworks",
      period: "2023 - Present"
    },
    {
      title: "Hands-on Project Development",
      description: "Building real-world AI applications focusing on NLP, RAG systems, and conversational AI",
      period: "2024 - Present"
    },
    {
      title: "Open Source Contributions",
      description: "Contributing to AI/ML projects and building a portfolio of production-ready applications",
      period: "Ongoing"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? (darkMode ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-white/95 backdrop-blur-lg shadow-lg') : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Prabesh Bhujel
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Learning', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors duration-200 ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-500'
                      : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Skills', 'Projects', 'Learning', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-3 py-2 rounded-md ${
                    activeSection === item.toLowerCase()
                      ? 'bg-blue-500 text-white'
                      : darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center">
            <div className="inline-block mb-4">
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                AI/ML Enthusiast
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Prabesh Bhujel
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-400">
              Aspiring AI/ML Developer
            </p>
            <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Building intelligent systems that learn, adapt, and solve real-world problems.
              Passionate about transforming ideas into AI-powered solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-8 py-3 rounded-lg font-medium border-2 transition-all duration-200 hover:scale-105 ${
                  darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'
                }`}
              >
                Get in Touch
              </button>
            </div>
            <div className="flex justify-center gap-6 mt-12">
              <a href="https://github.com/pbhujel03" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/prabesh-b-9b8a07191/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://www.facebook.com/prabesh.bhujel.36688" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/pra3esh/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm an AI/ML enthusiast with a passion for building intelligent systems that make a difference. 
              My journey into artificial intelligence began with curiosity and has evolved into a dedicated pursuit 
              of mastering machine learning, deep learning, and modern AI technologies.
            </p>
            <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Through hands-on project development and self-directed learning, I've gained practical experience 
              in NLP, RAG systems, and conversational AI. I believe in learning by building—each project is an 
              opportunity to push boundaries and solve real-world problems.
            </p>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              My approach combines strong programming fundamentals with modern AI frameworks. I'm constantly 
              exploring new technologies, contributing to open-source projects, and refining my skills to become 
              a proficient AI/ML developer ready to tackle complex challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:shadow-xl'
                }`}
              >
                <h3 className="text-xl font-bold mb-4 text-blue-500">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${
                        darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-50'
                }`}
              >
                <h3 className="text-2xl font-bold mb-3 text-blue-500">{project.title}</h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2 text-purple-500">Key Features:</p>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className={`text-sm flex items-start ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <ChevronRight size={16} className="mt-0.5 mr-1 text-blue-500 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors"
                >
                  View on GitHub <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section id="learning" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Learning Journey
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {learningPath.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-blue-500">{item.title}</h3>
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {item.period}
                  </span>
                </div>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <a
                href="mailto:prabeshbhujel02@gmail.com"
                className={`flex items-center p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:shadow-lg'
                }`}
              >
                <Mail className="mr-3 text-blue-500" size={24} />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">prabeshbhujel02@gmail.com</p>
                </div>
              </a>
              <a
                href="tel:+9779814990706"
                className={`flex items-center p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:shadow-lg'
                }`}
              >
                <Phone className="mr-3 text-blue-500" size={24} />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">+977-9814990706</p>
                </div>
              </a>
            </div>
            <div className="text-center">
              <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                I'm always open to discussing AI/ML projects, collaboration opportunities, or just connecting with fellow enthusiasts.
              </p>
              <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200">
                <Download size={20} className="mr-2" />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            © 2026 Prabesh Bhujel. Built with passion for AI/ML.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;