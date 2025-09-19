import "./NotFoundPage.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function NotFoundPage() {
    return (
        <>
            <Navbar/>
            <main id="error-container">
                <h1>Error 404</h1>
                <img src="/images/error.jpg"/>
            </main>
            <Footer/>
        </>
    )
}