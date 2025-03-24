import "./styles/CVAbout.css";

type AboutProps = {
  about: string;
};

const About = ({ about }: AboutProps) => {
  return (
    <section className="about" id="about">
      <h2 className="sectionTitle">PERSONAL INFO</h2>

      <div className="aboutContainer">
        <p>{about || "Ingen beskrivning har angetts än."}</p>
      </div>

      {/* <a href="Lägg in CV" className="aboutButton">
        Download CV{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z"></path>
        </svg>
      </a> */}

      {/* <ul className="aboutSocial">
        <li>
          <a
            href="https://github.com/Lamskidoski"
            target="_blank"
            className="aboutSocialLink"
          >
            GitHub
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/lamkys_/"
            target="_blank"
            className="aboutSocialLink"
          >
            Instagram
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/lam-ky-96ba191b5/"
            target="_blank"
            className="aboutSocialLink"
          >
            LinkedIn
          </a>
        </li>
      </ul> */}
    </section>
  );
};

export default About;
