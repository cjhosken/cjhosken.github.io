import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import "./Footer.css";
import { useEffect, useState } from "react";

export default function Footer() {
    const [isSmall, setIsSmall] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => setIsSmall(window.innerWidth <= 850);
        handleResize(); // run once
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <footer>
            <div className="container">
                <div id="links">
                    <p className="header"> Links </p>
                    <div className="list">
                        <a href="/index.html">Home</a>
                        <a href="">Projects</a>
                        <a href="">Contact</a>
                    </div>
                </div>
                <div id="socials">
                    <p className="header"> Socials </p>
                    <div className="list">
                        <a href="https://www.linkedin.com/in/christopher-hosken/" className="icon" target="_blank"><FaLinkedin/></a>
                        <a href="https://github.com/cjhosken" className="icon" target="_blank"><FaGithub/></a>
                        <a href="https://www.youtube.com/@cjhosken" className="icon" target="_blank"><FaYoutube/></a>
                    </div>
                </div>
                <div id="contact">
                    <p className="header"> Contact </p>
                    <div className="list">
                        <a href="mailto:hoskenchristopher@gmail.com">
                            {isSmall ? "Email" : "hoskenchristopher@gmail.com"}
                        </a>
                        <a href="tel:+447393979912">
                            {isSmall ? "Phone" : "(+44)7393979912"}
                        </a>
                        <a href="" target="_blank" download="ChristopherHosken_CurriculumVitae_2025.pdf">
                            {isSmall ? "CV" : "Download CV"}
                        </a>
                     </div>
                </div>
            </div>
            <p id="copyright">&copy; {new Date().getFullYear()} Christopher Hosken </p>
        </footer>
    )
}