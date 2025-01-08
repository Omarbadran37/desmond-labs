import React from 'react';
import { ChevronDown, Zap, Network, Code, BarChart3, Workflow } from 'lucide-react';

const WebsiteLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">DESMOND Labs</h1>
          <p className="text-xl mb-8">Data Ecosystem Solutions for Modernizing Organizational Network Discovery</p>
          <p className="text-2xl font-light">Connecting Data. Creating Clarity.</p>
          <ChevronDown className="mt-8 w-8 h-8 animate-bounce" />
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                At DESMOND Labs, we believe in the power of connected data ecosystems to transform organizations. Born from the understanding that breakthrough solutions emerge from recognizing patterns and connecting existing knowledge in novel ways, we specialize in making complex data systems discoverable, actionable, and human-centered.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Our Core Principles</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Network className="w-6 h-6 mr-2 text-blue-600" />
                  <div>
                    <span className="font-bold">Everything Connected</span>
                    <p className="text-sm text-gray-600">Holistic approach to data challenges</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap className="w-6 h-6 mr-2 text-blue-600" />
                  <div>
                    <span className="font-bold">Déja Résolu</span>
                    <p className="text-sm text-gray-600">Pattern recognition in solution development</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Workflow className="w-6 h-6 mr-2 text-blue-600" />
                  <div>
                    <span className="font-bold">Magical Outcome Engineering</span>
                    <p className="text-sm text-gray-600">Working backwards from ideal results</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Code className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Knowledge Architecture</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Discoverable knowledge platforms</li>
                <li>Ontology-based knowledge graphs</li>
                <li>Custom API integration</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <BarChart3 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Data Strategy</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Data visualization systems</li>
                <li>Interactive dashboards</li>
                <li>Process workflow mapping</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Network className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Systems Integration</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Ecosystem mapping</li>
                <li>Cross-system data fusion</li>
                <li>Enterprise-wide solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2" rows="4"></textarea>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">DESMOND Labs</h3>
              <p className="text-gray-400">Connecting Data. Creating Clarity.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400">info@desmondlabs.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WebsiteLayout;