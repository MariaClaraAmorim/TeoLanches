
import "./styles.css"

export default function Location() {
    const contact = '(77)99952-5284';
    const openingHours = 'Todos os dias: 18:00 - 22:30';
    const location = 'R. Padre Afonso, Barreirinhas';
    const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!4v1713276595666!6m8!1m7!1svG1br6Rw-eGsjsXkxW-DVg!2m2!1d-12.14153126871203!2d-45.00865470215606!3f138.72!4f-21.430000000000007!5f0.4000000000000002';

    return (
        <>
            <section>
                <div className="cardLocation">
                    <p className="card-location">
                        <strong>
                            Contato:
                        </strong>
                        {contact}
                    </p>
                    <p className="card-location">
                        <strong>
                            Funcionamento:
                        </strong>{openingHours}
                    </p>

                    <p className="card-location">
                        <strong>
                            Endereço:
                        </strong>
                        {location}
                    </p>
                    <div className="card-img-holder">
                        <iframe
                            title="Localização no Mapa"
                            src={mapEmbedUrl}
                            width="100%"
                            height="300"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            aria-hidden="false"
                            tabIndex={0}
                        ></iframe>
                    </div>
                </div>
            </section>
        </>
    )
}