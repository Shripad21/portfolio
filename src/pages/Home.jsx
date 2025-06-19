import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Database, 
  Cloud, 
  Brain, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Rocket,
  ChevronDown,
  ExternalLink,
  Star,
  Users,
  Video,
  Zap,
  BookOpen,
  Shield,
  Smartphone,
  Globe
} from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { category: "Frontend", items: ["ReactJS", "JavaScript", "HTML5", "CSS3", "TailwindCSS"], icon: <Code className="w-6 h-6" /> },
    { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Java", "Python"], icon: <Database className="w-6 h-6" /> },
    { category: "Cloud & Storage", items: ["Firebase", "Appwrite", "AWS (planned)", "Google Cloud"], icon: <Cloud className="w-6 h-6" /> },
    { category: "AI & Emerging", items: ["NLP", "Machine Learning", "AI Integration", "Pattern Recognition"], icon: <Brain className="w-6 h-6" /> }
  ];

  const projects = [
    {
      title: "Online Course Platform",
      type: "Full-stack Web Application",
      description: "End-to-end learning platform with role-based access, UPI payments, and YouTube-style video layout",
      tech: ["ReactJS", "Node.js", "Firebase", "Appwrite"],
      features: ["Multi-role dashboards", "Admin approval system", "Video streaming", "Progress tracking"],
      status: "In Production",
      highlight: "Manual UPI integration with admin approval - unique in the market"
    },
    {
      title: "AI Recipe Substitution",
      type: "NLP-powered Smart Tool",
      description: "Context-aware ingredient substitution using natural language processing",
      tech: ["Python", "spaCy", "Transformers", "NLP"],
      features: ["Contextual understanding", "Dietary preferences", "Regional alternatives", "Health-focused"],
      status: "Planned",
      highlight: "First of its kind contextual recipe intelligence"
    },
    {
      title: "Textile Management System",
      type: "Enterprise Solution",
      description: "Comprehensive management tool for textile companies with AI pattern generation",
      tech: ["ReactJS", "MongoDB", "AI/ML", "Analytics"],
      features: ["Worker management", "Inventory tracking", "AI patterns", "Analytics dashboard"],
      status: "Planned",
      highlight: "AI-powered pattern generation for textile industry"
    },
    {
      title: "Smart Learner App",
      type: "Educational Assistant",
      description: "AI-powered study companion with distraction management and goal tracking",
      tech: ["React Native", "Firebase", "AI", "NLP"],
      features: ["Goal setting", "Distraction alerts", "Smart breaks", "AI recommendations"],
      status: "In Progress",
      highlight: "AI-based distraction reduction and productivity optimization"
    }
  ];

  const achievements = [
    { number: "4+", label: "Major Projects", icon: <Rocket className="w-5 h-5" /> },
    { number: "6.93", label: "CGPA", icon: <GraduationCap className="w-5 h-5" /> },
    { number: "86%", label: "Diploma Score", icon: <Star className="w-5 h-5" /> },
    { number: "2025", label: "Expected Graduation", icon: <BookOpen className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-slate-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation Header */}
      <nav className="relative z-10 p-6 flex justify-between items-center backdrop-blur-sm">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Shri.dev
        </div>
        <div className="flex space-x-6">
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`relative z-10 px-6 py-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-500/30">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Solapur, Maharashtra</span>
                </div>
                <h1 className="text-6xl font-bold leading-tight">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-slate-300 bg-clip-text text-transparent">
                    Shripad
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Innovative Full-Stack Developer specializing in 
                  <span className="text-blue-400 font-semibold"> Web Development</span>, 
                  <span className="text-cyan-400 font-semibold"> Cloud Technologies</span>, and 
                  <span className="text-slate-300 font-semibold"> AI Integration</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="mailto:shripadraccha5232@gmail.com"
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  <span>Get In Touch</span>
                </a>
                <a 
                  href="tel:+919561687911"
                  className="flex items-center space-x-2 bg-white/10 px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Me</span>
                </a>
              </div>

              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="text-purple-400">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold">{stat.number}</div>
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 px-6 py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
                  <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Computer Engineering student with a strong focus on web development and cloud technology. 
              I specialize in building full-stack web applications and love solving real-world problems with intuitive 
              user interfaces and scalable backend logic. With a keen interest in online education platforms, I've built 
              robust solutions using technologies like ReactJS, NodeJS, Firebase, and Appwrite.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-blue-500/20 rounded-full text-sm border border-blue-500/30">BTech Computer Engineering</span>
              <span className="px-4 py-2 bg-cyan-500/20 rounded-full text-sm border border-cyan-500/30">Full-Stack Developer</span>
              <span className="px-4 py-2 bg-slate-500/20 rounded-full text-sm border border-slate-500/30">AI Enthusiast</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-purple-400">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
                </div>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-gray-300 text-sm">{skill}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="relative z-10 px-6 py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02] group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-purple-400 text-sm font-medium">{project.type}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'In Production' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                    'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    {project.status}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-gray-400">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-3 rounded-lg border border-purple-500/20">
                  <p className="text-sm text-gray-300">
                    <Zap className="w-4 h-4 inline mr-2 text-yellow-400" />
                    <strong>Unique:</strong> {project.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">2025 Goals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Deploy online course platform publicly",
              "Add AI-powered course recommendations",
              "Build NLP-based recipe substitution tool",
              "Learn MongoDB & GraphQL",
              "Build personal portfolio website",
              "Explore cloud deployment at scale"
            ].map((goal, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                <Rocket className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300">{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 px-6 py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Build Something Amazing</h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always excited to collaborate on innovative projects, especially in education technology and AI integration.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="mailto:shripadraccha5232@gmail.com"
              className="flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span className="font-semibold">Email Me</span>
            </a>
            <a 
              href="tel:+919561687911"
              className="flex items-center space-x-3 bg-white/10 px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">+91 9561687911</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Shripad Raccha. Built with passion and innovation.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;