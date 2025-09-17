import "./Navbar.css";

export default function Navbar() {
    return (
        <nav>
            <div id="logo-container">
                <a href="/index.html">
                    <img src="/favicon_white.svg" id="logo" alt="Christopher Hosken Logo"/>
                </a>
            </div>
            <div id="links">
                <a href="/index.html">Home</a>
                <a href="">Projects</a>
                <a href="">Contact</a>
            </div>
        </nav>
    )
}