import { useEffect, useMemo, useState } from 'react';
import { experience, profile, projects, skillGroups } from './data.js';
import './App.css';

const nav = [['home', 'Home'], ['research', 'Research'], ['projects', 'Projects'], ['experience', 'Experience'], ['skills', 'Skills'], ['about', 'About'], ['contact', 'Contact']];

function NetworkFigure() {
  return <div className="network-figure" aria-label="Illustrative neural network feature flow" role="img">
    <svg viewBox="0 0 520 400" aria-hidden="true">
      <g className="network-lines">
        {[['70,85','210,70'],['70,85','210,195'],['70,200','210,70'],['70,200','210,195'],['70,200','210,320'],['70,315','210,195'],['70,315','210,320'],['210,70','350,125'],['210,70','350,275'],['210,195','350,125'],['210,195','350,275'],['210,320','350,125'],['210,320','350,275'],['350,125','460,200'],['350,275','460,200']].map(([a,b],i)=><line key={i} x1={a.split(',')[0]} y1={a.split(',')[1]} x2={b.split(',')[0]} y2={b.split(',')[1]} />)}
      </g>
      {[['70','85'],['70','200'],['70','315'],['210','70'],['210','195'],['210','320'],['350','125'],['350','275'],['460','200']].map(([cx,cy],i)=><circle key={i} className={`network-node node-${i}`} cx={cx} cy={cy} r={i===8?9:6} />)}
      <text x="34" y="368">INPUT</text><text x="177" y="368">FEATURES</text><text x="328" y="368">FUSION</text><text x="429" y="368">OUTPUT</text>
    </svg>
    <span className="figure-label">FEATURE FUSION / 01</span>
    <span className="figure-coordinates">18° 31′ N<br/>73° 51′ E</span>
  </div>;
}

function Metrics({ items }) {
  return <div className="metric-list">{items.map((m) => <div className="metric" key={m.label} tabIndex="0" title={m.note}>
    <div className="metric-top"><span>{m.label}<span className="metric-info" aria-hidden="true"> i</span></span><strong>{m.display ?? m.value}</strong></div>
    <div className="metric-track"><span style={{ width: `${Math.min(100, (m.value / m.max) * 100)}%` }} /></div>
    <span className="metric-note">{m.note}</span>
  </div>)}</div>;
}

function ProjectCaseStudy({ project }) {
  return <div className="case-study" id={`case-${project.id}`}>
    <div className="case-intro"><div><span className="micro-label">CASE STUDY / {project.number}</span><h3>{project.title}</h3><p>{project.overview}</p></div><div className="case-tags">{project.stack.map(tag=><span key={tag}>{tag}</span>)}</div></div>
    <div className="case-grid">
      <div className="case-architecture"><span className="micro-label">SYSTEM / WORKFLOW</span><div className="pipeline">{project.architecture.map((step,i)=><div className="pipeline-step" key={step}><span className="pipeline-index">0{i+1}</span><span>{step}</span>{i<project.architecture.length-1&&<span className="pipeline-arrow" aria-hidden="true">→</span>}</div>)}</div>
        <ul className="case-notes">{project.details.map(note=><li key={note}>{note}</li>)}</ul>
      </div>
      <div className="case-metrics"><span className="micro-label">DOCUMENTED EVALUATION</span><Metrics items={project.metrics}/><p className="data-caption">Results as documented · no live inference</p></div>
    </div>
  </div>;
}

function App() {
  const [filter, setFilter] = useState('All');
  const [openProject, setOpenProject] = useState('viora');
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState('Computer Vision');
  const [mobileOpen, setMobileOpen] = useState(false);
  const categories = ['All', 'Computer Vision', 'Generative AI', 'Applied ML'];
  const visibleProjects = useMemo(() => filter === 'All' ? projects : projects.filter(p => p.category === filter), [filter]);
  const relatedProjects = projects.filter(p => `${p.category} ${p.title} ${p.subtitle} ${p.description} ${p.overview} ${p.stack.join(' ')} ${p.architecture.join(' ')} ${p.details.join(' ')} ${p.metrics.map(m=>m.label).join(' ')}`.toLowerCase().includes(selectedSkill.toLowerCase()));

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };
    update(); window.addEventListener('scroll', update, { passive: true }); window.addEventListener('resize', update);
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) setActiveSection(entry.target.id); }), { rootMargin: '-35% 0px -55% 0px' });
    document.querySelectorAll('main section[id], header[id]').forEach(el => observer.observe(el));
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); observer.disconnect(); };
  }, []);

  const onHeroMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--pointer-x', `${(event.clientX - rect.left) / rect.width}`);
    event.currentTarget.style.setProperty('--pointer-y', `${(event.clientY - rect.top) / rect.height}`);
  };

  return <div className="app-shell">
    <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }} aria-hidden="true" />
    <nav className="nav-wrap" aria-label="Main navigation">
      <a href="#home" className="wordmark" aria-label="Divyanjali Gopisetty, home">DG<span> / AI</span></a>
      <button className="menu-toggle" aria-expanded={mobileOpen} aria-controls="primary-nav" onClick={()=>setMobileOpen(v=>!v)}>{mobileOpen?'Close':'Menu'}<span aria-hidden="true">{mobileOpen?'−':'+'}</span></button>
      <div className={`nav-links ${mobileOpen?'is-open':''}`} id="primary-nav">{nav.map(([id,label])=><a key={id} href={`#${id}`} className={activeSection===id?'active':''} onClick={()=>setMobileOpen(false)}>{label}</a>)}<a className="nav-resume" href={profile.resume} target="_blank" rel="noreferrer">Resume ↗</a></div>
    </nav>

    <header className="hero section-wrap" id="home" onPointerMove={onHeroMove}>
      <div className="hero-copy">
        <div className="status-line"><span className="status-dot"/> AI/ML ENGINEER <span className="status-divider">/</span> RESEARCH & APPLIED ML</div>
        <p className="hero-kicker">INDEPENDENT RESEARCHER · PUNE, INDIA</p>
        <h1>DIVYANJALI<br/><span>GOPISETTY</span></h1>
        <p className="hero-statement">I build, experiment with, and investigate <em>intelligent systems.</em></p>
        <p className="hero-description">Exploring computer vision, generative AI, and the methods that make machine learning systems useful, measurable, and explainable.</p>
        <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <span>↘</span></a><a className="button button-quiet" href={profile.resume} target="_blank" rel="noreferrer">View resume ↗</a></div>
        <div className="social-row">{profile.socials.map(s=><a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}<span>↗</span></a>)}<a href={`mailto:${profile.email}`}>Email<span>↗</span></a></div>
      </div>
      <div className="hero-visual"><NetworkFigure/><div className="hero-caption"><span>01 — 04</span><span>LEARNED + EXPLICIT FEATURES</span></div></div>
      <a href="#research" className="scroll-cue"><span className="scroll-cue-line"/> SCROLL TO EXPLORE</a>
    </header>

    <main>
      <section id="research" className="section-wrap research-strip">
        <div className="section-label"><span>01 / RESEARCH FOCUS</span><span>QUESTIONS → SYSTEMS → EVIDENCE</span></div>
        <div className="research-copy"><h2>Curiosity, made<br/><span>computational.</span></h2><p>My work moves between applied research and implementation: shaping data, testing model choices, reading evaluation carefully, and building the interfaces that make results usable.</p></div>
        <div className="research-topics"><span>COMPUTER VISION</span><span>GENERATIVE AI</span><span>MODEL EVALUATION</span><span>EXPLAINABLE ML</span></div>
      </section>

      <section id="projects" className="section-wrap projects-section">
        <div className="section-label"><span>02 / SELECTED WORK</span><span>FOUR PROJECTS · DOCUMENTED RESULTS</span></div>
        <div className="section-title-row"><div><p className="micro-label">RESEARCH & ENGINEERING</p><h2>Questions worth<br/><span>building around.</span></h2></div><p className="section-lede">A selection of work across vision systems, language models, and applied machine learning.</p></div>
        <div className="filter-row" role="group" aria-label="Filter projects">{categories.map(c=><button key={c} className={filter===c?'selected':''} onClick={()=>setFilter(c)} aria-pressed={filter===c}>{c}</button>)}</div>
        <div className="project-list">{visibleProjects.map((project,idx)=><article className={`project-card ${openProject===project.id?'expanded':''}`} key={project.id}>
          <button className="project-trigger" aria-expanded={openProject===project.id} aria-controls={`details-${project.id}`} onClick={()=>setOpenProject(openProject===project.id?null:project.id)}>
            <span className="project-number">{project.number}</span><span className="project-heading"><span className="project-category">{project.category}</span><strong>{project.title}</strong><span className="project-subtitle">{project.subtitle}</span></span><span className="project-summary">{project.description}</span><span className="project-open" aria-hidden="true">{openProject===project.id?'−':'+'}</span>
          </button>
          {openProject===project.id&&<div id={`details-${project.id}`}><ProjectCaseStudy project={project}/></div>}
        </article>)}</div>
      </section>

      <section id="experience" className="section-wrap experience-section">
        <div className="section-label"><span>03 / RESEARCH JOURNEY</span><span>2026 — PRESENT</span></div>
        <div className="section-title-row"><div><p className="micro-label">EXPERIENCE</p><h2>Learning by<br/><span>doing the work.</span></h2></div><p className="section-lede">Separate research and engineering roles, each connected to a different problem space.</p></div>
        <div className="timeline">{experience.map((item,i)=><details className="timeline-entry" key={item.role}><summary><span className="timeline-index">0{i+1}</span><span className="timeline-date">{item.date}</span><span className="timeline-main"><small>{item.org}</small><strong>{item.role}</strong></span><span className="timeline-toggle" aria-hidden="true">+</span></summary><p>{item.detail}</p></details>)}</div>
      </section>

      <section id="skills" className="section-wrap skills-section">
        <div className="section-label"><span>04 / WORKING TOOLKIT</span><span>TOOLS FOLLOW THE QUESTION</span></div>
        <div className="section-title-row"><div><p className="micro-label">SKILLS CONSTELLATION</p><h2>Methods, tools<br/><span>& connections.</span></h2></div><p className="section-lede">Choose a skill to see where it connects to my selected work. No proficiency scores, just the context where I have used it.</p></div>
        <div className="skills-layout"><div className="skill-groups">{skillGroups.map(group=><div className="skill-group" key={group.label}><span>{group.label}</span><div>{group.skills.map(skill=><button key={skill} className={selectedSkill===skill?'chosen':''} onClick={()=>setSelectedSkill(skill)}>{skill}</button>)}</div></div>)}</div><aside className="skill-related"><span className="micro-label">RELATED TO / {selectedSkill.toUpperCase()}</span>{relatedProjects.length?relatedProjects.map(p=><a href="#projects" key={p.id} onClick={()=>{setOpenProject(p.id);setFilter('All')}}>{p.title}<span>↗</span></a>):<p>Explore the selected work to see how this skill fits into a broader system.</p>}</aside></div>
      </section>

      <section id="about" className="section-wrap about-section">
        <div className="section-label"><span>05 / ABOUT & EDUCATION</span><span>NEWTON SCHOOL OF TECHNOLOGY</span></div>
        <div className="about-grid"><div><p className="micro-label">A LITTLE CONTEXT</p><h2>Research-minded.<br/><span>Implementation-led.</span></h2><p className="about-copy">I’m a third-year B.Tech student specializing in AI & ML at Newton School of Technology, Ajeenkya DY Patil University, Pune. I’m interested in how intelligent systems behave in practice: what data they learn from, what their metrics reveal, and how people can understand their outputs.</p></div><div className="education-card"><span className="micro-label">EDUCATION / 2024—2028</span><h3>B.Tech · Artificial Intelligence & Machine Learning</h3><p>Newton School of Technology<br/>Ajeenkya DY Patil University · Pune</p><strong>CGPA <span>8.11 / 10</span></strong><hr/><span className="micro-label">CERTIFICATION</span><h3>AI & ML Training Program</h3><p>iHub-Data, IIIT Hyderabad · 24 weeks</p><small>Machine learning, deep learning, CNNs, NLP, TensorFlow, and model deployment.</small></div></div>
      </section>

      <section id="contact" className="section-wrap contact-section">
        <div className="section-label"><span>06 / NEXT CONVERSATION</span><span>OPEN TO IDEAS & GOOD QUESTIONS</span></div>
        <p className="micro-label">CONTACT</p><h2>Let’s investigate<br/><em>what’s possible.</em></h2><p className="contact-copy">Explore the work, compare notes on a research question, or get in touch.</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<span>↗</span></a>
        <div className="contact-bottom"><div className="social-row">{profile.socials.map(s=><a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}<span>↗</span></a>)}<a href={profile.resume} target="_blank" rel="noreferrer">Resume<span>↗</span></a></div><a href="#home" className="back-top">BACK TO TOP ↑</a></div>
      </section>
    </main>
    <footer className="footer section-wrap"><span>© {new Date().getFullYear()} DIVYANJALI GOPISETTY</span><span>BUILT WITH CURIOSITY · REACT + VITE</span><a href="#home">TOP ↑</a></footer>
  </div>;
}

export default App;
