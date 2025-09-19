import "./Lightbox.css";

export default function Lightbox({
    closeLightbox
}: {
    closeLightbox: () => void
}) {
    const onCloseLightbox = () => {
        closeLightbox();
    }

    return (
        <div id="lightbox">
            <div className="container">
                <div id="header">
                    <div id="close" onClick={() => onCloseLightbox()}>&times;</div>
                </div>
                <div id="video-container">
                    <iframe
                        id="video"
                        src="https://player.vimeo.com/video/1041742649"
                        allow="fullscreen; clipboard-write; encrypted-media; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Christopher Hosken | Generalist TD">
                    </iframe>
                </div>
            </div>
        </div>
    );
}