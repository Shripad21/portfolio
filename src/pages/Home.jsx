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
  Globe,
  Play,
  Award,
  Target,
  Download,
  Calendar,
  Languages
} from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { 
      category: "Frontend", 
      items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "TailwindCSS", "Bootstrap", "Material UI", "AngularJS"], 
      icon: <Code className="w-6 h-6" /> 
    },
    { 
      category: "Backend", 
      items: ["Node.js", "Express.js", "REST APIs", "JSP", "JWT Authentication", "API Development"], 
      icon: <Database className="w-6 h-6" /> 
    },
    { 
      category: "Database & Cloud", 
      items: ["MongoDB", "MySQL", "Firebase", "Appwrite", "Hibernate"], 
      icon: <Cloud className="w-6 h-6" /> 
    },
    { 
      category: "Tools & Platforms", 
      items: ["Git/GitHub", "Android Studio", "Postman", "VS Code", "Eclipse", "Maven", "Vercel", "Netlify"], 
      icon: <Shield className="w-6 h-6" /> 
    },
    { 
      category: "Programming Languages", 
      items: ["Java", "Python", "JavaScript", "C", "C++", "PHP"], 
      icon: <Brain className="w-6 h-6" /> 
    }
  ];

  const projects = [
    {
      title: "Online Course Platform",
      type: "Full-Stack Web Application",
      description: "A comprehensive Udemy-like course platform with role-based access control for Students, Educators, and Admins. Features course creation, video streaming, and manual UPI payment verification.",
      tech: ["React.js", "Node.js", "Appwrite", "TailwindCSS", "Firebase"],
      features: ["Role-based dashboards", "Course creation & management", "Video streaming", "Authentication", "Payment integration"],
      status: "Completed",
      date: "June 2025",
      github: "https://github.com/Shripad21/Online_Course_Platform",
      highlight: "3 distinct user roles with complete CRUD operations and secure authentication",
      category: "web"
    },
    {
      title: "Pixabay Clone",
      type: "React-based Image Gallery",
      description: "A responsive image gallery application using Pixabay's REST API with search functionality and modern UI design.",
      tech: ["React.js", "REST API", "JavaScript", "Context API", "React Hooks"],
      features: ["Image search", "API integration", "Responsive design", "State management", "Modern UI"],
      status: "Completed",
      date: "April 2024",
      github: "https://github.com/Shripad21/Pixabay",
      highlight: "Clean implementation of React hooks and Context API for efficient state management",
      category: "web"
    },
    {
      title: "Kids Learning App",
      type: "Android Application",
      description: "Educational Android app designed specifically for children with engaging UI and multiple learning modules to enhance active participation.",
      tech: ["Android Studio", "Java", "XML", "Material Design"],
      features: ["Child-friendly UI", "Multiple learning modules", "Interactive elements", "Engaging animations"],
      status: "Completed",
      date: "March 2022",
      github: "#",
      highlight: "Specially designed attractive UI to boost children's learning engagement",
      category: "mobile"
    },
    {
      title: "Smart Learner App",
      type: "Study Productivity Tool",
      description: "AI-powered study companion with goal tracking, YouTube recommendations, distraction management, and optimized break intervals.",
      tech: ["React.js", "Firebase", "AI Integration", "Node.js"],
      features: ["Study planning", "AI recommendations", "Distraction alerts", "Break optimization", "Goal tracking"],
      status: "In Progress",
      date: "2024",
      github: "#",
      highlight: "AI-based content suggestions and productivity optimization features",
      category: "web"
    }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Engineering",
      institution: "AGPIT Solapur, Maharashtra",
      duration: "August 2022 – May 2025",
      grade: "Expected 2025",
      details: "Developed essential communication and technical knowledge skills"
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "SES Polytechnic Solapur, Maharashtra", 
      duration: "August 2019 – May 2022",
      grade: "Completed",
      details: "Learned C, C++, Java, PHP, and Android development"
    }
  ];

  const languages = [
    { name: "Telugu", level: "Native", percentage: 100 },
    { name: "Marathi", level: "Fluent", percentage: 95 },
    { name: "Hindi", level: "Fluent", percentage: 90 },
    { name: "English", level: "Intermediate", percentage: 75 }
  ];

  const achievements = [
    { number: "4+", label: "Major Projects", icon: <Rocket className="w-5 h-5" /> },
    { number: "3+", label: "Years Learning", icon: <GraduationCap className="w-5 h-5" /> },
    { number: "10+", label: "Technologies", icon: <Star className="w-5 h-5" /> },
    { number: "2025", label: "Expected Graduation", icon: <Calendar className="w-5 h-5" /> }
  ];

  const goals2025 = [
    "Deploy online course platform publicly",
    "Add AI-powered course recommendations", 
    "Build NLP-based recipe substitution tool",
    "Learn MongoDB & GraphQL",
    "Explore cloud deployment at scale",
    "Contribute to open-source projects"
  ];

  const filteredProjects = activeTab === 'all' ? projects : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation Header */}
      <nav className="relative z-10 p-6 flex justify-between items-center backdrop-blur-sm border-b border-white/10">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Shripad Raccha
        </div>
        <div className="flex space-x-6">
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
          <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
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
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Shripad
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Innovative and driven{' '}
                  <span className="text-blue-400 font-semibold">Software Engineer</span> with a strong foundation in{' '}
                  <span className="text-cyan-400 font-semibold">Web Development</span> and a keen interest in leveraging{' '}
                  <span className="text-purple-400 font-semibold">Python, Java, and Web technologies</span> to create cutting-edge solutions.
                </p>
                <p className="text-lg text-gray-400">
                  Passionate about continuous learning and committed to delivering high-quality software solutions.
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
                  <span>+91 9561687911</span>
                </a>
                <button className="flex items-center space-x-2 bg-purple-600/20 px-6 py-3 rounded-lg hover:bg-purple-600/30 transition-all duration-300 backdrop-blur-sm border border-purple-500/30">
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </button>
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
      <section id="about" className="relative z-10 px-6 py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate Computer Engineering student with a strong focus on web development and emerging technologies. 
              I specialize in building full-stack web applications with modern frameworks like React.js and Node.js, 
              and I love solving real-world problems with intuitive user interfaces and scalable backend solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With experience in both web and mobile development, I've successfully built role-based platforms, 
              API integrations, and user-friendly applications. I'm always eager to learn new technologies and 
              contribute to innovative projects that make a real impact.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-blue-500/20 rounded-full text-sm border border-blue-500/30">BTech Computer Engineering</span>
              <span className="px-4 py-2 bg-cyan-500/20 rounded-full text-sm border border-cyan-500/30">Full-Stack Developer</span>
              <span className="px-4 py-2 bg-purple-500/20 rounded-full text-sm border border-purple-500/30">Problem Solver</span>
              <span className="px-4 py-2 bg-green-500/20 rounded-full text-sm border border-green-500/30">Continuous Learner</span>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl">🔍</span>
                <h3 className="text-xl font-bold text-blue-400">Curiosity</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                I constantly explore new technologies and enjoy learning through hands-on experimentation — from Firebase and Appwrite to AI-based pattern generation.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl">🎯</span>
                <h3 className="text-xl font-bold text-green-400">Consistency</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                I believe in showing up every day and making steady progress. Whether it's coding, debugging, or polishing UI, I strive for continuous improvement.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl">🛠️</span>
                <h3 className="text-xl font-bold text-purple-400">Ownership</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                From design to deployment, I take complete responsibility for my projects. I'm involved in every step — backend, frontend, and infrastructure.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl">🤝</span>
                <h3 className="text-xl font-bold text-cyan-400">Integrity</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                I aim to build applications that genuinely help users — like my learner app designed to reduce distractions and support focused studying.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl">🔄</span>
                <h3 className="text-xl font-bold text-yellow-400">Adaptability</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                I pick up new tools quickly and enjoy working across both frontend and backend environments — switching seamlessly between React, Node.js, Firebase, Appwrite, and MongoDB.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl">🚀</span>
                <h3 className="text-xl font-bold text-orange-400">Impact-Driven</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                I focus on building useful, scalable, and real-world applications that solve problems and deliver value to users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <div key={skillIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 px-6 py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Featured Projects</h2>
          
          {/* Project Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-4 bg-white/5 p-2 rounded-lg backdrop-blur-sm border border-white/10">
              {['all', 'web', 'mobile'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                    activeTab === tab 
                      ? 'bg-blue-500 text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab === 'all' ? 'All Projects' : tab === 'web' ? 'Web Apps' : 'Mobile Apps'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02] group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-purple-400 text-sm font-medium">{project.type}</p>
                    <p className="text-gray-400 text-xs mt-1">{project.date}</p>
                  </div>
                  <div className="flex space-x-2">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                      'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {project.status}
                    </div>
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
                  <div className="grid grid-cols-1 gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-3 rounded-lg border border-purple-500/20 mb-4">
                  <p className="text-sm text-gray-300">
                    <Zap className="w-4 h-4 inline mr-2 text-yellow-400" />
                    <strong>Highlight:</strong> {project.highlight}
                  </p>
                </div>

                {project.github && project.github !== '#' && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">View on GitHub</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-purple-400 font-medium">{edu.institution}</p>
                    <p className="text-gray-400 text-sm mt-1">{edu.duration}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">{edu.grade}</div>
                  </div>
                </div>
                <p className="text-gray-300">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="relative z-10 px-6 py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Languages</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {languages.map((lang, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold">{lang.name}</h3>
                  <span className="text-sm text-gray-400">{lang.level}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${lang.percentage}%` }}
                  ></div>
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
            {goals2025.map((goal, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                <Target className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300">{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 px-6 py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Build Something Amazing Together</h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always excited to collaborate on innovative projects and contribute to meaningful solutions. 
            Let's connect and create something extraordinary!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="mailto:shripadraccha5232@gmail.com"
              className="flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span className="font-semibold">shripadraccha5232@gmail.com</span>
            </a>
            <a 
              href="tel:+919561687911"
              className="flex items-center space-x-3 bg-white/10 px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">+91 9561687911</span>
            </a>
          </div>
          <div className="flex justify-center space-x-6 mt-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Shripad Raccha. Built with passion for innovation and excellence.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;