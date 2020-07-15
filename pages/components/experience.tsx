export default function Experience() {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex flex-column"
      id="experience"
    >
      <div className="my-auto">
        <h2 className="mb-5">Experience</h2>

        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">Junior/Middle Web Developer</h3>
            <div className="subheading mb-3">Alphacode IT Solutions</div>
            <p>
              This is my first company, it was here that I started my career as
              a developer. It was a very young company and with this we learned
              a lot not only about development but also coexistence,
              responsibility and quality in what we produce. I joined the web
              development team and, over time, migrated to the construction of
              applications and APIs.
            </p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">May 2016 - June 2019</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">ReactJs Developer</h3>
            <div className="subheading mb-3">elemen.to</div>
            <p>in progress</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">June 2019 - February 2020</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">React Native Developer</h3>
            <div className="subheading mb-3">Zemopay</div>
            <p>in progress</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">February 2020 - Present</span>
          </div>
        </div>
      </div>
    </section>
  );
}
