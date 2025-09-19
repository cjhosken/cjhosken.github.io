import "./ContactPage.css";
import { FaLocationPin } from "react-icons/fa6";
import { FaDownload, FaMailBulk } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sendLabel, setSendLabel] = useState("Send");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendLabel("Sending...");

    // Create subject dynamically
    const subject = `${formData.name || "Someone"} | ${formData.subject}`;

    const payload = {
      access_key: "d26e944b-e198-429e-9d3e-f191f2589f9b",
      from_name: "cjhosken.github.io",
      subject,
      ...formData,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.status === 200) {
        setSendLabel("Sent!")
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSendLabel("Failed to send, please try again.")
      }
    } catch (err) {
      console.error(err);
      setSendLabel("Failed to send, please try again.")
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <img className="pageBanner" src="/images/contact.gif" alt="Contact banner" />
        <div id="contact">
          <div id="contact-container">
            <a
              href="https://maps.app.goo.gl/MKvBbA925MdXYqBv9"
              target="_blank"
              rel="noopener noreferrer"
              className="contactInfo"
            >
              <FaLocationPin />
              <h1> Location </h1>
              <p> Bournemouth, UK </p>
            </a>
            <a
              href="mailto:hoskenchristopher@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contactInfo"
            >
              <FaMailBulk />
              <h1> Email </h1>
              <p> hoskenchristopher@gmail.com </p>
            </a>
            <a
              href="/ChristopherHosken_CurriculumVitae_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="contactInfo"
            >
              <FaDownload />
              <h1> Download CV</h1>
              <p> Curriculum Vitae </p>
            </a>
          </div>

          {/* Contact Form */}
          <form id="contact-form" onSubmit={handleSubmit}>
            <h2> Get in Touch! </h2>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Regarding..."
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
              rows={5}
              required
            />

            <button type="submit">
              {sendLabel}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
