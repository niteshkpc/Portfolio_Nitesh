import React, { useEffect, useState } from 'react'
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, MapPin, GraduationCap,
  Award, BriefcaseBusiness, ExternalLink, Download, Sparkles
} from 'lucide-react'

const GITHUB = 'https://github.com/niteshkpc'
const LINKEDIN = 'https://linkedin.com/in/niteshkumar02'
const EMAIL = 'niteshkumaryp@gmail.com'

const projects = [
  {
    number: '01', type: 'NLP · MACHINE LEARNING', title: 'SpamShield',
    subtitle: 'End-to-end SMS spam detection',
    description: 'Built an SMS spam classification pipeline covering data cleaning, NLP preprocessing, TF-IDF feature extraction, model comparison, and an interactive Streamlit app.',
    highlight: '97.33% accuracy · 100% precision (reported test set)',
    tags: ['Python', 'Pandas', 'NumPy', 'NLTK', 'Scikit-learn', 'TF-IDF', 'Streamlit'],
    image: '/project-images/spamshield.svg', imageAlt: 'Illustration of a protected inbox filtering suspicious SMS messages', theme: 'lavender', link: 'https://github.com/niteshkpc/Spam-_SMS_Detection'
  },
  {
    number: '02', type: 'NLP · TRANSFORMERS · API', title: 'Text Summarizer',
    subtitle: 'Long text, distilled',
    description: 'Created an NLP summarization pipeline with Hugging Face Transformer models, web-collected text preprocessing, tokenization, and a FastAPI REST endpoint for real-time requests.',
    highlight: 'Hugging Face Transformers + FastAPI',
    tags: ['Python', 'Hugging Face', 'NLP', 'FastAPI', 'REST API'],
    image: '/project-images/text-summarizer.svg', imageAlt: 'Illustration of a long document condensed into a short summary', theme: 'peach', link: 'https://github.com/niteshkpc/Text_summarization'
  },
  {
    number: '03', type: 'NLP · RECURRENT NEURAL NETWORKS', title: 'Sentiment Analyzer',
    subtitle: 'Understanding sentiment in text',
    description: 'A sentiment analysis project using an RNN-based approach to classify text sentiment. Explore the source code and implementation on GitHub.',
    highlight: 'RNN · NLP · Text classification',
    tags: ['Python', 'RNN', 'NLP', 'Deep Learning', 'Sentiment Analysis'],
    image: '/project-images/sentiment-analyzer.svg', imageAlt: 'Illustration of sentiment signals moving through a neural network', theme: 'lavender', link: 'https://github.com/niteshkpc/Minor-Project-on-RNN'
  },
  {
    number: '04', type: 'COMPUTER VISION · BIOMETRICS', title: 'Intelligent AI Attendance System',
    subtitle: 'Automating attendance workflows',
    description: 'Developed a facial-recognition attendance workflow using OpenCV and deep-learning models, with OCR-based ID badge recognition and a framework for enrolling and recognizing multiple users.',
    highlight: 'Face recognition · OCR · live video processing',
    tags: ['Python', 'OpenCV', 'Deep Learning', 'OCR', 'Flask', 'CI/CD'],
    image: '/project-images/ai-attendance.svg', imageAlt: 'Illustration of a camera scanning a face for attendance', theme: 'mint', link: 'https://snapclass-main-projects.streamlit.app/'
  },
]

const skillGroups = [
  { title: 'Languages', items: ['Python', 'Java', 'SQL', 'JavaScript', 'HTML', 'CSS'] },
  { title: 'ML & Data', items: ['PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Hugging Face Transformers', 'NLTK', 'OpenCV', 'EDA', 'Feature Engineering'] },
  { title: 'AI / ML Practice', items: ['Supervised Learning', 'Classification', 'Model Evaluation', 'Precision / Recall / F1', 'TF-IDF', 'NLP', 'Computer Vision', 'Audio Processing', 'Voice Recognition'] },
  { title: 'Web, Tools & Infrastructure', items: ['FastAPI', 'Flask', 'Streamlit', 'Git & GitHub', 'VS Code', 'MongoDB', 'Kubernetes', 'CI/CD'] },
]

function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <header className="header">
    <a href="#home" className="brand" onClick={close}><span className="brand-mark">NK</span><span>NITESH KUMAR</span></a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
    <nav className={open ? 'nav nav-open' : 'nav'}>
      {[['Home', '#home'], ['About', '#about'], ['Projects', '#projects'], ['Skills', '#skills'], ['Education', '#education'], ['Contact', '#contact']].map(([label, href]) => <a key={label} href={href} onClick={close}>{label}</a>)}
      <a className="nav-cta" href="/resume.pdf" target="_blank" rel="noreferrer">Resume <Download size={14} /></a>
    </nav>
    <div className="header-socials">
      <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
      <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
    </div>
  </header>
}

function Hero() {
  return <section className="hero section-wrap" id="home">
    <div className="hero-copy">
      <p className="eyebrow"><span className="eyebrow-line" /> HELLO, I'M</p>
      <h1>Nitesh<br /><span>Kumar<span className="period">.</span></span></h1>
      <h2>AI/ML Engineer <span>&</span> Software Developer</h2>
      <p className="hero-description">B.Tech Computer Science (AI & ML) student with hands-on experience in Machine Learning, NLP, Computer Vision, and backend applications.</p>
      <div className="hero-actions">
        <a className="button button-cream" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
        <a className="button button-outline" href="#contact">Contact me <ArrowUpRight size={16} /></a>
      </div>
      <div className="hero-socials">
        <a href={GITHUB} target="_blank" rel="noreferrer"><Github size={17} /> github.com/niteshkumar02</a>
        <a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={17} /> linkedin.com/in/niteshkumar02</a>
        <a href={`mailto:${EMAIL}`}><Mail size={17} /> {EMAIL}</a>
      </div>
    </div>
    <div className="portrait-area">
      <div className="portrait-halo"></div><div className="portrait-ring"></div>
      <img className="portrait" src="/nitesh-portrait.png" alt="Portrait of Nitesh Kumar" />
      <div className="portrait-note"><span className="note-dot" /> BUILD · LEARN · INNOVATE</div>
      <div className="portrait-caption">AI / ML<br />DEVELOPER</div>
    </div>
    <div className="hero-foot"><span><span className="status-dot" /> OPEN TO ENTRY-LEVEL SOFTWARE / ML ROLES</span><span>LUCKNOW, UTTAR PRADESH, INDIA</span></div>
  </section>
}

function Marquee() {
  const words = ['MACHINE LEARNING', 'NATURAL LANGUAGE PROCESSING', 'COMPUTER VISION', 'BUILD WITH PURPOSE']
  return <div className="marquee"><div className="marquee-track">{[...words, ...words].map((w, i) => <span key={i}>{w}<b>✳</b></span>)}</div></div>
}

function SectionHeading({ label, title, aside }) {
  return <div className="section-heading"><div><p className="eyebrow">{label}</p><h2>{title}</h2></div>{aside && <p className="heading-aside">{aside}</p>}</div>
}

function About() {
  return <section className="about section-wrap" id="about">
    <SectionHeading label="A LITTLE ABOUT ME" title={<>Curious mind.<br /><span className="muted-title">Practical builder.</span></>} aside="01 / ABOUT" />
    <div className="about-grid">
      <div className="about-statement"><span className="quote-mark">“</span><p>I turn data, models, and code into useful software.</p></div>
      <div className="about-detail">
        <p>I'm pursuing a B.Tech in Computer Science (AI & ML) at S R Institution of Management and Technology in Lucknow. I enjoy building end-to-end ML workflows—from preprocessing and feature engineering to model evaluation and lightweight deployment.</p>
        <p>My project work spans SMS spam classification, transformer-based text summarization, and computer-vision attendance automation. I'm looking for opportunities to contribute, keep learning, and grow as a software or ML engineer.</p>
        <div className="about-facts">
          <div><GraduationCap size={18} /><span><small>DEGREE</small> B.Tech · CSE (AI & ML)</span></div>
          <div><MapPin size={18} /><span><small>LOCATION</small> Lucknow, India</span></div>
        </div>
        <a className="text-link" href="#education">Education & certifications <ArrowUpRight size={16} /></a>
      </div>
    </div>
  </section>
}

function ProjectCard({ project }) {
  return <article className="project-card">
    <div className={`project-visual ${project.theme}`}>
      <div className="visual-top"><span>{project.number} / SELECTED WORK</span><span className="visual-dot" /></div>
      <img className="project-image" src={project.image} alt={project.imageAlt} width="640" height="420" loading="lazy" />
      <div className="visual-caption"><span>{project.subtitle}</span><span>NK — LAB</span></div>
    </div>
    <div className="project-info">
      <div className="project-type">{project.type}</div>
      <div className="project-title-row"><h3>{project.title}</h3><a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}><ExternalLink size={18} /></a></div>
      <p>{project.description}</p>
      <div className="project-highlight">{project.highlight}</div>
      <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
    </div>
  </article>
}

function Projects() {
  return <section className="projects" id="projects">
    <div className="section-wrap">
      <SectionHeading label="THINGS I'VE BEEN BUILDING" title={<>Selected <span className="muted-title">work.</span></>} aside="02 / PROJECTS" />
      <p className="section-intro">Practical projects across NLP, machine learning, APIs, and computer vision.</p>
      <div className="project-grid">{projects.map(p => <ProjectCard key={p.number} project={p} />)}</div>
      <a className="all-projects" href={GITHUB} target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={17} /></a>
    </div>
  </section>
}

function Skills() {
  return <section className="skills section-wrap" id="skills">
    <SectionHeading label="TOOLS OF THE TRADE" title={<>Skills & <span className="muted-title">toolkit.</span></>} aside="03 / SKILLS" />
    <p className="skills-lead">Technologies and concepts drawn from my resume and project work.</p>
    <div className="skill-list">{skillGroups.map((group, i) => <div className="skill-row" key={group.title}><span className="skill-number">0{i + 1}</span><h3>{group.title}</h3><div className="skill-pills">{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div>
  </section>
}

function Education() {
  return <section className="education section-wrap" id="education">
    <SectionHeading label="THE LEARNING JOURNEY" title={<>Education & <span className="muted-title">recognition.</span></>} aside="04 / BACKGROUND" />
    <div className="education-grid">
      <div className="education-column">
        <h3><GraduationCap size={21} /> Education</h3>
        <article className="timeline-item"><span className="timeline-date">EXPECTED 2027</span><h4>B.Tech, Computer Science (AI & ML)</h4><p>S R Institution of Management and Technology</p><small>Lucknow, Uttar Pradesh</small></article>
        <article className="timeline-item"><span className="timeline-date">2023</span><h4>Intermediate (Class XII)</h4><p>Lucknow Model Public Inter College</p><small>Lucknow, Uttar Pradesh</small></article>
      </div>
      <div className="education-column certifications">
        <h3><Award size={21} /> Certifications & participation</h3>
        <article className="cert-item"><span className="cert-icon"><Sparkles size={17} /></span><div><h4>Nexus Hackathon × DEVRhylme</h4><p>Participant / Hackathon Certificate</p></div></article>
        <article className="cert-item"><span className="cert-icon"><Code2 size={17} /></span><div><h4>Java Programming</h4><p>Certification</p></div></article>
        <article className="cert-item"><span className="cert-icon"><BriefcaseBusiness size={17} /></span><div><h4>Frontend Web Development</h4><p>Certification</p></div></article>
      </div>
    </div>
  </section>
}

function Contact() {
  const [showDetails, setShowDetails] = useState(false)

  return <section className="contact section-wrap" id="contact">
    <div className="contact-card">
      <div className="contact-orb"><div className="orb-ring"></div><div className="orb-ring ring-two"></div><Mail size={28} /></div>
      <p className="eyebrow">HAVE AN OPPORTUNITY OR IDEA?</p>
      <h2>Let's build<br /><span>something useful.</span></h2>
      <p className="contact-copy">Open to entry-level software and ML engineering roles, internships, and collaborations.</p>
      <button className="contact-button" type="button" onClick={() => setShowDetails(!showDetails)} aria-expanded={showDetails} aria-controls="contact-details">
        {showDetails ? 'Hide contact details' : 'Get in touch'} {showDetails ? <X size={17} /> : <Mail size={17} />}
      </button>
      {showDetails && <div className="contact-details" id="contact-details">
        <a href={`mailto:${EMAIL}`}><Mail size={18} /><span><small>EMAIL</small>{EMAIL}</span></a>
        <a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={18} /><span><small>LINKEDIN</small>linkedin.com/in/niteshkumar02</span></a>
        <a href={GITHUB} target="_blank" rel="noreferrer"><Github size={18} /><span><small>GITHUB</small>github.com/niteshkpc</span></a>
      </div>}
    </div>
  </section>
}

function Footer() {
  return <footer className="footer section-wrap">
    <a href="#home" className="brand"><span className="brand-mark">NK</span><span>NITESH KUMAR</span></a>
    <span className="footer-note">MADE WITH CURIOSITY · © {new Date().getFullYear()}</span>
    <div className="socials">
      <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
      <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
      <a href={`mailto:${EMAIL}`} aria-label="Email"><Mail size={18} /></a>
    </div>
  </footer>
}

export default function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.section-heading, .about-statement, .about-detail, .project-card, .skill-row, .contact-card, .timeline-item, .cert-item')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    nodes.forEach(node => observer.observe(node))
    return () => observer.disconnect()
  }, [])
  return <><Header /><main><Hero /><Marquee /><About /><Projects /><Skills /><Education /><Contact /></main><Footer /></>
}
