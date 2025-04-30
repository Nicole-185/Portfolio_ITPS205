export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Jeanne Nicole Gianan</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">IT</span>{" "}
              <br />
              STUDENT
            </h1>
            <p className="hero--section-description">
              Aspiring to be a web Developer.
              <br /> Welcome to my portfolio created together with chatgpt.
            </p>
          </div>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
          <img src="./img/pic1.png" alt="Hero Section" />
        </div>
      </section>
    );
  }