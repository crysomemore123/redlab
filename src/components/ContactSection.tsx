// src/components/ContactSection.tsx
import React from 'react';
// Make sure you have react-icons installed: npm install react-icons
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
  return (
    // Container to center content, set max-width, and add vertical padding for spacing.
    // Adjust max-w-5xl (1024px) if needed to match the target site's content width more closely.
    <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">

      {/* Main white content block that holds the black bar and the form grid. */}
      {/* Added a subtle shadow to lift it off the page slightly, can be removed if not desired. */}
      <div className="bg-white shadow-md">

        {/* Top Black Bar: CONTACT Title and Social Icons */}
        <div className="bg-black text-white px-6 py-4 sm:px-8 flex justify-between items-center">
          {/* Use font-heading for Oswald, make it bold and uppercase. */}
          {/* Tracking-tight makes letter spacing a bit closer, similar to target. */}
          <h1 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight">
            CONTACT
          </h1>
          <div className="flex space-x-3 sm:space-x-4">
            {/* Replace YOUR_..._LINK with actual URLs */}
            <a href="YOUR_FACEBOOK_LINK" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-gray-300 transition-colors duration-150">
              <FaFacebookF size={18} />
            </a>
            <a href="YOUR_TWITTER_LINK" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white hover:text-gray-300 transition-colors duration-150">
              <FaTwitter size={18} />
            </a>
            <a href="YOUR_INSTAGRAM_LINK" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-gray-300 transition-colors duration-150">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* Forms Section - Grid Layout. Padding inside the white block. */}
        {/* Increased gap-x to give more space between the two columns. */}
        <div className="px-6 py-8 sm:px-10 sm:py-10 grid md:grid-cols-3 gap-x-12 lg:gap-x-16">

          {/* == Contact Form (Left - takes 2/3 width on md screens) == */}
          <div className="md:col-span-2">
            <form action="#" method="POST"> {/* Remember to add form handling logic */}
              <div className="space-y-5">
                <div>
                  {/* Labels will use font-sans (Roboto) by default. font-medium gives a bit more weight. */}
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name <span className="text-red-600">*</span></label>
                  {/* Inputs: gray border, taller padding, no rounded corners. Focus style for better UX. */}
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    required
                    className="mt-1 block w-full px-3 py-3 border border-gray-400 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email <span className="text-red-600">*</span></label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    className="mt-1 block w-full px-3 py-3 border border-gray-400 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="mt-1 block w-full px-3 py-3 border border-gray-400 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6} // Adjusted rows for a taller message box
                    className="mt-1 block w-full px-3 py-3 border border-gray-400 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  ></textarea>
                </div>
              </div>
              <div className="mt-6">
                {/* Button: Use font-heading (Oswald), red background, white text, uppercase, specific padding. */}
                {/* Target button text is bold. */}
                <button
                  type="submit"
                  className="font-heading inline-flex items-center justify-center px-7 py-2.5 border border-transparent text-sm font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Send
                </button>
              </div>
            </form>
          </div>

          {/* == Subscribe Section (Right - takes 1/3 width on md screens) == */}
          {/* This column has a black background and white text. */}
          <div className="md:col-span-1 bg-black p-6 sm:p-8 text-white mt-8 md:mt-0">
            {/* Title: Use font-heading (Oswald), bold, uppercase. */}
            <h2 className="font-heading text-xl sm:text-2xl font-bold mb-6 text-left uppercase tracking-tight">
                Subscribe for updates
            </h2>
            <form action="#" method="POST"> {/* Remember to add form handling logic */}
              <div className="space-y-5">
                <div>
                  {/* Labels for dark background. font-normal makes them less prominent than form labels. */}
                  <label htmlFor="sub-name" className="block text-sm font-normal text-gray-300">Name</label>
                  {/* Inputs: Darker background, lighter border, white text, no rounded corners. */}
                  <input
                    type="text"
                    name="sub-name"
                    id="sub-name"
                    autoComplete="name"
                    className="mt-1 block w-full px-3 py-3 bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="sub-email" className="block text-sm font-normal text-gray-300">Email Address</label>
                  <input
                    type="email"
                    name="sub-email"
                    id="sub-email"
                    autoComplete="email"
                    required
                    className="mt-1 block w-full px-3 py-3 bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm placeholder-gray-400"
                  />
                </div>
              </div>
              <div className="mt-8 text-left">
                {/* Button: Use font-heading (Oswald), full width, red background, white text, uppercase. */}
                <button
                  type="submit"
                  className="font-heading w-full inline-flex items-center justify-center px-8 py-2.5 border border-transparent text-sm font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Subscribe Now
                </button>
              </div>
            </form>
          </div>
        </div> {/* End of grid */}
      </div> {/* End of bg-white main content block */}
    </div> // End of container
  );
};

export default ContactSection;
