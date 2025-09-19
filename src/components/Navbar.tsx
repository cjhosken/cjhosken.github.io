import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav>
            <div id="logo-container">
                <Link to="/">
                    <img src="/favicon_white.svg" id="logo" alt="Christopher Hosken Logo"/>
                </Link>
            </div>
            <div id="links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
}