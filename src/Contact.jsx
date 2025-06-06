import './Contact.css';
export default function Contact() {
  return (
    <section className="contact">
      <h2>📬 Get in Touch</h2>
      <p>Feel free to reach out for opportunities, collaborations, or just to say hello!</p>

      <div className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message..." rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <p><strong>Email:</strong> <a href="mailto:saadayinas9322@gmail.com">saadayinas9322@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+918542929798">+91-8542929798</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/mohammadsaad79/" target="_blank" rel="noreferrer">linkedin.com/in/mohammadsaad79</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/mohammad-saad-79" target="_blank" rel="noreferrer">github.com/mohammad-saad-79</a></p>
        </div>
      </div>
    </section>
  );
}
