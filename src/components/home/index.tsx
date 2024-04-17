import "./styles.css";
import Video from "../../../public/assets/video/Hamburguer.mp4"

export default function Home() {
    return (
        <>
            <section className="video-container">
                <video autoPlay loop muted className="video">
                    <source src={Video} type="video/mp4" />
                </video>
            </section>
        </>
    );
}