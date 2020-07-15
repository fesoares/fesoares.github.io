export default function Education() {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex flex-column"
      id="education"
    >
      <div className="my-auto">
        <h2 className="mb-5">Education</h2>

        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">Fatec Sorocaba</h3>
            <div className="subheading mb-3">Systems analysis</div>
            <div>Analysis and systems development - Web Development Track</div>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">August 2016 - Present</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">Etec Fernando Prestes</h3>
            <div className="subheading mb-3">Web development</div>
            <div>
              Where I started my journey as a developer, I learned about website
              development and working with photoshop and illustrator.
            </div>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">August 2014 - December 2015</span>
          </div>
        </div>
      </div>
    </section>
  );
}
