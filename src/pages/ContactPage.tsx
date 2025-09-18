import "./ContactPage.css"
import { FaLocationPin } from "react-icons/fa6";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaDownload, FaMailBulk } from "react-icons/fa";

export default function ContactPage() {
    return (
        <>
            <Navbar/>
            <main>
                <div>
                    <img src=""/>
                </div>
                <div>
                    <div id="contact-container">
                        <a href="https://maps.app.goo.gl/MKvBbA925MdXYqBv9" target="_blank" className="contactInfo">
                            <FaLocationPin/>
                            <h1> Location </h1>
                            <p> Bournemouth, UK </p>
                        </a>
                        <a href="mailto:hoskenchristopher@gmail.com" target="_blank" className="contactInfo"> 
                            <FaMailBulk/>
                            <h1> Email </h1>
                            <p> hoskenchristopher@gmail.com </p>
                        </a>
                        <a href="/ChristopherHosken_CurriculumVitae_2025.pdf" target="_blank" className="contactInfo"> 
                            <FaDownload/>
                            <h1> Download CV</h1>
                            <p> Curriculum Vitae </p>
                        </a>
                    </div>
                    <div id="contact-form">
                        <input
                            placeholder="Your Email"
                        ></input>
                        <input
                            placeholder="Subject"
                        ></input>
                        <input
                            placeholder="Message"
                        ></input>
                        <button> Send </button>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}