import "./styles.css";

export default function Home() {
    return (
        <>
            <div className="video-container">
                <video autoPlay loop muted className="video">
                    <source src="public/video/hamburguer.mp4" type="video/mp4" />
                </video>
            </div>
        </>
    );
}
