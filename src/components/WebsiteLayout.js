import React, { useState, useEffect } from 'react';
import { ChevronDown, Network, Zap, Workflow, Code, BarChart3, Globe } from 'lucide-react';

const WebsiteLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <DesmondLogo size="medium" className={isScrolled ? 'scale-90' : ''} />
            <div className="hidden md:flex space-x-8">
              {['About', 'Services', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-lg font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern" />
        </div>
        <div className="container mx-auto px-6 text-white relative">
          <h1 className="text-6xl font-bold mb-6 opacity-0 animate-fadeIn">DESMOND Labs</h1>
          <p className="text-2xl mb-8 opacity-0 animate-fadeIn animation-delay-200">
            Data Ecosystem Solutions for Modernizing Organizational Network Discovery
          </p>
          <p className="text-xl font-light opacity-0 animate-fadeIn animation-delay-400">
            Connecting Data. Creating Clarity.
          </p>
          <ChevronDown className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-12 animate-bounce" />
        </div>
      </header>

      {/* Core Principles Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Core Principles</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Network,
                title: 'Everything Connected',
                description: 'Holistic approach to data challenges',
                color: 'blue'
              },
              {
                icon: Zap,
                title: 'Déja Résolu',
                description: 'Pattern recognition in solution development',
                color: 'purple'
              },
              {
                icon: Workflow,
                title: 'Magical Outcome Engineering',
                description: 'Working backwards from ideal results',
                color: 'indigo'
              }
            ].map(({ icon: Icon, title, description, color }) => (
              <div
                key={title}
                className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-16 h-16 mb-6 rounded-lg bg-${color}-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 text-${color}-600`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Code,
                title: 'Knowledge Architecture',
                items: ['Discoverable knowledge platforms', 'Ontology-based knowledge graphs', 'Custom API integration']
              },
              {
                icon: BarChart3,
                title: 'Data Strategy',
                items: ['Data visualization systems', 'Interactive dashboards', 'Process workflow mapping']
              },
              {
                icon: Globe,
                title: 'Systems Integration',
                items: ['Ecosystem mapping', 'Cross-system data fusion', 'Enterprise-wide solutions']
              }
            ].map(({ icon: Icon, title, items }) => (
              <div
                key={title}
                className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <Icon className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-6">{title}</h3>
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li key={item} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <DesmondLogo size="medium" className="mb-6" />
              <p className="text-gray-400">Connecting Data. Creating Clarity.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400">info@desmondlabs.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-6">
                {['LinkedIn', 'Twitter', 'GitHub'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WebsiteLayout;