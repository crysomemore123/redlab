import React from 'react';
import styles from './ContactSection.module.css'; // Import the new CSS module

const ContactSection = () => {
  // SVG paths for the social icons
  const icons = {
    facebook: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z",
    twitter: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>

        <header className={styles.header}>
          <h1 className={styles.title}>CONTACT</h1>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/redlabproductions/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg fill="currentColor" className={styles.icon} viewBox="0 0 24 24"><path d={icons.facebook}></path></svg>
            </a>
            <a href="https://x.com/akuninhamlet" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <svg fill="currentColor" className={styles.icon} viewBox="0 0 24 24"><path d={icons.twitter}></path></svg>
            </a>
            <a href="https://www.instagram.com/redlabproductions/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg fill="currentColor" className={styles.icon} viewBox="0 0 24 24"><path d={icons.instagram}></path></svg>
            </a>
          </div>
        </header>

        <div className={styles.formsGrid}>
          {/* Left Column: Contact Form */}
          <div className={styles.formColumn}>
            <form className={styles.form}>
              <input type="text" name="name" required placeholder="Name *" className={styles.inputField} />
              <input type="email" name="email" required placeholder="Email *" className={styles.inputField} />
              <input type="text" name="subject" placeholder="Subject" className={styles.inputField} />
              <textarea name="message" rows={6} placeholder="Message" className={`${styles.inputField} ${styles.textarea}`}></textarea>
              <button type="submit" className={styles.sendButton}>Send</button>
            </form>
          </div>

          {/* Right Column: Subscribe Form */}
          <div className={styles.formColumn}>
            <h2 className={styles.subscribeTitle}>Subscribe for updates</h2>
            <form className={styles.form}>
              <input type="text" name="subscribe-name" placeholder="Name" className={`${styles.inputField} ${styles.subscribeInput}`} />
              <input type="email" name="subscribe-email" required placeholder="Email Address" className={`${styles.inputField} ${styles.subscribeInput}`} />
              <button type="submit" className={styles.subscribeButton}>Subscribe Now</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactSection;
