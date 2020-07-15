export default function About() {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
      <div className="my-auto">
        <h1 className="mb-0">
          Felipe <span className="text-primary">Soares</span>
        </h1>
        <div className="subheading mb-5">
          Sorocaba · São Paulo, CEP 18077-080 · (15) 99801-8584 · 
          <a href="mailto:felipe4dev@gmail.com">felipe4dev@gmail.com</a>
        </div>
        <p className="mb-3">
          I am a lover and enthusiast of new technologies, I am very interested
          in new learning and new knowledge. Very interactive with the people
          around me always looking for a good environment and better solutions
          in development.
        </p>
        <p className="mb-5">
          I love making coffee in the morning and checking my email list before
          social networking.
        </p>
        <ul className="list-inline list-social-icons mb-0">
          <li className="list-inline-item">
            <a
              href="https://www.facebook.com/felipe.soares.921025"
              target="_blank"
            >
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://www.linkedin.com/in/felipe-soares-0a4244115/"
              target="_blank"
            >
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fab fa-linkedin fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://github.com/fesoares" target="_blank">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fab fa-github-alt fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
