import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div id="links">
                    <a href="/index.html">Home</a>
                    <a href="">Projects</a>
                    <a href="">Contact</a>
                </div>
                <div id="socials">
                    <a href="https://www.linkedin.com/in/christopher-hosken/" className="icon"><FaLinkedin/></a>
                    <a href="https://github.com/cjhosken" className="icon"><FaGithub/></a>
                    <a href="https://www.youtube.com/@cjhosken" className="icon"><FaYoutube/></a>
                </div>
                <div id="contact">
                    <a href="mailto:hoskenchristopher@gmail.com">hoskenchristopher@gmail.com</a>
                    <a href="tel:+447393979912">(+44)7393979912</a>
                    <a href="" target="_blank" download="ChristopherHosken_CurriculumVitae_2025.pdf">Download Curriculum Vitae (CV)</a>
                </div>
            </div>
            <p id="copyright">&copy; {new Date().getFullYear()} Christopher Hosken </p>
        </footer>
    )
}