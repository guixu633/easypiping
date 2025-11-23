import { Mail, Phone, MapPin, User, Globe } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-12 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Have questions about our products or need a quote? Our team is ready to help you.
            Fill out the form or reach us directly through the channels below.
          </p>
          
          <div className="space-y-6">
            {/* Contact Person */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Contact Person</h3>
                <p className="text-gray-600 font-medium">Mr. Billy Ding</p>
                <p className="text-gray-600">Mobile: 86-13567200797</p>
              </div>
            </div>

            {/* Email & Skype */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Email & Skype</h3>
                <p className="text-gray-600">Email: billy@easypiping.com</p>
                <p className="text-gray-600">Skype: easypiping.billy</p>
              </div>
            </div>

            {/* Phone & Fax */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Tel & Fax</h3>
                <p className="text-gray-600">Tel: 86-575-88005580</p>
                <p className="text-gray-600">Fax: 86-575-85127987</p>
              </div>
            </div>

            {/* Office Address */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Office</h3>
                <p className="text-gray-600">
                  512#, B1 Building, Margaret Commercial Center<br />
                  Shaoxing, China<br />
                  Zip: 312000
                </p>
              </div>
            </div>

            {/* Online Presence */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Online</h3>
                <p className="text-gray-600">
                  Showroom: <a href="http://cnpipetool.en.alibaba.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">cnpipetool.en.alibaba.com</a>
                </p>
                <p className="text-gray-600">
                  Website: <a href="http://www.easypiping.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.easypiping.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 p-2"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 p-2"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 p-2"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
