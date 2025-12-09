import SectionHeading from './components/SectionHeading.jsx';
import { hero, education, skills, projects, certifications, socials } from './data.js';
import './App.css';

const App = () => {
  return (
    <div className="app-shell">
      <header className="hero" id="home">
        <div className="hero__content">
          <p className="hero__eyebrow">Portfolio 2024</p>
          <h1>{hero.name}</h1>
          <p className="hero__tagline">{hero.tagline}</p>
          <p className="hero__intro">{hero.intro}</p>
          <div className="hero__cta">
            {hero.cta.map((item) => (
              <a key={item.label} href={item.href} className="button" target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="hero__accent-card">
          <p>AI & ML Undergraduate</p>
          <p>React Developer</p>
          <p>Problem Solver</p>
          <img src="image.png" alt="profile" width="350" height="350" />
        </div>
      </header>

      <main>
        <section className="about" id="about">
          <SectionHeading label="About" eyebrow="Profile" />
          <p>
            Hi! I'm Divyanjali, a first-year B.Tech student specializing in Artificial Intelligence and Machine Learning at Newton School of Technology in collaboration with Ajeenkya DY Patil University. I'm passionate about building responsive, accessible, and human-centered interfaces.
          </p>
        </section>

        <section className="education" id="education">
          <SectionHeading label="Education" eyebrow="Timeline" />
          <div className="education__grid">
            {education.map((item) => (
              <article key={item.title} className="card">
                <div>
                  <p className="card__eyebrow">{item.period}</p>
                  <h3>{item.title}</h3>
                  <p className="muted">{item.school}</p>
                </div>
                <span className="pill">{item.score}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="skills" id="skills">
          <SectionHeading label="Skills" eyebrow="Toolkit" />
          <div className="skills__grid">
            <div className="card">
              <h3>Core Stack</h3>
              <ul>
                {skills.core.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>Tools & Practices</h3>
              <ul>
                {skills.tools.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="projects" id="projects">
          <SectionHeading label="Projects" eyebrow="Selected Work" />
          <div className="projects__grid">
            {projects.map((project) => (
              <article key={project.title} className="card">
                <div>
                  <h3>{project.title}</h3>
                  <p className="muted">{project.description}</p>
                </div>
                <div className="pill-row">
                  {project.stack.map((tag) => (
                    <span className="pill" key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project__links">
                  <a href={project.code} target="_blank" rel="noreferrer">Code</a>
                  <span aria-hidden="true">·</span>
                  <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="certifications" id="certifications">
          <SectionHeading label="Certifications" eyebrow="Learning" />
          <div className="certifications__grid">
            {certifications.map((item) => (
              <article key={item.title} className="card">
                <p className="card__eyebrow">{item.issuer}</p>
                <h3>{item.title}</h3>
                <p className="muted">{item.summary}</p>
                <a className="text-link" href={item.link} target="_blank" rel="noreferrer">
                  View Credential →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <SectionHeading label="Contact" eyebrow="Let's talk" />
          <div className="contact__grid">
            <article className="card">
              <h3>Email</h3>
              <a className="text-link" href="mailto:divyagopisetty380@gmail.com">divyagopisetty380@gmail.com</a>
            </article>
            <article className="card socials">
              <h3>Connect</h3>
              <ul>
                {socials.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} {hero.name}. Built with React & Vite.</p>
      </footer>
    </div>
  );
};

export default App;
