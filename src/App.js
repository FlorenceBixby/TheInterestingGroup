import React, { useState, useEffect } from 'react';
import { Home, Briefcase, Info, Mail, Phone, MapPin, ChevronUp } from 'lucide-react'; // Using lucide-react for icons

// Data for categories and solutions
const categoriesData = [
  {
    id: 'sd-wan',
    name: 'SD WAN',
    description: 'Optimize your network performance and reliability with our cutting-edge SD WAN solutions, ensuring seamless connectivity and efficient data flow across your infrastructure.',
    solutions: [
      'Automatic Failover', 'Link Aggregation', 'TCP/IP Optimization',
      'Application Acceleration', 'Active-Active Failover', 'Proactive Monitoring & Ticketing',
      'Cloud Based Routing', 'Premise Based Routing', 'Virtual IP',
      'Network Aggregation', 'SASE'
    ]
  },
  {
    id: 'contact-center-cx',
    name: 'Contact Center & CX',
    description: 'Enhance customer interactions and streamline operations with our comprehensive Contact Center & CX solutions, designed to deliver superior customer experiences.',
    solutions: [
      'Analytics & Reporting', 'Custom Dashboards', 'CRM Integration',
      'Omni-channel', 'IVR', 'Call Recording', 'Live Chat, Chat Bot',
      'Call Routing', 'Outbound Dialer', 'WFO/WFM/WEM',
      'Performance Management', 'Supervisor Alerts', 'Transcription Services'
    ]
  },
  {
    id: 'network-voice',
    name: 'Network & Voice',
    description: 'Build a robust and reliable communication backbone with our Network & Voice services, ensuring high-speed data transfer and crystal-clear voice quality.',
    solutions: [
      'DATA: Internet Access', 'DATA: Point 2 Points', 'DATA: PLS',
      'DATA: International Data', 'DATA: ISP Aggregation', 'DATA: MPLS, VPN',
      'VOICE: POTS', 'VOICE: SIP Trunking', 'VOICE: PRI',
      'ACCESS TYPES: Fiber', 'ACCESS TYPES: Fixed Wireless', 'ACCESS TYPES: Coax',
      'ACCESS TYPES: DSL', 'ACCESS TYPES: T1', 'ACCESS TYPES: 3g/4g/5g'
    ]
  },
  {
    id: 'cloud-compute',
    name: 'Cloud Compute',
    description: 'Leverage the power of the cloud with our Cloud Compute solutions, offering scalable, secure, and flexible infrastructure to meet your business demands.',
    solutions: [
      'INFRASTRUCTURE: Colocation', 'INFRASTRUCTURE: Virtual Data Centers',
      'INFRASTRUCTURE: Public Cloud', 'INFRASTRUCTURE: Private Cloud',
      'INFRASTRUCTURE: Hybrid Cloud', 'INFRASTRUCTURE: Managed Cloud (Azure, AWS,BM, etc.)',
      'INFRASTRUCTURE: Direct Connect', 'INFRASTRUCTURE: Cloud Security', 'INFRASTRUCTURE: Storage Encryption',
      'CONTINUITY: Cloud Backup', 'CONTINUITY: Cloud Storage', 'CONTINUITY: Disaster Recovery',
      'CONTINUITY: Virtual Desktop, DaaS', 'CONTINUITY: Content Delivery Network (CDN)'
    ]
  },
  {
    id: 'cybersecurity-secaas',
    name: 'Cybersecurity & SECaaS',
    description: 'Protect your valuable assets with our comprehensive Cybersecurity & SECaaS offerings, providing advanced threat detection and robust defense mechanisms.',
    solutions: [
      'IDENTIFY: Virtual CISO', 'IDENTIFY: Cyber Consulting', 'IDENTIFY: Vulnerability Assess.',
      'IDENTIFY: Penetration Testing', 'IDENTIFY: Compliance', 'IDENTIFY: Phishing Simulation',
      'IDENTIFY: Awareness Training',
      'PROTECT: Managed Firewall', 'PROTECT: Web Security', 'PROTECT: Email Security',
      'PROTECT: Endpoint Protection', 'PROTECT: Managed Cloud FW', 'PROTECT: Data Protection',
      'PROTECT: Zero-Trust Framework', 'PROTECT: Remote User VPN', 'PROTECT: Patch Management',
      'PROTECT: Circuit Monitoring', 'PROTECT: SIEM', 'PROTECT: SASE', 'PROTECT: VPNDDoS Mitigation',
      'DETECT: Log Mgmt (SEIM)', 'DETECT: AI Machine Learning', 'DETECT: Intrusion Detection',
      'DETECT: Intrusion Prevention', 'DETECT: SOC as a Service',
      'RESPOND: Incident Response', 'RESPOND: Containment / Eradication / Restore', 'RESPOND: MDR'
    ]
  },
  {
    id: 'uc-collaboration',
    name: 'UC & Collaboration',
    description: 'Foster seamless communication and teamwork with our UC & Collaboration solutions, empowering your workforce with integrated tools for productivity.',
    solutions: [
      'Hosted Voice', 'Video Conferencing (Zoom, etc.)', 'Meeting Services',
      'Instant Messaging', 'File Share', 'SMS, MMS', 'Fax-to-Email',
      'eFax', 'Standalone Applications', 'Application Integration', 'Chat'
    ]
  },
  {
    id: 'managed-services',
    name: 'Managed Services',
    description: 'Offload your IT burden with our Managed Services, ensuring your systems are always running smoothly, securely, and efficiently.',
    solutions: [
      'Hosted Email', 'Managed Wi-Fi', 'Office 365 Licenses',
      'Security Chain of Custody', 'Information Lifecycle Management',
      'Cloud Migration', 'Office 365 Management', 'Expense Management',
      'Helpdesk, IT Support', 'Accounts Receivable Management', 'Network Monitoring',
      'Trouble Ticketing', 'Cloud Readiness Assessments', 'Project Management',
      'Network Operations Center (NOC)'
    ]
  },
  {
    id: 'mobility-iot',
    name: 'Mobility & IoT',
    description: 'Connect and innovate with our Mobility & IoT solutions, enabling smart devices and mobile connectivity to transform your operations.',
    solutions: [
      'DATA & VOICE: Wireless Voice', 'DATA & VOICE: 3G, 4G, 5G',
      'DATA & VOICE: Handsets, Devices', 'DATA & VOICE: SIM Cards',
      'DATA & VOICE: Wireless Backup and Failover', 'DATA & VOICE: Mobile Device Management',
      'ANALYTICS: Machine Learning, AI', 'ANALYTICS: Thermal Imaging',
      'ANALYTICS: PPE & Occupancy Detection', 'ANALYTICS: Environmental Monitoring',
      'ANALYTICS: Wireless TEM', 'ANALYTICS: Internet of Things (IOT)',
      'ANALYTICS: Dashboards', 'ANALYTICS: Sensors', 'ANALYTICS: App integration'
    ]
  }
];

const App = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Effect to handle scroll event for "scroll to top" button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to a specific section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-inter antialiased text-gray-300 bg-black"> {/* Changed overall text and background color */}
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 shadow-lg py-4 px-6 md:px-12 rounded-b-lg"> {/* Changed header background */}
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-white"> {/* Changed logo color */}
            The Interesting Group
          </div>
          <ul className="flex space-x-6">
            <li>
              <button
                onClick={() => scrollToSection('home')}
                className="flex items-center text-gray-400 hover:text-white font-medium transition duration-300 ease-in-out"
              >
                <Home className="mr-1" size={18} /> Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="flex items-center text-gray-400 hover:text-white font-medium transition duration-300 ease-in-out"
              >
                <Briefcase className="mr-1" size={18} /> Portfolio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="flex items-center text-gray-400 hover:text-white font-medium transition duration-300 ease-in-out"
              >
                <Info className="mr-1" size={18} /> About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center text-gray-400 hover:text-white font-medium transition duration-300 ease-in-out"
              >
                <Mail className="mr-1" size={18} /> Contact
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section (Home) */}
      <section id="home" className="relative bg-gradient-to-br from-gray-800 to-black text-white py-32 md:py-48 flex items-center justify-center min-h-screen-minus-header rounded-b-xl shadow-lg"> {/* Changed gradient colors */}
        <div className="text-center max-w-4xl px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Innovate. Connect. Secure.
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 animate-fade-in-up delay-200">
            Your trusted partner for comprehensive technology solutions.
          </p>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up delay-400" // Changed button colors
          >
            Explore Our Solutions
          </button>
        </div>
      </section>

      {/* Categories Section (Home) */}
      <section className="py-20 bg-gray-900 rounded-lg" id="categories"> {/* Changed background color */}
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Our Core Expertise</h2> {/* Changed heading color */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categoriesData.map((category) => (
              <div
                key={category.id}
                className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2 border border-gray-700" // Changed card background and border
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{category.name}</h3> {/* Changed heading color */}
                <p className="text-gray-300 leading-relaxed"> {/* Changed text color */}
                  {category.description}
                </p>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="mt-6 text-white hover:text-gray-200 font-medium flex items-center transition duration-300 ease-in-out" // Changed link color
                >
                  Learn More <span className="ml-2">&#8594;</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-black rounded-lg"> {/* Changed background color */}
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Our Comprehensive Solutions</h2> {/* Changed heading color */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categoriesData.map((category) => (
              <div
                key={category.id}
                className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700" // Changed card background and border
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{category.name}</h3> {/* Changed heading color */}
                <ul className="list-disc list-inside text-gray-300 space-y-2"> {/* Changed text color */}
                  {category.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-white mr-2">&#8226;</span> {solution} {/* Changed bullet color */}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-900 rounded-lg"> {/* Changed background color */}
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">About The Interesting Group</h2> {/* Changed heading color */}
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6"> {/* Changed text color */}
            Founded in the heart of Buda, Texas, The Interesting Group is dedicated to empowering businesses with cutting-edge technology solutions. We specialize in transforming complex challenges into seamless operational efficiencies, ensuring our clients stay ahead in a rapidly evolving digital landscape.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto"> {/* Changed text color */}
            Our team of experts brings a wealth of experience across various domains, from robust network infrastructure and advanced cybersecurity to innovative cloud computing and collaborative communication tools. We pride ourselves on delivering tailored strategies and unparalleled support, fostering long-term partnerships built on trust and results.
          </p>
        </div>
      </section>

      {/* Contact Us Form */}
      <section id="contact" className="py-20 bg-black text-white rounded-lg"> {/* Changed background color */}
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">Get In Touch</h2>
          <p className="text-lg text-center mb-8">
            Have a question or need a custom solution? Fill out the form below, and we'll get back to you promptly.
          </p>
          <form
            action="mailto:info@theinterestinggoup.com"
            method="POST"
            encType="text/plain"
            className="bg-gray-800 p-8 rounded-xl shadow-2xl text-gray-200" // Changed form background and text color
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2"> {/* Changed label color */}
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-white bg-gray-700 transition duration-200" // Changed input styles
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2"> {/* Changed label color */}
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-white bg-gray-700 transition duration-200" // Changed input styles
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-300 text-sm font-bold mb-2"> {/* Changed label color */}
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="shadow appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-white bg-gray-700 transition duration-200" // Changed input styles
                placeholder="Regarding your services..."
                required
              />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2"> {/* Changed label color */}
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="shadow appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-white bg-gray-700 transition duration-200" // Changed input styles
                placeholder="Tell us about your needs..."
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-white hover:bg-gray-200 text-gray-900 font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105 shadow-lg" // Changed button colors
              >
                Send Message
              </button>
            </div>
          </form>
          <p className="text-sm text-center mt-6 opacity-80">
            Note: This form will open your default email client to send the message.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-12 rounded-t-lg"> {/* Changed footer background */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">The Interesting Group</h4> {/* Changed heading color */}
            <p className="text-gray-400 mb-2">
              <MapPin size={16} className="inline-block mr-2" /> Buda, Texas
            </p>
            <p className="text-gray-400 mb-2">
              <Mail size={16} className="inline-block mr-2" /> info@theinterestinggoup.com
            </p>
            <p className="text-gray-400">
              <Phone size={16} className="inline-block mr-2" /> (XXX) XXX-XXXX
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4> {/* Changed heading color */}
            <ul>
              <li className="mb-2">
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white transition duration-300">Home</button>
              </li>
              <li className="mb-2">
                <button onClick={() => scrollToSection('portfolio')} className="text-gray-400 hover:text-white transition duration-300">Portfolio</button>
              </li>
              <li className="mb-2">
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition duration-300">About Us</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition duration-300">Contact Us</button>
              </li>
            </ul>
          </div>

          {/* Copyright */}
          <div className="md:col-span-1 flex flex-col justify-between items-center md:items-end">
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} The Interesting Group. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={() => scrollToSection('home')}
          className="fixed bottom-8 right-8 bg-white text-gray-900 p-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white" // Changed button colors
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}

      {/* Custom styles for smooth animations (can be included in a CSS file or <style> tag) */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        body {
          font-family: 'Inter', sans-serif;
        }

        .min-h-screen-minus-header {
          min-height: calc(100vh - 80px); /* Adjust based on header height */
          padding-top: 80px; /* Offset for fixed header */
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        `}
      </style>
    </div>
  );
};

export default App;
