import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Award, Braces, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { siCss3, siGit, siGithub, siHtml5, siJavascript, siNodedotjs, siPython, siReact, siTypescript } from "simple-icons";
import portrait from "@/assets/portfolio-portrait.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Portfolio — Aanya Sharma | CS Student & Developer" },
      { name: "description", content: "Meet Aanya Sharma, a computer science student building thoughtful web experiences with code, curiosity, and care." },
      { property: "og:title", content: "Aanya Sharma — CS Student & Developer" },
      { property: "og:description", content: "A computer science student building thoughtful web experiences." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  const skills = [
    { name: "HTML5", icon: siHtml5, type: "Markup" },
    { name: "CSS3", icon: siCss3, type: "Styling" },
    { name: "JavaScript", icon: siJavascript, type: "Language" },
    { name: "TypeScript", icon: siTypescript, type: "Language" },
    { name: "React", icon: siReact, type: "Framework" },
    { name: "Node.js", icon: siNodedotjs, type: "Runtime" },
    { name: "Python", icon: siPython, type: "Language" },
    { name: "Git & GitHub", icon: siGit, secondaryIcon: siGithub, type: "Tools" },
  ];

  const projects = [
    { number: "01", name: "Bloom & Balance", kind: "Wellness · Web application", description: "A calm, accessible habit tracker designed to make everyday wellbeing feel a little more possible.", tags: ["React", "TypeScript", "CSS"], tone: "project-sage", glyph: "✳" },
    { number: "02", name: "Campus Connect", kind: "Community · UI/UX", description: "A welcoming home for student clubs, campus events, and the connections that make a university feel smaller.", tags: ["JavaScript", "Figma", "HTML"], tone: "project-lime", glyph: "↗" },
    { number: "03", name: "Greenhouse Notes", kind: "Open source · Developer tools", description: "A little plant-care dashboard that turns watering schedules into an easy, joyful routine.", tags: ["React", "Node.js", "API"], tone: "project-mint", glyph: "❋" },
  ];

  return (
    <main className="portfolio-page">
      <header className="site-header">
        <a href="#home" className="brand-mark" aria-label="Aanya Sharma home">AS<span>.</span></a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#certificates">Certificates</a>
        </nav>
        <a className="header-contact" href="#contact">Let’s talk <ArrowUpRight size={15} /></a>
      </header>

      <section className="hero-section section-wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> OPEN TO INTERNSHIPS & COLLABORATION</p>
          <h1>Curious mind.<br /><span>Thoughtful code.</span></h1>
          <p className="hero-description">Hi, I’m <strong>Aanya</strong> — a computer science student who loves turning big ideas into simple, human-centered digital experiences.</p>
          <div className="hero-actions">
            <a className="button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
            <a className="text-link" href="#about">A little about me <ArrowDown size={15} /></a>
          </div>
          <div className="hero-footnote"><span>BASED IN</span> Bengaluru, India <span className="footnote-divider">/</span> <span>STUDYING</span> Computer Science</div>
        </div>
        <div className="hero-visual" aria-label="Portrait of a computer science student">
          <div className="portrait-frame"><img src={portrait} alt="Aanya, a computer science student, smiling beside her laptop" width={1024} height={1280} fetchPriority="high" /></div>
          <div className="portrait-stamp"><Sparkles size={16} /><span>BUILDING WITH<br />CURIOSITY</span></div>
          <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
          <div className="hero-image-note">A little bit of logic,<br />a lot of heart.</div>
        </div>
        <div className="hero-index"><span>01</span><span className="index-rule" /><span>SCROLL TO EXPLORE</span></div>
      </section>

      <section className="intro-band"><div className="section-wrap intro-inner"><span className="eyebrow">A STUDENT BY DAY</span><p>Learning out loud, <em>building with intention.</em></p><span className="intro-flower">✳</span></div></section>

      <section className="section-wrap content-section about-section" id="about">
        <div className="section-heading"><p className="eyebrow">A LITTLE ABOUT ME</p><span className="section-number">01 — 06</span></div>
        <div className="about-grid"><h2>Tech is my craft.<br /><span>People are my why.</span></h2><div className="about-copy"><p>I’m a computer science student fascinated by what happens when thoughtful design meets good engineering. I enjoy making the web feel less complicated and a little more welcoming.</p><p>Between classes, you’ll find me exploring frontend development, learning something new just because, or collaborating on ideas that make a difference.</p><div className="about-facts"><div><span>CURRENTLY</span><strong>Computer Science student</strong></div><div><span>ALWAYS</span><strong>Learning & experimenting</strong></div></div></div></div>
      </section>

      <section className="skills-band" id="skills"><div className="section-wrap content-section"><div className="section-heading"><div><p className="eyebrow">MY TOOLKIT</p><h2>Tools of the trade<span>.</span></h2></div><p className="section-aside">A growing collection of things I<br />love learning and building with.</p></div><div className="skills-grid">{skills.map((skill) => <div className="skill-item" key={skill.name}><span className="skill-symbol" aria-hidden="true"><svg viewBox="0 0 24 24" role="presentation"><path d={skill.icon.path} /></svg>{skill.secondaryIcon && <svg viewBox="0 0 24 24" role="presentation"><path d={skill.secondaryIcon.path} /></svg>}</span><span className="skill-name">{skill.name}</span><span className="skill-type">{skill.type}</span></div>)}</div></div></section>

      <section className="section-wrap content-section projects-section" id="projects"><div className="section-heading"><div><p className="eyebrow">SELECTED PROJECTS</p><h2>Made with curiosity<span>.</span></h2></div><span className="section-aside">A few things from the workbench.</span></div><div className="projects-list">{projects.map((project) => <article className="project-row" key={project.number}><div className={`project-art ${project.tone}`}><span className="project-art-glyph">{project.glyph}</span><span className="project-art-caption">{project.name}</span><span className="project-art-index">{project.number}</span></div><div className="project-info"><span className="project-kind">{project.kind}</span><h3>{project.name}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><a href="#contact" className="project-arrow" aria-label={`Ask about ${project.name}`}><ArrowUpRight size={21} /></a></article>)}</div></section>

      <section className="experience-band" id="experience"><div className="section-wrap content-section"><div className="section-heading"><div><p className="eyebrow">THE JOURNEY SO FAR</p><h2>Learning by doing<span>.</span></h2></div><p className="section-aside">Every new chapter starts<br />with a first step.</p></div><div className="timeline"><div className="timeline-entry"><span className="timeline-date">2024 — PRESENT</span><span className="timeline-dot" /><div><h3>Computer Science Student</h3><p className="timeline-place">University studies · Bengaluru, India</p><p className="timeline-description">Building strong foundations in programming, data structures, web development, and collaborative problem-solving.</p></div></div><div className="timeline-entry"><span className="timeline-date">2025 — PRESENT</span><span className="timeline-dot" /><div><h3>Independent Project Builder</h3><p className="timeline-place">Personal & collaborative projects</p><p className="timeline-description">Taking ideas from sketch to screen, learning new tools along the way, and sharing the things I make with others.</p></div></div><div className="timeline-entry"><span className="timeline-date">ALWAYS</span><span className="timeline-dot" /><div><h3>Curious Learner</h3><p className="timeline-place">Online courses · Open-source community</p><p className="timeline-description">Following curiosity into new frameworks, thoughtful design, and a more accessible, inclusive web.</p></div></div></div></div></section>

      <section className="section-wrap content-section certificates-section" id="certificates"><div className="section-heading"><div><p className="eyebrow">MILESTONES & MASTERY</p><h2>Proof of progress<span>.</span></h2></div><span className="section-aside">Every badge, a new beginning.</span></div><div className="certificate-grid"><article className="certificate-item"><span className="certificate-icon"><Award size={22} /></span><div><p className="certificate-source">META · COURSERA</p><h3>Introduction to Front-End Development</h3><p>HTML · CSS · JavaScript fundamentals</p></div><span className="certificate-year">2025</span></article><article className="certificate-item"><span className="certificate-icon"><Braces size={22} /></span><div><p className="certificate-source">FREECODECAMP</p><h3>Responsive Web Design</h3><p>Accessible, responsive web foundations</p></div><span className="certificate-year">2025</span></article><article className="certificate-item"><span className="certificate-icon"><Sparkles size={22} /></span><div><p className="certificate-source">GOOGLE · COURSERA</p><h3>Foundations of User Experience (UX) Design</h3><p>Research · Ideation · User-centered design</p></div><span className="certificate-year">2024</span></article><p className="certificate-note">Sample certificates — replace with your own credentials and earned dates.</p></div></section>

      <footer className="contact-footer" id="contact"><div className="section-wrap footer-inner"><p className="eyebrow">HAVE A PROJECT IN MIND?</p><h2>Good things start<br /><em>with a hello.</em></h2><a className="footer-email" href="mailto:hello@example.com">hello@example.com <ArrowUpRight size={19} /></a><div className="footer-bottom"><span>© 2025 Aanya Sharma · MADE WITH CARE</span><div className="social-links"><a href="https://github.com" aria-label="GitHub"><Github size={18} /></a><a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin size={18} /></a><a href="mailto:hello@example.com" aria-label="Email"><Mail size={18} /></a></div><a href="#home" className="back-top">BACK TO TOP ↑</a></div></div></footer>
    </main>
  );
}
