
import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">YASHASVI.</a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      
<section id="home" className="hero">
  <div className="hero-content">
    <p className="eyebrow">HELLO, WORLD! I'M</p>

    <h1>
      Yashasvi
      <br />
      Chaudhary<span>.</span>
    </h1>

    <h2>Computer Science Student & Developer</h2>

    <p>
      I love learning technology, solving problems,
      and building projects that turn ideas into reality.
    </p>

    <a href="#projects" className="button-link">
      Explore My Projects ↗
    </a>
  </div>

  <div className="profile-card">
    <div className="profile-top">
      <span className="status-dot"></span>
      <span>DEVELOPER PROFILE</span>
    </div>

    <div className="profile-avatar">YC</div>

    <h3>Yashasvi Chaudhary</h3>
    <p className="profile-role">Computer Science Student</p>

    <div className="profile-divider"></div>

    <div className="profile-detail">
      <span>University</span>
      <strong>GLA University</strong>
    </div>

    <div className="profile-detail">
      <span>Graduation</span>
      <strong>2029</strong>
    </div>

    <div className="profile-detail">
      <span>CGPA</span>
      <strong>9.11 / 10</strong>
    </div>

    <div className="profile-bottom">
      <span>BUILDING THE FUTURE</span>
      <span>↗</span>
    </div>
  </div>
</section>

      
      <section id="about" className="content-section">
        <p className="eyebrow">01 / ABOUT ME</p>
        <h2>A developer in the making.</h2>

        <p>
          I'm Yashasvi, a Computer Science student at GLA University.
          I enjoy exploring technology, solving coding problems,
          and building projects that turn ideas into reality.
          I'm constantly learning and improving my development skills.
        </p>
      </section>

      <section id="skills" className="content-section">
        <p className="eyebrow">02 / MY SKILLS</p>
        <h2>Technologies I'm learning.</h2>

        <div className="skills-grid">
          <span>C</span>
          <span>Java</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Git & GitHub</span>
          <span>Docker</span>
        </div>
      </section>
     
      <section id="projects" className="content-section">
        <p className="eyebrow">03 / FEATURED WORK</p>
        <h2>Ideas I've been building.</h2>
        <p>
          A few projects that reflect my curiosity and journey as a developer.
        </p>

        <div className="projects-grid">
          <article className="project-card">
            <span className="project-number">PROJECT / 01</span>
            <h3>DEVQUEST</h3>
            <p>
              A gamified developer journey tracker for learning,
              coding practice, projects, and progress.
            </p>
            <div className="project-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>PostgreSQL</span>
            </div>
          </article>

          <article className="project-card">
            <span className="project-number">PROJECT / 02</span>
            <h3>ProHours</h3>
            <p>
              A productivity tracker for managing daily activities,
              goals, time, and personal progress.
            </p>
            <div className="project-tags">
              <span>React</span>
              <span>Express</span>
              <span>Prisma</span>
            </div>
          </article>

          <article className="project-card">
            <span className="project-number">PROJECT / 03</span>
            <h3>Tarang-e-Naghma</h3>
            <p>
              An offline-first music app concept focused on
              uninterrupted listening and offline playback.
            </p>
            <div className="project-tags">
              <span>React Native</span>
              <span>Expo</span>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="content-section contact-section">
        <p className="eyebrow">04 / GET IN TOUCH</p>
        <h2>Let's build something great.</h2>

        <p>
          I'm interested in hackathons, collaborative projects,
          and opportunities to learn and grow as a developer.
          Have an idea? Let's connect!
        </p>

        <a
          className="button-link"
          href="https://github.com/yashasvichaudhary1103-ux"
          target="_blank"
          rel="noreferrer"
        >
          Visit My GitHub ↗
        </a>
      </section>

      <footer className="footer">
        <p>Designed & built by Yashasvi Chaudhary.</p>
        <a
          href="#home"
          className="back-to-top"
        >
          Back to top ↑
        </a>
      </footer>

    </div>
    
  );
}

export default App;
