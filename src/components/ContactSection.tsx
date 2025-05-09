import React from 'react';

// It's highly recommended to use an icon library like react-icons
// For example: import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
  return (
    // The parent container for this section.
    // The light grey background seen in your screenshot (image_76a368.png)
    // would typically be the background of the page or a larger container
    // this component is placed in. If this section itself needs that
    // specific background, you can add it here e.g., bg-gray-100
    <div className="py-8 px-4 sm:px-6 lg:px-8"> {/* Adjust padding as needed */}
      <div className="max-w-6xl mx-auto"> {/* To constrain width and center */}

        {/* Header Section: CONTACT title and Social Icons */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold bg-black text-red-600 py-2 px-4 inline-block">
            {/* Adjusted text color to match screenshot image_76a368.png */}
            CONTACT
          </h1>
          <div className="flex space-x-3 items-center">
            {/* Replace placeholders with actual icon components */}
            <a
              href="https://facebook.com" // Replace with actual link
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-black hover:text-gray-700"
            >
              {/* Placeholder: Use an actual SVG or icon component */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0 0 3.603 0 8.049c0 4.141 3.054 7.603 7.017 7.995v-5.665H4.955V8.05h2.062V6.287c0-2.046 1.225-3.178 3.084-3.178.885 0 1.802.157 1.802.157v2.03h-1.006c-.996 0-1.308.622-1.308 1.256v1.543h2.259l-.356 2.33H9.017v5.665C12.946 15.652 16 12.19 16 8.049z"/>
              </svg>
              {/* Example with react-icons: <FaFacebookF size={20} /> */}
            </a>
            <a
              href="https://twitter.com" // Replace with actual link
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-black hover:text-gray-700"
            >
              {/* Placeholder: Use an actual SVG or icon component */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 5.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
              </svg>
              {/* Example with react-icons: <FaTwitter size={20} /> */}
            </a>
            <a
              href="https://instagram.com" // Replace with actual link
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-black hover:text-gray-700"
            >
              {/* Placeholder: Use an actual SVG or icon component */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.002zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.282.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.275-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.884a1.151 1.151 0 1 0 0-2.3 1.151 1.151 0 0 0 0 2.3zM8 4.884c-1.735 0-3.128 1.393-3.128 3.116S6.265 11.116 8 11.116s3.128-1.393 3.128-3.116S9.735 4.884 8 4.884zm0 5.089c-.961 0-1.739-.778-1.739-1.739S7.039 6.5 8 6.5s1.739.778 1.739 1.739S8.961 9.973 8 9.973z"/>
              </svg>
              {/* Example with react-icons: <FaInstagram size={20} /> */}
            </a>
          </div>
        </div>

        {/* Forms Section - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10"> {/* Adjusted gap for closer match to screenshot */}

          {/* Left Column: Contact Form */}
          <div className="w-full">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Name *</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Name *"
                  className="mt-1 block w-full px-3 py-2.5 border border-black focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm placeholder-gray-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email *</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Email *"
                  className="mt-1 block w-full px-3 py-2.5 border border-black focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm placeholder-gray-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  className="mt-1 block w-full px-3 py-2.5 border border-black focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm placeholder-gray-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={6} // Adjusted rows to better match screenshot
                  placeholder="Message"
                  className="mt-1 block w-full px-3 py-2.5 border border-black focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm placeholder-gray-500 resize-none" // Added resize-none
                ></textarea>
              </div>
              <div className="flex justify-start"> {/* Changed to flex justify-start to align button to left */}
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Send
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Subscribe Form */}
          <div className="w-full">
            <h2 className="text-lg font-semibold text-black mb-4"> {/* Adjusted text color to black */}
              Subscribe for updates
            </h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="subscribe-name" className="sr-only">Name</label>
                <input
                  type="text"
                  name="subscribe-name"
                  id="subscribe-name"
                  placeholder="Name"
                  className="mt-1 block w-full px-4 py-3 bg-black text-white border border-black placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="subscribe-email" className="sr-only">Email Address</label>
                <input
                  type="email"
                  name="subscribe-email"
                  id="subscribe-email"
                  required
                  placeholder="Email Address"
                  className="mt-1 block w-full px-4 py-3 bg-black text-white border border-black placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Subscribe Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;