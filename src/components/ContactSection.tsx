import React from 'react';

// For the icons, it's best to use a library like react-icons.
// To install it, run: npm install react-icons
// Then you can uncomment the line below and the icon components.
// import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
  return (
    // This outer container centers the entire content block on the page
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* This is the main content block with the light grey background */}
      <div className="bg-gray-100 p-8 sm:p-12">

        {/* Header Section: "CONTACT" title and Social Icons */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold bg-black text-red-600 py-2 px-4 inline-block">
            CONTACT
          </h1>
          <div className="flex space-x-4 items-center">
            <a href="#" aria-label="Facebook" className="text-black hover:text-gray-700">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"></path></svg>
            </a>
            <a href="#" aria-label="Twitter" className="text-black hover:text-gray-700">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.584-.666 2.502 0 1.595.812 2.994 2.047 3.816-.754-.024-1.464-.23-2.086-.575v.072c0 2.226 1.584 4.082 3.682 4.503-.384.104-.79.16-1.206.16-.296 0-.582-.028-.858-.081.585 1.825 2.282 3.153 4.293 3.19-1.573 1.232-3.564 1.962-5.73 1.962-.372 0-.738-.022-1.1-.065 2.032 1.306 4.456 2.072 7.03 2.072 8.428 0 13.028-6.985 12.728-13.053.894-.645 1.669-1.453 2.285-2.37z"></path></svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-black hover:text-gray-700">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"></path></svg>
            </a>
          </div>
        </div>

        {/* Forms Section - using a 2-column grid on medium screens and up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16">
            {/* ... (The rest of the form code is the same as the last version and is correct) ... */}
            {/* Left Column: Contact Form */}
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Name *</label>
                  <input type="text" name="name" id="name" required placeholder="Name *" className="mt-1 block w-full px-3 py-3 bg-white border border-black focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm"/>
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email *</label>
                  <input type="email" name="email" id="email" required placeholder="Email *" className="mt-1 block w-full px-3 py-3 bg-white border border-black focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm"/>
                </div>
                <div>
                  <label htmlFor="subject" className="sr-only">Subject</label>
                  <input type="text" name="subject" id="subject" placeholder="Subject" className="mt-1 block w-full px-3 py-3 bg-white border border-black focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm"/>
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea name="message" id="message" rows={6} placeholder="Message" className="mt-1 block w-full px-3 py-3 bg-white border border-black focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm resize-none"></textarea>
                </div>
                <div className="flex justify-start">
                  <button type="submit" className="inline-flex justify-center py-2 px-6 border border-transparent text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none">Send</button>
                </div>
              </form>
            </div>
            {/* Right Column: Subscribe Form */}
            <div>
              <h2 className="text-lg font-semibold text-black mb-4">Subscribe for updates</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="subscribe-name" className="sr-only">Name</label>
                  <input type="text" name="subscribe-name" id="subscribe-name" placeholder="Name" className="mt-1 block w-full px-4 py-3 bg-black text-white border border-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm"/>
                </div>
                <div>
                  <label htmlFor="subscribe-email" className="sr-only">Email Address</label>
                  <input type="email" name="subscribe-email" id="subscribe-email" required placeholder="Email Address" className="mt-1 block w-full px-4 py-3 bg-black text-white border border-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm"/>
                </div>
                <div>
                  <button type="submit" className="w-full inline-flex justify-center py-3 px-4 border border-transparent text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none">Subscribe Now</button>
                </div>
              </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;